<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          v-bind="attrs"
          v-on="on"
          small
          @click="$emit('triggerDialog')"
        >
          <v-icon color="white"> mdi-information-outline </v-icon>
        </v-btn>
      </template>

      <v-card>
        <div v-if="isLoading">
          <p class="pa-2">
            To the moon and back
            <v-icon color="black"> mdi-rocket-launch-outline </v-icon>
          </p>
          <v-progress-linear
            indeterminate
            color="black"
            class="mb-0"
          ></v-progress-linear>
        </div>

        <div v-else>
          <v-card-title class="text-h5 grey lighten-2">
            {{ data.name }} <span class="pl-2"> {{ data.version }} </span>
          </v-card-title>

          <v-card-text class="pt-2">
            <p class="text-subtitle-1">{{ data.description }}</p>
            <div class="mt-3 mb-3" v-if="data.author">
              <v-divider></v-divider>
              <h3 class="mt-3">Author:</h3>
              <ul>
                <li v-for="(value, key) in data.author" :key="key">
                  {{ key }}: <span class="font-weight-medium">{{ value }}</span>
                </li>
              </ul>
              <dl class="mt-2">
                <div class="d-flex" v-if="data.homePage">
                  <dt class="text-body-1 font-weight-bold pr-2">Homepage:</dt>
                  <dd>
                    <a :href="data.homePage">{{ data.homePage }}</a>
                  </dd>
                </div>
                <div class="d-flex" v-if="data.npm">
                  <dt class="text-body-1 font-weight-bold pr-2">NPM:</dt>
                  <dd>
                    <a :href="data.npm">{{ data.npm }}</a>
                  </dd>
                </div>
                <div class="d-flex" v-if="data.repository">
                  <dt class="text-body-1 font-weight-bold pr-2">Repository:</dt>
                  <dd>
                    <a :href="data.repository">{{ data.repository }}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <div class="d-flex mt-5">
              <v-chip class="mr-2 mt-2" color="green" text-color="white">
                <v-icon> mdi-star-outline </v-icon>
                {{ data.rank }}
              </v-chip>
              <v-chip class="mr-2 mt-2" color="primary">
                <v-icon>mdi-download-outline</v-icon>
                {{ data.total }}
              </v-chip>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" small @click="dialog = false">
              <v-icon color="white"> mdi-close-thick </v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
