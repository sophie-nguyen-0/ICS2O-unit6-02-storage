// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit6-02-storage/sw.js", {
    scope: "/ICS2O-unit6-02-storage/",
  })
}

/**
 * this function cookies
 */
function myCookieClicked() {
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks) + 1
  }
  else {
    localStorage.clicks = 0
  }
  document.getElementById("points").innerHTML = localStorage.clicks
}

function updateCookieCount() {
  document.getElementById("points").innerHTML = localStorage.clicks
}
