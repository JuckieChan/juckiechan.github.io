/* eslint-disable */

function createBackgroundClouds () {
    const clouds = document.createElement("div");
    clouds.className = "clouds"
    clouds.innerHTML = `
    <div class="far-clouds"></div>
    <div class="near-clouds"></div>
    `
    document.body.prepend(clouds)
}

createBackgroundClouds();