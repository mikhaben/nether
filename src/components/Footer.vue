<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="black d-flex flex-column align-start">
        <strong class="subheading white--text pl-2">Author: @mik_ben</strong>

        <div>
          <v-btn
            fab
            small
            black
            rel="noopener noreferrer"
            target="_blank"
            class="ma-2"
            v-for="(link, icon) in links"
            :key="link"
            :href="link"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: {
        "mdi-linkedin": "https://www.linkedin.com/in/mikhailo-benesko/",
        "mdi-github": "https://github.com/mikhaben",
        "mdi-send": "https://t.me/mik_ben",
      },
    };
  },
};
</script>
