function fetchFigmaData() {
  fetch("../../api/handover-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("handover-install-count")
        .prepend(data.install_count);
      document.getElementById("handover-like-count").prepend(data.like_count);
    });
  fetch("../../api/placeholder-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("placeholder-install-count")
        .prepend(data.install_count);
      document
        .getElementById("placeholder-like-count")
        .prepend(data.like_count);
    });
  fetch("../../api/roundall-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("roundall-install-count")
        .prepend(data.install_count);
      document.getElementById("roundall-like-count").prepend(data.like_count);
    });
  fetch("../../api/default-export-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("default-export-install-count")
        .prepend(data.install_count);
      document
        .getElementById("default-export-like-count")
        .prepend(data.like_count);
    });
  fetch("../../api/perfect-radius-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("perfect-radius-install-count")
        .prepend(data.install_count);
      document
        .getElementById("perfect-radius-like-count")
        .prepend(data.like_count);
    });
  fetch("../../api/shape-to-frame-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("shape-to-frame-install-count")
        .prepend(data.install_count);
      document
        .getElementById("shape-to-frame-like-count")
        .prepend(data.like_count);
    });
  fetch("../../api/space-cleaner-plugin-stats.js")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("space-cleaner-install-count")
        .prepend(data.install_count);
      document
        .getElementById("space-cleaner-like-count")
        .prepend(data.like_count);
    });
}

export default fetchFigmaData();
