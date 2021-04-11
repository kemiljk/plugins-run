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
          efficiencies. <strong>All for free.</strong>
        </template>
      </Subheader>
      <div class="flex flex-row">
        <div class="grid w-full sm:grid-cols-2 gap-4">
          <div v-for="made in mades" :key="made.title">
            <keep-alive>
              <MadeCard :made="made" />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchFigmaData from "../scripts/fetch";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "kemiljk",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK",
});

export default {
  data() {
    return {
      loading: false,
      mades: {},
    };
  },
  beforeCreate() {
    this.fetchFigmaData();
  },
  created() {
    this.getMadesData();
  },
  methods: {
    async fetchFigmaData() {
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
