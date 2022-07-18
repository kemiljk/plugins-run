<template>
  <span
    class="flex w-max h-8 items-center justify-center font-mono rounded-full px-3 py-1 text-xs uppercase"
    :class="colorClasses"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClasses() {
      return {
        purple:
          "bg-purple-900 dark:bg-purple-300 border border-purple-300 dark:border-purple-900 text-white dark:text-blue-900",
        blue:
          "bg-blue-900 dark:bg-blue-300 border border-blue-300 dark:border-blue-900 text-white dark:text-blue-900",
      }[this.color];
    },
  },
};
</script>
