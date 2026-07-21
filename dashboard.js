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