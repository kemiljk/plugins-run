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
        yellow:
          "text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-900",
        purple:
          "text-purple-700 dark:text-purple-400 border border-purple-300 dark:border-purple-900",
        red:
          "text-red-700 dark:text-red-400 border border-red-300 dark:border-red-900",
        pink:
          "text-pink-700 dark:text-pink-400 border border-pink-300 dark:border-pink-900",
        green:
          "text-green-700 dark:text-green-400 border border-green-300 dark:border-green-900",
        indigo:
          "text-indigo-700 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-900",
        blue:
          "text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-900",
      }[this.color];
    },
  },
};
</script>
