function fetchFigmaData() {
  fetch("../../api/handover-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("handover-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("handover-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/placeholder-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("placeholder-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("placeholder-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/roundall-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("roundall-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("roundall-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/default-export-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("default-export-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("default-export-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/perfect-radius-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("perfect-radius-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("perfect-radius-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/shape-to-frame-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("shape-to-frame-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("shape-to-frame-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/batch-image-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("batch-image-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("batch-image-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/scale-better-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("scale-better-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("scale-better-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/get-instances-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("get-instances-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("get-instances-like-count")
        .prepend(kFormatter(data.like_count));
    });
  fetch("../../api/replace-all-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("replace-all-install-count")
        .prepend(kFormatter(data.install_count));
      document
        .getElementById("replace-all-like-count")
        .prepend(kFormatter(data.like_count));
    });
}

function kFormatter(num) {
  if (num > 999 && num < 1100) {
    return (num / 1000).toFixed(0) + "k";
  } else if (num > 999) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num;
  }
}

export default fetchFigmaData();
