/* eslint-disable */

const https = require("https");

module.exports = (req, res) => {
  const url = "https://www.figma.com/api/plugins/962438678016435824/versions";
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
};
