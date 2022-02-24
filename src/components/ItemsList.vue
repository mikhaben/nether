<template>
  <div>
    <v-list v-if="itemsList">
      <Item v-for="item in paginatedList" :key="item.message" :item="item" />
    </v-list>

    <div class="text-center mb-3" v-if="itemsList">
      <v-pagination
        color="black"
        v-model="page"
        :length="length"
        :total-visible="pageSize"
        @input="checkLastPage"
      ></v-pagination>
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
      threeshold: 0,
      totalItems: this.total,
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
    ...mapActions(["updateItems"]),

    async checkLastPage() {
      if (this.page == this.length) {
        this.threeshold = this.threeshold + 250;
        if (this.threeshold < this.total) {
          let paginatedItems = await getSearchResult("react", this.threeshold);
          this.updateItems(paginatedItems);
          this.page = 1;
          console.log(this.threeshold);
        } else {
          console.log(this.threeshold);
        }
      }
    },
  },
};
</script>
