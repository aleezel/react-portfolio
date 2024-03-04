const track = document.getElementById("image-track");

window.onmousedown = mouseKey => {
    track.dataset.mouseDownAt = mouseKey.clientX;
}