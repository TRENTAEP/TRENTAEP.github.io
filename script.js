const enter = document.getElementById("enter-screen");
const music = document.getElementById("music");

enter.addEventListener("click", () => {
    enter.style.opacity = "0";

    setTimeout(() => {
        enter.style.display = "none";
    }, 500);

    if (music) {
        music.play().catch(() => {});
    }
});
