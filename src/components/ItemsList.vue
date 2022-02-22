<template>
  <v-list>
    <Item
      v-for="item in itemsList"
      :key="item.message"
      :item="item"
    />
  </v-list>
</template>

<script>

import Item from "@/components/Item";
import { mapGetters } from "vuex";

export default ({
    components:{
        Item
    },

    computed:{
        ...mapGetters(["itemsList"]),
    },
})
</script>
