<template>
  <div class="pb-16 h-full w-full">
    <div>
      <Nuxt />
    </div>
    <div class="w-full flex justify-center items-center pt-16">
      <p
        class="w-1/3 text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-black dark:text-white"
      >
        This site, and all of my work, is dedicated to my hero, my inspiration,
        and the strongest man I've ever known. My father. I love you Dad ❤️.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "bg-gray-50 dark:bg-gray-1000",
      },
    };
  },
};
</script>
