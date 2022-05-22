//panel
function openNav() {
    document.getElementById("mySidepanel").style.width = "27%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}



var cur = 0;
//map
var map = L.map('map', {
    center: L.latLng(47.74145879286627, 26.65952773936658), //default Botosani
    zoom: 8

});

//locate zoom
map.zoomControl.setPosition('topright');


setTimeout(function () { map.invalidateSize() }, 100);
//handle waypoints


L.tileLayer('https://api.mapbox.com/styles/v1/lucasainenco/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'cl3evd2lo004414rz7mmgpd5g',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVjYXNhaW5lbmNvIiwiYSI6ImNsM2V2YXJ2czA0bDYzam4wMXYycDU0eG0ifQ.p7mkAeKWRHsi3q6pLdMhIQ'
}).addTo(map);
map.flyTo([47.74145879286627, 26.65952773936658], 8);


//create popups
var greenIcon = L.icon({
    iconUrl: 'src/img/vecc.png',
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -20] // point from which the popup should open relative to the iconAnchor
});


var Botosani = L.marker([47.74145879286627, 26.65952773936658], { icon: greenIcon }).addTo(map);
var Cernauti = L.marker([48.281723789609, 25.942375039229802], { icon: greenIcon }).addTo(map);
var Viena = L.marker([48.20256653850632, 16.375739391280092], { icon: greenIcon }).addTo(map);
var Budapesta = L.marker([47.47406540960728, 19.04659516095427], { icon: greenIcon }).addTo(map);
var Iasi = L.marker([47.1574936249298, 27.58796427224692], { icon: greenIcon }).addTo(map);
var Bucuresti = L.marker([44.428865136973656, 26.110832379918293], { icon: greenIcon }).addTo(map);

Botosani.on("click", () => {
    document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Orasul natal al poetului, Botosani<\h1> <img class="imagine" src="http://www.mybuni.com/poezii/foto/aron1.gif"></img>   <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
    map.flyTo([47.74145879286627, 26.65952773936658], 12);

});
Bucuresti.on("click", () => {
    document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Bucuresti<\h1> <img class="imagine" src="https://www.7est.ro/wp-content/uploads/2021/06/8EC1C740-6300-4540-A30C-0FAD1540250D.jpeg"></img>        <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
    map.flyTo([44.428865136973656, 26.110832379918293], 12);
});
Cernauti.on("click", () => {
    document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Cernauti<\h1>  <img class="imagine" src="https://luceafarul.net/wp-content/uploads/2020/01/Lacramioarele-673x1024.jpg"></img>     <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
    map.flyTo([48.281723789609, 25.942375039229802], 12);

});
Viena.on("click", () => {
    document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Viena<\h1> <img class="imagine" src="https://s3-eu-west-1.amazonaws.com/a10ro/Lot/12055/conversions/main-image-details.jpg"></img>     <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
    map.flyTo([48.20256653850632, 16.375739391280092], 12);
});
Budapesta.on("click", () => {
    document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Budapesta<\h1> <img class="imagine" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Revista_Familia_-_Logo_-_9_martie_1866.JPG"></img>      <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
    map.flyTo([47.47406540960728, 19.04659516095427], 12);
});
Iasi.on("click", () => {
    document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Iasi<\h1>   <img class="imagine" src="https://ripvip.files.wordpress.com/2012/05/curierul-roman-din-botoc59fani-anunc5a3c3a2nd-decesul-lui-eminescu.jpg"></img>      <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
    map.flyTo([47.1574936249298, 27.58796427224692], 12);
})
//map handle
map.on("click", () => {
    closeNav();
});

//pop-up handle


