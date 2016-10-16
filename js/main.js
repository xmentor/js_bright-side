{
    "use strict";
    /*const lines = document.querySelectorAll(".line");
    [...lines].forEach((line, i) => {
        line.dataset.line = i+1;
    });*/

    document.querySelector(".nav__toggle").addEventListener("click", function () {
        const menu = document.querySelector(".nav__menu");
        if (!menu.classList.contains("nav__menu_open")) {
            menu.classList.add("nav__menu_open");
            this.classList.add("nav__toggle_open");
            this.setAttribute("aria-expanded", true);
        } else {
            menu.classList.remove("nav__menu_open");
            this.classList.remove("nav__toggle_open");
            this.setAttribute("aria-expanded", false);
        }
    });
    
    document.querySelector(".code__result_1").addEventListener("mousemove", function (e) {
        const el = document.querySelector(".test1"),
              x = e.pageX - this.offsetLeft,
              y = e.pageY - this.offsetTop;
        el.style.left = x + "px";
        el.style.top = y + "px";
    });
    
    document.querySelector(".block__btn_two").addEventListener("click", function () {
        const newEl = document.createElement("div"),
              parent = document.querySelector(".code__result_2");
        
        newEl.innerHTML = "Dodano nowy element";
        parent.appendChild(newEl);
    });
    
    document.querySelector(".block__btn_three").addEventListener("click", function () {
        const parent = document.querySelector(".test2"),
              child = document.querySelector(".test2__child");
        if (child !== null){
            parent.removeChild(child);
        }
    });
    
    document.querySelector(".block__btn_four").addEventListener("click", function () {
        const el = document.querySelector(".test3");
        if (!el.classList.contains("rectangle") && !el.classList.contains("circle")) {
            el.classList.add("rectangle");
            el.innerHTML = "Ale jak to..."
        } else {
            el.classList.remove("rectangle");
            el.classList.add("circle");
        }
    });
    
    document.querySelector(".block__btn_five").addEventListener("click", function () {
        const el = document.querySelector(".test4");
        el.style.opacity = +(el.style.opacity || window.getComputedStyle(el)["opacity"]);
        (function task () {
            el.style.opacity = +el.style.opacity - 0.01;
            if (+el.style.opacity > 0) {
              (window.requestAnimationFrame && requestAnimationFrame(task)) || setTimeout(task, 16);
            }
        }()); 
    });
    
}