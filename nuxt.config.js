export default {
  ssr: true,

  target: "static",

  head: {
    title: "Plugins.run",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "HandheldFriendly", content: "True" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Plugins.run" },
      {
        hid: "description",
        name: "description",
        content: "Figma utility plugins",
      },
      {
        hid: "description",
        name: "description",
        content: "Figma utility plugins",
      },
      { property: "og:site_name", content: "Plugins.run" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.plugins.run",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Plugins.run",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Figma utility plugins",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/kejk/image/upload/v1618328371/OG_Image_ezoyz9.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },

      { name: "twitter:site", content: "@_kejk" },
      { name: "twitter:creator", content: "@_kejk" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://www.plugins.run",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Plugins.run",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Figma utility plugins",
      },
      {
        hid: "twitter:image:src",
        name: "twitter:image:src",
        content:
          "https://res.cloudinary.com/kejk/image/upload/v1618328371/Twitter_Image_eteqen.png",
      },
    ],
    link: [
      { rel: "icon", href: "/favicon.svg" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "mask-icon", href: "/mask-icon.svg", color: "#F1F5F9" },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "57x57",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "60x60",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "72x72",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "76x76",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "114x114",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "120x120",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "144x144",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "152x152",
        href: "/apple-icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "180x180",
        href: "/apple-icon.png",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-plausible"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
