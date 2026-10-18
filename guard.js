/* Guard for pages linked from the MOON index.
   If the visitor has not entered the password on index.html in this tab,
   they are sent back to index.html (which shows the existing password window). */
(function () {
  var HASH = "4eb5846da827413241cccdfd2c225543f16aaef1f9af51f6a245a9cdeb1ebfd1";
  var ok = false;
  try { ok = sessionStorage.getItem("moon-token") === HASH; } catch (e) {}
  if (ok) {
    var h = document.getElementById("guard-hide");
    if (h) h.remove();
  } else {
    location.replace("index.html");
  }
})();
