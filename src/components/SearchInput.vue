<template>
  <v-form
    class="d-flex "
    @submit.prevent="onSubmit"
  >
    <v-row no-gutters>

      <v-col cols="9">
        <v-text-field
          solo
          label="search all of npm"
          v-model="title"
          color="black"
          :loading = isLoading
          :disabled = isLoading
        ></v-text-field>
      </v-col>

      <v-col>
        <v-btn
          class="ml-2 mt-1"
          color="black"
          elevation="2"
          :disabled = isLoading
          large
          @click="onSubmit"
        >
          <v-icon color="white">
            mdi-magnify
          </v-icon>
        </v-btn>

      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { getSearchResult } from "@/api";
import { mapActions } from "vuex";

export default ({
  data:() => ({
    title: '',
    isLoading: false
  }),

  methods:{
    ...mapActions(["updateItems"]),

    async onSubmit() {
      if(this.title === ''){
        return
      }
    
      this.isLoading = true
      let data = await getSearchResult(this.title)
      this.updateItems(data)
      this.isLoading = false
    },
  },

})
</script>
