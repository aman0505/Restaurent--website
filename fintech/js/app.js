const menuitems = document.getElementById("menuitems");
menuitems.onclick = (e) => {
    e.stopPropagation()
}

const fabars = document.getElementById("fa-bars");
const outerdivmenu = document.getElementById("outerdivmenu")

fabars.onclick = (e) => {
    e.stopPropagation()

    fabars.style.display = 'none';
    outerdivmenu.classList.add("outerdivmenuMobileResponsive")
}
outerdivmenu.onclick = (e) => {
    console.log("hyy")
    outerdivmenu.classList.remove("outerdivmenuMobileResponsive")

    fabars.style.display = 'block';
    e.stopPropagation();

}

