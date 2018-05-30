//Infinity Lab Pictures
var il1 = "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://player.vimeo.com/video/247087543' class='embed-responsive embed-responsive-item' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen> < /iframe> </div>";

var il2 = "<img class='img-fluid' src='images/infinityLab/Table.jpg'>";

var il3 = "<img class='img-fluid' src='images/infinityLab/Beaker_Outlets.jpg'>";

var il4 = "<img class='img-fluid' src='images/infinityLab/Grate_Particles.jpg'>";

//Emerging Media Lab Pictures

var em1 = "<img class='img-fluid' src='images/emLab/EM_Lab01.jpg'>";

var em2 = "<img class='img-fluid' src='images/emLab/EM_Lab02.jpg'>";

var em3 = "<img class='img-fluid' src='images/emLab/EM_Lab03.jpg'>";

var em4 = "<img class='img-fluid' src='images/emLab/EM_Lab04.jpg'>";

//The Name of This Game is Classified Pictures

var clas1 = " <div class='embed-responsive embed-responsive-16by9'> <iframe class = 'embed-responsive-video' src='https://www.youtube.com/embed/wyPHpSjWBcs' frameborder = '0' allow = 'autoplay'; encrypted - media ' allowfullscreen></iframe> < /div > ";

var clas2 = "<img class='img-fluid' src='images/tnotgic/notebook.png' alt='3D modeled table with beakers'>";

var clas3 = "<img class='img-fluid' src='images/tnotgic/puzzle1.png'>";

var clas4 = " <img class='img-fluid' src='images/tnotgic/painting.png'>";

//The Time Between Us Pictures

var ttbu1 = "<div class='embed-responsive embed-responsive-16by9'><iframe width='560' height='315' src='https://www.youtube.com/embed/4udyK4UjHOM' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>";

var ttbu2 = "<img class='img-fluid' src='images/ttbu/Ora.png'>";

var ttbu3 = "<img class='img-fluid' src='images/ttbu/workbench.png'>";

var ttbu4 = "<img class='img-fluid' src='images/ttbu/workbench_end.png'>";

//Toon Shading Pictures

var toon1 = "<div class='embed-responsive embed-responsive-16by9'><iframe width='560' height='315' src='https://www.youtube.com/embed/zZavYmp3A9Q' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>";

var toon2 = "<img class='img-fluid' src='images/toonRoom/Desk.jpg'>";

var toon3 = "<img class='img-fluid' src='images/toonRoom/Shelf_Zoom.jpg'>";

var toon4 = "<img class='img-fluid' src='images/toonRoom/Door.jpg'>";

var toon5 = "<img class='img-fluid' src='images/toonRoom/Shelf_Wide.jpg'>";

var toon6 = "<img class='img-fluid' src='images/toonRoom/Bed.jpg'>";

var toon7 = "<img class='img-fluid' src='images/toonRoom/Chair.jpg'>";

//Hover Effect 
var elements = document.getElementsByClassName('img-active');


function imgSwitch(elementId, slideNum, slideID) {
    document.getElementById(elementId).innerHTML = slideNum;
    while (elements.length > 0) {
        elements[0].classList.remove('img-active');
    }
    document.getElementById(slideID).classList.toggle('img-active');
}
