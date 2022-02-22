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
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
    };
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
};
</script>
