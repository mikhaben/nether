<template>
  <v-list-item class="px-0">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="mb-4 elevation-0" color="grey lighten-2">
          <v-card-title class="text-h5 font-weight-medium">
            {{ item.package.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.package.description }}
          </v-card-subtitle>

          <v-card-text class="d-flex justify-space-between align-end flex-wrap">
            <div class="d-flex flex-column">
              <span class="mb-1">v.{{ item.package.version }} </span>
              <a
                :href="item.package.links.homepage"
                target="_blank"
                rel="noopener noreferrer"
                class="text-truncate col-10 px-0 py-0"
              >
                {{ item.package.links.homepage }}
              </a>
            </div>
            <Dialog
              :data="collectedData"
              :isLoading="isLoading"
              @triggerDialog="updateData"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script>
import { getCurrentItemStat } from "@/api";
import Dialog from "@/components/Dialog";

export default {
  components: {
    Dialog,
  },

  data() {
    return {
      collectedData: {},
      isLoading: false,
    };
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async makeCollectedData() {
      this.isLoading = true;

      let stat = await getCurrentItemStat(this.item.package.name);
      this.collectedData = {
        author: this.item.package.author,
        name: this.item.package.name,
        description: this.item.package.description,
        version: this.item.package.version,
        rank: stat.rank,
        total: stat.total,
        homePage: this.item.package.links.homepage,
        npm: this.item.package.links.npm,
        repository: this.item.package.links.repository,
      };

      this.isLoading = false;
    },

    updateData() {
      this.makeCollectedData();
    },
  },

  async created() {
    this.makeCollectedData();
  },
};
</script>
