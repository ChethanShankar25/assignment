window.onload=function(){
    const sideBar=document.querySelector(".recent-activity");
    const showSidebar=document.querySelector("#icon-show-sidebar");
    const hideSidbar=document.querySelector("#icon-hide-sidebar");
    const profilePic=document.querySelector(".profile-pic-container");
    const logoutPopoup=document.querySelector(".logout-dropdown");
    const table=document.querySelector(".content-table");
    const tableCells=table.getElementsByTagName("td");
    const tooltip=document.createElement("p");
    const addServiceBtn=document.querySelector("#add-service-button");
    const welcomeScrnContainer=document.querySelector(".welcome-screen-container");
    const closeScreen=document.querySelector("#close-welcome-screen");
    const searchBtn= document.querySelector("#search-btn");
    const slidingInput=document.querySelector(".sliding-input");
    const welcomeInnerCont=document.querySelector(".welcome-inner-container");
    const navlinks=Array.from(document.querySelectorAll(".nav-link>a"));
    for(let x in tableCells)
    {
        tableCells[x].onmouseover=function(e){
            console.log(e.target.style.width);
           var cellText=this.innerText;
           tooltip.innerText=cellText;
           tooltip.classList.add("tooltip-show");
           tooltip.style.top=e.clientY+"px";
           tooltip.style.left=e.clientX+"px";
           this.appendChild(tooltip);
        }
        tableCells[x].onmouseout=function(){
             this.removeChild(tooltip);
        }
    }

    showSidebar.onclick=function(){
        sideBar.classList.add("slide-left");
    }
    hideSidbar.onclick=function(){
        sideBar.classList.remove("slide-left");
    }
    
    profilePic.onmouseover=function(){
        logoutPopoup.classList.add("popup");
    }
    profilePic.onmouseout=function(){
        logoutPopoup.classList.remove("popup");
    }
    addServiceBtn.onclick=()=>{
        welcomeScrnContainer.classList.add("make-opaque");
    }
    welcomeInnerCont.onclick=()=>{
        welcomeScrnContainer.classList.remove("make-opaque");
    }
    closeScreen.onclick=()=>{
        welcomeScrnContainer.classList.remove("make-opaque");
    }

    searchBtn.onclick=()=>{
        slidingInput.classList.toggle("slide-input-left");
    }

    for(let x in navlinks)
    {
        navlinks[x].onclick=()=>{
            for(let y in navlinks)
            {
               if( navlinks[y].classList.contains("underline"))
               {
                   navlinks[y].classList.remove("underline");
               }
            }
           event.target.classList.add("underline");
        }
    }
}
