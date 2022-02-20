<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
    hz
    </v-app-bar> -->

    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col>
            <h1 class="mb-2">
              Holla :) 
            </h1>
          </v-col>
        </v-row>

        <SearchInput/>
        <ItemsList/>
        <Dialog/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SearchInput from '@/components/SearchInput';
import ItemsList from '@/components/ItemsList';
import Dialog from '@/components/Dialog';

export default {
  name: 'App',

  components: {
    SearchInput,
    ItemsList,
    Dialog
  },

  data() {
    return{

    }
  },
};
</script>
