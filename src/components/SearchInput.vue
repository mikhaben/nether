<template>
  <v-form class="d-flex" @submit.prevent="onSubmit">
    <v-row no-gutters>
      <v-col cols="9">
        <v-text-field
          solo
          label="search all of npm"
          v-model="title"
          color="black"
          :loading="isLoading"
          :disabled="isLoading"
        >
          <template v-slot:append v-if="items">
            <v-chip label small class="ma-2" color="black white--text">
              <v-icon x-small left color="white">
                mdi-expand-all-outline
              </v-icon>
              {{ items.total }}
            </v-chip>
          </template>
        </v-text-field>
      </v-col>

      <v-col>
        <v-btn
          class="ml-2 mt-1"
          color="black"
          elevation="2"
          :disabled="isLoading"
          large
          @click="onSubmit"
        >
          <v-icon color="white"> mdi-magnify </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { getPopularItemsList, getSearchResult } from "@/api";
import { getPackument } from "query-registry";
import { mapActions } from "vuex";

export default {
  data: () => ({
    title: "",
    isLoading: false,
    items: "",
  }),

  methods: {
    ...mapActions(["updateItems"]),

    async onSubmit() {
      if (this.title === "") {
        return;
      }

      this.isLoading = true;
      let data = await getSearchResult(this.title, 0);
      this.updateItems(data);
      this.items = data;
      this.isLoading = false;

      this.$emit("onSubmited", this.items.total);
    },
  },

  // async beforeMount() {
  //   let popularItems = {
  //     objects: [],
  //     total: "",
  //   };

  //   // get list of popular items from JSdelivr
  //   let popularItemsRough = await getPopularItemsList();

  //   // get all info about package from npm
  //   // issue - some names do not match
  //   await popularItemsRough.forEach(async (element) => {
  //     let baseInfo;
  //     try {
  //       baseInfo = await getPackument({ name: element.name });
  //     } catch (err) {
  //       console.error("name dont match, package dont found");
  //       return;
  //     }

  //     // format to fit obj
  //     let formatedInfo = {
  //       package: {
  //         name: baseInfo.name,
  //         author: {
  //           name: baseInfo.author.name,
  //           email: baseInfo.author.email,
  //         },
  //         description: baseInfo.description,
  //         version: baseInfo.distTags.latest,
  //         links: {
  //           homepage: baseInfo.homepage,
  //           repository: baseInfo.gitRepository.url,
  //         },
  //       },
  //     };
  //     popularItems.objects.push(formatedInfo);

  //     // get total count
  //     popularItems.total = popularItems.objects.length;
  //   });

  //   // push to store
  //   this.updateItems(popularItems);
  //   this.items = popularItems;
  // }
};
</script>
