<template>
  <div>
    <nav class="flex mx-auto md:mx-8 py-4 justify-between items-center">
      <Logo />
      <div class="flex max-w-3xl justify-center items-center">
        <h1 class="text-5xl font-black text-gray-800">
          plugins<span class="text-gray-400">.</span>run
        </h1>
      </div>
      <Spacer />
    </nav>
    <div class="flex flex-row">
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="made in mades" :key="made.title">
          <keep-alive>
            <MadeCard :made="made" />
          </keep-alive>
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
      // slug: "",
      mades: {},
    };
  },
  created() {
    // this.slug = this.$route.params.slug;
    this.getMadesData();
    fetch("../api/handover-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("handover-install-count")
          .prepend(data.install_count);
        document.getElementById("handover-like-count").prepend(data.like_count);
      });
    fetch("../api/placeholder-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("placeholder-install-count")
          .prepend(data.install_count);
        document
          .getElementById("placeholder-like-count")
          .prepend(data.like_count);
      });
    fetch("../api/roundall-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("roundall-install-count")
          .prepend(data.install_count);
        document.getElementById("roundall-like-count").prepend(data.like_count);
      });
    fetch("../api/default-export-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("default-export-install-count")
          .prepend(data.install_count);
        document
          .getElementById("default-export-like-count")
          .prepend(data.like_count);
      });
    fetch("../api/perfect-radius-plugin-stats.js")
      .then((response) => response.json())
      .then((data) => {
        document
          .getElementById("perfect-radius-install-count")
          .prepend(data.install_count);
        document
          .getElementById("perfect-radius-like-count")
          .prepend(data.like_count);
      });
    fetch("../api/shape-to-frame-plugin-stats.js")
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
          type: "mades",
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
