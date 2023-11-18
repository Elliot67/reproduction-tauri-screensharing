import { appWindow as currentWindow } from "https://unpkg.com/@tauri-apps/api/window.js";
let isAlwaysOnTop = false;

async function toggleAlwaysOnTop() {
  currentWindow.setAlwaysOnTop(!isAlwaysOnTop);
  isAlwaysOnTop = !isAlwaysOnTop;
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  toggleAlwaysOnTop();
  btn.innerText = `Always on top : ${isAlwaysOnTop}`;
});
