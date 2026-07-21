const menuItems = document.querySelectorAll(".menu");
const pages = document.querySelectorAll(".page");

pages.forEach((page,index)=>{
    if(index !== 0){
        page.style.display = "none";
    }
});

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(menu=>{
            menu.classList.remove("active");
        });

        item.classList.add("active");

        const pageId = item.getAttribute("data-page");

        pages.forEach(page=>{
            page.style.display = "none";
        });

        document.getElementById(pageId).style.display = "block";

    });

});

document.getElementById("logout").addEventListener("click",()=>{

    if(confirm("Logout from Dashboard?")){
        window.location.href="login.html";
    }

});
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const toggleIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active");

    if(sidebar.classList.contains("active")){
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-xmark");
    }else{
        toggleIcon.classList.remove("fa-xmark");
        toggleIcon.classList.add("fa-bars");
    }

});
s
/* Close menu when clicking menu item */

document.querySelectorAll(".menu").forEach(item => {

    item.addEventListener("click", () => {

        if(window.innerWidth <= 768){
            sidebar.classList.remove("active");
            toggleIcon.classList.remove("fa-xmark");
            toggleIcon.classList.add("fa-bars");
        }

    });

});