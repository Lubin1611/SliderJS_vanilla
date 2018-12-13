var tabPhotos = ["imgs/img-a.png", "imgs/img-b.png", "imgs/img-c.png", "imgs/img-d.png", "imgs/img-e.png", "imgs/img-f.png", "imgs/img-g.png", "imgs/img-h.png", "imgs/img-i.png"];
var index = 3;
var timeD;
var timeG;

document.getElementById("slider").style.backgroundImage = "url(" + tabPhotos[1] + ")";
document.getElementById("slider").style.backgroundSize = "cover";


function gauche() {

    if(index < 1) {
        index = tabPhotos.length;
    }

    index--;
    document.getElementById("slider").style.backgroundImage = "url(" + tabPhotos[index] + ")";
    console.log(tabPhotos[index]);

}


function droite() {



    if(index >= tabPhotos.length - 1) {

        index = -1;
    }

    index++;
    document.getElementById("slider").style.backgroundImage = "url(" + tabPhotos[index] + ")";

    console.log(tabPhotos[index]);


}


function defilementAutoG() {
    clearTimeout(timeD);
    document.getElementById("slider").classList.add('trucdeouf');
    gauche();
    timeG = setTimeout(defilementAutoG, 4500)
}

function defilementAutoD() {
    clearTimeout(timeG);
    document.getElementById("slider").classList.add('trucdeouf');
    droite();
    timeD = setTimeout(defilementAutoD, 4500)
}

document.getElementById("slider").addEventListener("click", function () {
    document.getElementById("slider").classList.remove('trucdeouf');
    clearTimeout(timeD);
    clearTimeout(timeG);

});