let cartitem=document.querySelector(".cart-item-container");
document.querySelector("#cart-btn").onclick=()=>{
    cartitem.classList.toggle("active");
}


let navbar=document.querySelector(".nav");
document.querySelector("#menu-btn").onclick=()=>{
    navbar.classList.toggle('active');
}




let searchForm=document.querySelector('.search-form');
document.querySelector("#search-btn").onclick=()=>{
    searchForm.classList.toggle('active');
}