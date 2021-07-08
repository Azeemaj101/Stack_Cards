let BD = document.querySelector("body");
BD.addEventListener("mouseover", function(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},146 )`;
})

let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));

// stack.addEventListener("click", swap);
setInterval(swap, 1000);

function swap() {
    let card = document.querySelector(".card:last-child");
    // if (e.target !== card) return;
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
    }, 700);
}