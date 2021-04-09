/* eslint-disable */

const https = require("https");

module.exports = (req, res) => {
  const url = "https://www.figma.com/api/plugins/961254533460516019/versions";
  https.get(url, (resp) => {
    let data = kFormatter("");
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

function kFormatter(num) {
  if (num > 999) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num;
  }
}
