<template>
  <div>
    <v-list v-if="itemsList">
      <Item v-for="item in itemsList" :key="item.message" :item="item" />
    </v-list>

    <div class="text-center mb-3" v-if="itemsList">
      <v-btn
        :loading="isLoading"
        color="black"
        class="white--text"
        @click="paginate"
        v-if="!isLastPage"
        >More</v-btn
      >
      <div class="" v-else>the end</div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import { getSearchResult } from "@/api";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      threeshold: 20,
      totalItems: this.total,
      isLoading: false,
      isLastPage: false,
    };
  },

  props: {
    total: {
      type: Number,
      required: true,
    },
  },

  components: {
    Item,
  },

  computed: {
    ...mapGetters(["itemsList"]),

    length() {
      return Math.ceil(this.itemsList.length / this.pageSize);
    },

    paginatedList() {
      return this.itemsList.slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      );
    },
  },

  methods: {
    ...mapActions(["updateItems", "pushToItems"]),

    async paginate() {
      console.log(this.threeshold, this.total, this.itemsList);
      if (this.threeshold < this.total) {
        this.isLoading = true;
        this.threeshold = this.threeshold + 20;
        let paginatedItems = await getSearchResult("react", this.threeshold);
        this.pushToItems(paginatedItems);
        this.isLoading = false;
      } else {
        this.isLastPage = true;
      }
    },
  },

  watch: {
    serchUpdate() {
      // FIXME: review this total
    },
  },
};
</script>
