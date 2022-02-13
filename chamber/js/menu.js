
const menu = document.querySelector("#hamburger");
const nav = document.querySelector("#navigation");
const banner = document.querySelector(".current-date");
const today = new Date()
const day = today.getDate();
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const month = ["January","Febuary","March","April","May","June","July","August", "September","October","November","December"]

menu.addEventListener("click", () => {
    nav.classList.toggle("responsive");
})

const banner_text = banner.appendChild(Object.assign(document.createElement("h3"), {
    class: "banner-text",
    innerHTML: "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}))

if (day !== 1 | day !== 2) {
    banner_text.style.display = "none";

}
// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) {
        mainnav.classList.remove('responsive');
        exitbutton.classList.add("hidden");
        ham.classList.remove("hidden");
    }
};