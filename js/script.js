const frame = document.querySelector(".frame");
document.addEventListener("click", e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === "a"){       
        e.preventDefault();                        
        frame.setAttribute("src", el.getAttribute("href"));        
    }
})