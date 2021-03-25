<template>
  <div>
    <nav>
      <div class="w-full fixed z-50 bg-gray-1000">
        <div class="flex mx-auto md:mx-8 py-4 justify-between items-center">
          <Logo />
          <Spacer class="sm:hidden" />
          <div class="flex sm:max-w-3xl justify-center items-center sm:mx-auto">
            <h1 class="text-5xl font-black text-gray-800 dark:text-gray-200">
              plugins<span class="text-gray-400 dark:text-gray-600">.</span>run
            </h1>
          </div>
          <Spacer />
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
  created() {
    this.getMadesData();
    fetch("../../api/handover-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("handover-install-count")
          .prepend(data.install_count);
        document.getElementById("handover-like-count").prepend(data.like_count);
      });
    fetch("../../api/placeholder-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("placeholder-install-count")
          .prepend(data.install_count);
        document
          .getElementById("placeholder-like-count")
          .prepend(data.like_count);
      });
    fetch("../../api/roundall-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("roundall-install-count")
          .prepend(data.install_count);
        document.getElementById("roundall-like-count").prepend(data.like_count);
      });
    fetch("../../api/default-export-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("default-export-install-count")
          .prepend(data.install_count);
        document
          .getElementById("default-export-like-count")
          .prepend(data.like_count);
      });
    fetch("../../api/perfect-radius-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("perfect-radius-install-count")
          .prepend(data.install_count);
        document
          .getElementById("perfect-radius-like-count")
          .prepend(data.like_count);
      });
    fetch("../../api/shape-to-frame-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("shape-to-frame-install-count")
          .prepend(data.install_count);
        document
          .getElementById("shape-to-frame-like-count")
          .prepend(data.like_count);
      });
  },
  methods: {
    async getMadesData() {
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "mades",
          },
          props: "_id,title,metadata",
          limit: 6,
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
