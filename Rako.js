
const menuBtn = document.getElementById('menuBtn');
const sidenav = document.getElementById('sidenav');
sidenav.style.right = "-250px";

menuBtn.onclick = function () {
    sidenav.style.right = sidenav.style.right === "-250px" ? "0" : "-250px";
};
