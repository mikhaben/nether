<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col>
            <h1 class="mb-2">Holla :)</h1>
          </v-col>
        </v-row>

        <SearchInput @onSubmited="deliverTotal" />
        <ItemsList :total="totalItems" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import ItemsList from "@/components/ItemsList";
import Footer from "@/components/Footer";

export default {
  name: "App",

  data() {
    return {
      totalItems: 0,
    };
  },

  methods: {
    deliverTotal(total) {
      this.totalItems = total;
    },
  },

  components: {
    SearchInput,
    ItemsList,
    Footer,
  },
};
</script>
