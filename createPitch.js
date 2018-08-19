function createPitch() {
  var x, y, html, element;

  for (y = 0; y < 15; y++) {
    for (x = 0; x < 26; x++) {
      html =
        "<div id='ps" +
        x +
        "-" +
        y +
        "' class='pitch noselect'>" +
        x +
        "-" +
        y +
        "</div>";

      if (x === 0)
        html =
          "<div id='ps" +
          x +
          "-" +
          y +
          "' class='pitch homeEnd noselect'>" +
          x +
          "-" +
          y +
          "</div>";

      if (x == 25)
        html =
          "<div id='ps" +
          x +
          "-" +
          y +
          "' class='pitch awayEnd noselect'>" +
          x +
          "-" +
          y +
          "</div>";

      document.getElementById("ThePitch").insertAdjacentHTML("beforeend", html);
    }
  }

  for (x = 0; x < 26; x++) {
    element = document.getElementById("ps" + x + "-0");
    element.classList.add("topEdge");
  }

  for (x = 0; x < 26; x++) {
     element = document.getElementById("ps" + x + "-14");
    element.classList.add("bottomEdge");
  }

  for (x = 0; x < 26; x++) {
     element = document.getElementById("ps" + x + "-3");
    element.classList.add("wideZoneTop");
  }

  for (x = 0; x < 26; x++) {
     element = document.getElementById("ps" + x + "-11");
    element.classList.add("wideZoneBottom");
  }

  for (y = 0; y < 15; y++) {
     element = document.getElementById("ps" + 12 + "-" + y);
    element.classList.add("scrimmage_home");
  }

  for (y = 0; y < 15; y++) {
     element = document.getElementById("ps" + 13 + "-" + y);
    element.classList.add("scrimmage_away");
  }

  for (y = 0; y < 15; y++) {
     element = document.getElementById("ps" + 0 + "-" + y);
    element.classList.add("clearFloats");
  }
}
