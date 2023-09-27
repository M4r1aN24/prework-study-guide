const images = document.querySelector("img");

images.onclick = () => {
  const mySrc = images.getAttribute("src");
  if (mySrc === "./assets/images/bowtie-cat.png") {
    images.setAttribute("src", "./assets/images/bowtie-cat.png");
  } else {
    images.setAttribute("src", "./assets/images/firefox2.png");
  }
};