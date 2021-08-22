<template>
  <div>
    <nav>
      <div class="w-full fixed z-50 bg-gray-50 dark:bg-gray-1000">
        <div class="flex mx-auto md:mx-8 py-4 justify-between items-center">
          <Logo />
          <Spacer class="sm:hidden" />
          <div class="flex sm:max-w-3xl justify-center items-center sm:mx-auto">
            <h1 class="text-5xl font-black text-gray-800 dark:text-gray-200">
              plugins<span class="text-gray-400 dark:text-gray-600">.</span>run
            </h1>
          </div>
          <Spacer class="sm:pr-10" />
        </div>
      </div>
    </nav>
    <div class="max-w-5xl mx-auto px-4">
      <Header>The home for Figma utility plugins</Header>
      <Subheader>
        <template #text>
          A series of simple utility plugins that allow you as a designer or
          developer to easily manage your day-to-day workflow and improve your
          efficiencies. <strong class="font-bold">All for free.</strong>
        </template>
      </Subheader>
      <div class="flex flex-row">
        <div class="grid w-full sm:grid-cols-2 gap-4">
          <div v-for="made in mades" :key="made.title">
              <MadeCard :made="made" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "../utils/getSiteMeta";
// import fetchFigmaData from "../scripts/fetch";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
});

export default {
  computed: {
    meta() {
      const metaData = {
        title: "Plugins.run | Home",
        description:
          "A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free.",
        url: "https://plugins.run/",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/v1618328371/OG_Image_ezoyz9.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "Plugins.run | Home",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://plugins.run/" }],
    };
  },
  data() {
    return {
      loading: false,
      mades: {},
    };
  },
  created() {
    this.getMadesData();
  },
  mounted() {
    this.fetchFigmaData();
  },
  methods: {
    async fetchFigmaData() {
    const PLUGINS = [
    {
      "id": "1005464966294664447",
      "name": "batch-styler"
    },
    {
      "id": "961254533460516019",
      "name": "batch-image"
    },
    {
      "id": "984840399144699277",
      "name": "better-logos"
    },
    {
      "id": "939597261011175499",
      "name": "default-export"
    },
    {
      "id": "963807322482539548",
      "name": "get-instances"
    },
    {
      "id": "837070613195594890",
      "name": "handover"
    },
    {
      "id": "944991908887656950",
      "name": "perfect-radius"
    },
    {
      "id": "936748515482279151",
      "name": "placeholder"
    },
    {
      "id": "965889760815013524",
      "name": "replace-all"
    },
    {
      "id": "939429933336921092",
      "name": "round-all"
    },
    {
      "id": "962438678016435824",
      "name": "scale-better"
    },
    {
      "id": "952557548511056612",
      "name": "shape-to-frame"
    },
    {
      "id": "977968775104001765",
      "name": "space-cleaner"
    }
  ]

function fetchFigmaData() {
  PLUGINS.forEach((plugin) => {
  fetch("../api/plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById(plugin.name + "-install-count")
        if (plugin.name + "-install-count" === made.metadata.installCount) {
      document  
        .prepend(kFormatter(data.install_count))
        };
      document
        .getElementById(plugin.name + "-like-count")
        if (plugin.name + "-like-count" === made.metadata.likeCount) {
      document 
        .prepend(kFormatter(data.like_count))
        };
    });
  });
      const data = fetchFigmaData;
      this.fetchFigmaData = data;
    },
    async getMadesData() {
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "mades",
          },
          props: "_id,title,metadata",
        })
        .then((data) => {
          const mades = data.objects;
          this.loading = false;
          this.mades = mades;
        });
    },
  },
};
</script>
