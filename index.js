window.addEvenListener("scroll", function(){
    var menu document.querySelector(".ust__kutu");
    menu.classList.toggle("sticky", window.scrollY > 0);
})
