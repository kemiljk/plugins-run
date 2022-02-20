// /* eslint-disable */

// const https = require("https");
// const PLUGINS = [
//     {
//       "id": "1005464966294664447",
//       "name": "batch-styler"
//     },
//     {
//       "id": "961254533460516019",
//       "name": "batch-image"
//     },
//     {
//       "id": "984840399144699277",
//       "name": "better-logos"
//     },
//     {
//       "id": "939597261011175499",
//       "name": "default-export"
//     },
//     {
//       "id": "963807322482539548",
//       "name": "get-instances"
//     },
//     {
//       "id": "837070613195594890",
//       "name": "handover"
//     },
//     {
//       "id": "944991908887656950",
//       "name": "perfect-radius"
//     },
//     {
//       "id": "936748515482279151",
//       "name": "placeholder"
//     },
//     {
//       "id": "965889760815013524",
//       "name": "replace-all"
//     },
//     {
//       "id": "939429933336921092",
//       "name": "round-all"
//     },
//     {
//       "id": "962438678016435824",
//       "name": "scale-better"
//     },
//     {
//       "id": "952557548511056612",
//       "name": "shape-to-frame"
//     },
//     {
//       "id": "977968775104001765",
//       "name": "space-cleaner"
//     }
//   ]

// module.exports = (req, res) => {
//     let arr = []
//     PLUGINS.forEach((plugin) => {
//     const url = "https://www.figma.com/api/plugins/" + plugin.id + "/versions";
//       https.get(url, (resp) => {
//         let data = "";
//         resp.on("data", (chunk) => {
//           data += chunk;
//         });

//         resp.on("end", () => {
//           const pluginInfo = JSON.parse(data).meta.plugin;
//           pluginInfo.versions = null;

//           res.json(pluginInfo);
//         });
//       });
//       arr.push(plugin.id)
//     });

//     console.log(arr)
// };
