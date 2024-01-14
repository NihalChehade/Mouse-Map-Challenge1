document.addEventListener("mousemove", function (event) {
    const px = event.pageX;
    const py = event.pageY;

    const maxPX = window.innerWidth;
    const maxPY = window.innerHeight;
    const ratioX = px / maxPX;
    const ratioY = py / maxPY;

    // const p=document.querySelector('p');
    // p.innerText=`pageX is "${px}", while pageY is "${py}"`;
    // rgb(0,0,0) to rgb(255,0,255)
   document.body.style.backgroundColor = getNewColor(ratioX, ratioY);
// document.body.style.backgroundColor = "red";
// p.textContent=getNewColor(ratioX, ratioY);
});

function getNewColor(x, y) {

    const r = Math.round(x*255);
    const b = Math.round(y*255);

    return `rgb("${r}",0,"${b}")`;
}