/* eslint-disable */

const https = require("https");  
  const PLUGINS = [{
    batchStyler: {
      id: "1005464966294664447"
      name: "batch-styler"
    },
    batchImage: {
      id: "961254533460516019",
      name: "batch-image"
    },
    betterLogos: {
      id: "984840399144699277",
      name: "better-logos"
    },
    defaultExport: {
      id: "939597261011175499",
      name: "default-export"
    },
    getInstances: {
      id: "963807322482539548",
      name: "get-instances"
    },
    getInstances: {
      id: "963807322482539548",
      name: "get-instances"
    },
    handover: {
      id: "837070613195594890",
      name: "handover"
    },
    perfectRadius: {
      id: "944991908887656950",
      name: "perfect-radius"
    },
    placeholder: {
      id: "936748515482279151",
      name: "placeholder"
    },
    replaceAll: {
      id: "965889760815013524",
      name: "replace-all"
    },
    roundAll: {
      id: "939429933336921092",
      name: "round-all"
    },
    scaleBetter: {
      id: "962438678016435824",
      name: "scale-better"
    },
    shapeToFrame: {
      id: "952557548511056612",
      name: "shape-to-frame"
    },
    spaceCleaner: {
      id: "977968775104001765",
      name: "space-cleaner"
    }},
  ]

module.exports = (req, res) => {
    PLUGINS.forEach((plugin) => {
    const url = "https://www.figma.com/api/plugins/${plugin.id}/versions";
      https.get(url, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          const pluginInfo = JSON.parse(data).meta.plugin;
          pluginInfo.versions = null;

          res.json(pluginInfo);
        });
      });
    });
};

export default PLUGINS
