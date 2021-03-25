<template>
  <div>
    <a
      :href="made.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <button
        class="sm:h-48 w-full flex items-start ring-2 ring-gray-100 dark:ring-gray-800 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition ease-in-out duration-200 rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-white"
      >
        <div class="w-full px-4 py-4">
          <header class="mb-4">
            <div class="flex space-x-4">
              <img
                :src="made.metadata.cover.imgix_url"
                class="rounded-md max-h-24"
                alt="Image of media"
              />
              <div class="w-full flex justify-between">
                <div class="w-5/6 sm:w-full">
                  <h4
                    class="pb-4 text-md font-black tracking-wide text-gray-900 dark:text-gray-100"
                  >
                    {{ made.title }}
                  </h4>
                  <div class="flex space-x-2 mb-4">
                    <Tag color="pink" v-if="made.metadata.figma">Figma </Tag>
                    <Tag color="green" v-if="made.metadata.installcount"
                      ><span
                        :id="made.metadata.installcount"
                        class="flex items-center"
                        >&nbsp;<download-icon
                          class="text-green-700 dark:text-green-400"
                          size="12"
                        ></download-icon
                      ></span>
                    </Tag>
                    <Tag color="indigo" v-if="made.metadata.likecount"
                      ><span
                        :id="made.metadata.likecount"
                        class="flex items-center"
                        >&nbsp;<heart-icon
                          class="text-indigo-700 dark:text-indigo-400"
                          size="12"
                        ></heart-icon
                      ></span>
                    </Tag>
                  </div>
                </div>
                <compass-icon
                  v-if="made.metadata.website"
                  class="text-gray-700 dark:text-gray-300"
                ></compass-icon>
                <download-icon
                  v-if="made.metadata.download"
                  class="text-gray-700 dark:text-gray-300"
                ></download-icon>
              </div>
            </div>
          </header>
          <div class="h-0.5 w-full bg-gray-100 dark:bg-gray-900" />
          <p class="pt-2 text-gray-500 dark:text-gray-200 text-sm font-mono">
            {{ made.metadata.subtitle }}
          </p>
        </div>
      </button>
    </a>
  </div>
</template>

<script>
import { CompassIcon, DownloadIcon, HeartIcon } from "vue-feather-icons";

export default {
  name: "Made",
  components: {
    CompassIcon,
    DownloadIcon,
    HeartIcon,
  },
  props: {
    made: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
