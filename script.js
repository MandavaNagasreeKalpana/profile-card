function toggleInfo() {
  const extra = document.getElementById("extraInfo");
  const btn = document.querySelector("button");

  if (extra.style.display === "none" || extra.style.display === "") {
    extra.style.display = "block";
    btn.textContent = "Show Less";
  } else {
    extra.style.display = "none";
    btn.textContent = "Show More";
  }
}
