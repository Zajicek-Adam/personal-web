let navlinks = document.getElementsByClassName("nav");
let arraylinks = Array.from(navlinks);
arraylinks.forEach(element => {
    element.addEventListener('mouseover', e =>{
        setTimeout(f => {
            element.classList.add("torigin-right");
        }, 300)
    })
    element.addEventListener('mouseleave', e =>{
        setTimeout(f => {
            element.classList.remove("torigin-right");
        }, 300)
    })
});