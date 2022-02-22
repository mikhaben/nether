<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          v-bind="attrs"
          v-on="on"
          small
        >
          <v-icon color="white">
            mdi-information-outline
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ data.name }} <span class="pl-2"> {{ data.version }} </span>
        </v-card-title>

        <v-card-text class="pt-2">
          <div class=""> {{ data.description }} </div>
          <div class="">
            <div class="pa-4 text-center secondary text-no-wrap rounded-sm">
               {{ data.rank }} 
            </div>
            <div class=""> {{ data.total }} </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="black"
            small
            @click="dialog = false"
          >
            <v-icon color="white">
              mdi-close-thick
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  data(){
    return {
      dialog: false,
    }
  },
  
  props:{
    data:{
        type: Object,
        required: true
    },
  },
}

</script>
