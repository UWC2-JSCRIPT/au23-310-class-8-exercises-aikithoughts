let rgb = 255;
let darkenBackground = setInterval(() => {
    if (rgb > 0) {
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        rgb--;
        
    } else {
        clearInterval(darkenBackground);
        console.log("Done!");
    }
}, 100)