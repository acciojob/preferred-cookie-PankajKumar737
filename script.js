//your JS code here. If required.
let fontSize = document.getElementById("fontsize");
fontSize.addEventListener("change", () => {
  fontSize.style.fontSize = fontSize.value;
});
let fontColor = document.getElementById("fontcolor");
fontColor.addEventListener("input", () => {
  fontColor.style.color = fontColor.value;
});

document.cookie = "fontSize.value; expires=Thu, 01 Jan 9999 00:00:00 UTC; path=/;";
document.cookie= "fontColor.value; expires=Thu, 01 Jan 9999 00:00:00 UTC; path=/;";