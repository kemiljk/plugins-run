<template>
  <div
    class="h-max w-full flex items-start hover:shadow-md border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition ease-in-out duration-200 rounded-3xl text-left"
  >
    <a
      :href="made.metadata.url"
      target="`_blank"
      rel="noreferrer"
      cursor="pointer"
    >
      <div class="w-full p-4">
        <header>
          <div class="flex space-x-4">
            <img
              :src="made.metadata.cover.imgix_url"
              class="rounded-md max-h-24 border border-gray-200 dark:border-gray-900"
              alt="Image of media"
            />
            <div class="w-full space-y-2">
               <div class="flex items-center space-x-2 mt-4">
                  <div
                    v-if="made.metadata.figma"
                    class="flex items-center justify-between"
                  >
                    <Tag color="blue">Figma</Tag>
                  </div>
                  <div
                    v-if="made.metadata.figjam"
                    class="flex items-center justify-between"
                  >
                    <Tag color="purple">FigJam</Tag>
                  </div>
               </div> 
                <h4
                  class="pb-4 text-md font-black tracking-wide text-gray-900 dark:text-gray-100"
                >
                  {{ made.title }}
                </h4>
            </div>
              <!-- <div class="flex space-x-8 mb-4" v-if="this.loading === true">
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600 dark:text-gray-400"
                      style="z-index: -1;"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        class="fill-current text-gray-600 dark:text-gray-400"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                  <div v-else class="flex space-x-8 mb-4">
                    <div
                      v-if="made.metadata.installcount"
                      class="flex items-center justify-between"
                    >
                      <span
                        :id="made.metadata.installcount"
                        class="flex items-center text-md text-green-700 dark:text-green-400"
                        ><download-icon
                          class="ml-2 text-green-700 dark:text-green-400"
                          size="20"
                        ></download-icon
                      ></span>
                    </div>
                    <div
                      v-if="made.metadata.likecount"
                      class="flex items-center justify-between"
                    >
                      <span
                        :id="made.metadata.likecount"
                        class="flex items-center text-md text-red-700 dark:text-red-400"
                        ><heart-icon
                          class="ml-2 text-red-700 dark:text-red-400"
                          size="20"
                        ></heart-icon
                      ></span>
                    </div> 
                  </div> -->
          </div>
        </header>
        <div class="h-0.5 w-full bg-gray-100 dark:bg-gray-800 mt-3" />
          <p class="pt-2 text-gray-500 dark:text-gray-200 text-sm font-mono">
            {{ made.metadata.subtitle }}
          </p>
        </div>
      </div>
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