Botosani.bindPopup(
    '<img class="sus" src="https://upload.wikimedia.org/wikipedia/ro/3/3e/Casa_memorial%C4%83_Mihai_Eminescu_din_Ipote%C8%99ti.jpg">  <\img><br><h1>Ipotesti<\h1>  '
);
Bucuresti.bindPopup(
    '<img class="sus" src="https://www.formula-as.ro/wp-content/uploads/2019/09/1802-12-m-1000x630.jpg">  <\img><br><h1>Casa lui Titu Maiorescu<\h1>   '
);
Cernauti.bindPopup(
    '<img class="sus" src="https://www.europafm.ro/wp-content/uploads/2018/02/cernauti-februarie-2018-18.jpg">  <\img><br><h1>Hotelul Pajura Neagra<\h1>'
);
Viena.bindPopup(
    '<img class="sus" src="https://adevarul.ro/assets/adevarul.ro/MRImage/2015/08/29/55e198f5f5eaafab2c0969a2/627x0.jpg">  <\img><br><h1>Porzellangasse nr.9<\h1>  '
);
Budapesta.bindPopup(
    '<img class="sus" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Revista_Familia_-_Logo_-_9_martie_1866.JPG">  <\img><br><h1>A publicat in revista “Familia”<\h1>   '
);
Iasi.bindPopup(
    '<img class="sus" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/d9/22/casa-v-pogor.jpg?w=1200&h=-1&s=1">  <\img><br><h1>Casa Vasile Pogor<\h1> '
);
//handle button 
function next() {
    cur += 1;
    switch (cur) {
        case 0:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Orasul natal al poetului, Botosani<\h1> <img class="imagine" src="http://www.mybuni.com/poezii/foto/aron1.gif"></img>   <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([47.74145879286627, 26.65952773936658], 12);
            break;
        case 1:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Bucuresti<\h1>  <img class="imagine" src="https://www.7est.ro/wp-content/uploads/2021/06/8EC1C740-6300-4540-A30C-0FAD1540250D.jpeg"></img>      <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([44.428865136973656, 26.110832379918293], 12);
            break;
        case 2:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Iasi<\h1>  <img class="imagine" src="https://ripvip.files.wordpress.com/2012/05/curierul-roman-din-botoc59fani-anunc5a3c3a2nd-decesul-lui-eminescu.jpg"></img>       <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([47.1574936249298, 27.58796427224692], 12);
            break;
        case 3:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Cernauti<\h1>  <img class="imagine" src="https://luceafarul.net/wp-content/uploads/2020/01/Lacramioarele-673x1024.jpg"></img>     <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([48.281723789609, 25.942375039229802], 12);
            break;
        case 5:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Viena<\h1> <img class="imagine" src="https://s3-eu-west-1.amazonaws.com/a10ro/Lot/12055/conversions/main-image-details.jpg"></img>     <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([48.20256653850632, 16.375739391280092], 12);
            break;
        case 4:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Budapesta<\h1> <img class="imagine" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Revista_Familia_-_Logo_-_9_martie_1866.JPG"></img>      <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([47.47406540960728, 19.04659516095427], 12);
            break;
        default:
            cur = 0;
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Orasul natal al poetului, Botosani<\h1> <img class="imagine" src="http://www.mybuni.com/poezii/foto/aron1.gif"></img>   <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([47.74145879286627, 26.65952773936658], 12);
            break;

    }

}
function prev() {
    cur -= 1;
    switch (cur) {
        case 0:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Orasul natal al poetului, Botosani<\h1> <img class="imagine" src="http://www.mybuni.com/poezii/foto/aron1.gif"></img>   <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([47.74145879286627, 26.65952773936658], 12);
            break;

        case 1:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Bucuresti<\h1>  <img class="imagine" src="https://www.7est.ro/wp-content/uploads/2021/06/8EC1C740-6300-4540-A30C-0FAD1540250D.jpeg"></img>      <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([44.428865136973656, 26.110832379918293], 12);
            break;

        case 2:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Iasi<\h1> <img class="imagine" src="https://ripvip.files.wordpress.com/2012/05/curierul-roman-din-botoc59fani-anunc5a3c3a2nd-decesul-lui-eminescu.jpg"></img>        <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([47.1574936249298, 27.58796427224692], 12);
            break;

        case 3:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Cernauti<\h1> <img class="imagine" src="https://luceafarul.net/wp-content/uploads/2020/01/Lacramioarele-673x1024.jpg"></img>      <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([48.281723789609, 25.942375039229802], 12);
            break;
        case 5:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Viena<\h1>  <img class="imagine" src="https://s3-eu-west-1.amazonaws.com/a10ro/Lot/12055/conversions/main-image-details.jpg"></img>    <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([48.20256653850632, 16.375739391280092], 12);
            break;
        case 4:
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Budapesta<\h1> <img class="imagine" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Revista_Familia_-_Logo_-_9_martie_1866.JPG"></img>      <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([47.47406540960728, 19.04659516095427], 12);
            break;
        default:
            cur = 5;
            document.getElementById("mySidepanel").innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><h1 class="ni">Viena<\h1> <img class="imagine" src="https://s3-eu-west-1.amazonaws.com/a10ro/Lot/12055/conversions/main-image-details.jpg"></img>     <div class="igg"><button class="but" onclick="next()">Urmatoarea Locatie</button><button class="but2" onclick="prev()">Locatia Precedenta</button></div>';
            map.flyTo([48.20256653850632, 16.375739391280092], 12);
            break;

    }

}




//function onMapClick(e) {
 //   alert("You clicked the map at " + e.latlng);
//}

//map.on('click', onMapClick);