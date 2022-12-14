// Copyright (c) 2020 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-03-JS/sw.js", {
    scope: "/ICS20-Unit3-03-JS/",
  })
}

/**
 * calculates the volume of the pyramid
 */
// input
function calculateClicked() {
  const radius = parseFloat(document.getElementById("Radius").value)

  // process
  const volume = (4 / 3) * Math.PI * radius ** 3

  // output
  document.getElementById("Volume").innerHTML =
    "The volume of this Sphere is " + volume.toFixed(2) + " cm³."
}
