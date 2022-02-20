const type = "website";
const url = "https://plugins.run";
const title = "Plugins.run";
const description =
  "A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free.";
const mainImage =
  "https://imgix.cosmicjs.com/4a55ed60-925a-11ec-9a4e-05fc85d83574-meta.png";
const twitterSite = "@_kejk";
const twitterCard = "summary_large_image";
export default (meta) => {
  return [
    {
      hid: "description",
      name: "description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: (meta && meta.type) || type,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "twitter:image:src",
      name: "twitter:image:src",
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: (meta && meta.twitterSite) || twitterSite,
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: (meta && meta.twitterCard) || twitterCard,
    },
  ];
};
