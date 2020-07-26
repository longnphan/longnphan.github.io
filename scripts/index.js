window.onload = function() {
  const vids = document.querySelectorAll("video");

  //target all vids with this iteration
  for (let i = 0; i < vids.length; i++) {
    vids[i].addEventListener("mouseover", function(e) {
      vids[i].play()
    })
    vids[i].addEventListener("mouseout", function(e) {
      vids[i].pause()
    })
  }
}
