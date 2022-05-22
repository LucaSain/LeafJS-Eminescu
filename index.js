//panel
function openNav() {
    document.getElementById("mySidepanel").style.width = "27%";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }




//map
var map = L.map('map',{
    center: L.latLng(47.74145879286627, 26.65952773936658), //default Botosani
    zoom: 8

});

//locate zoom
map.zoomControl.setPosition('topright')

//handle waypoints
map.flyTo([47.74145879286627, 26.65952773936658],8);
L.tileLayer('https://api.mapbox.com/styles/v1/lucasainenco/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'cl3evd2lo004414rz7mmgpd5g',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVjYXNhaW5lbmNvIiwiYSI6ImNsM2V2YXJ2czA0bDYzam4wMXYycDU0eG0ifQ.p7mkAeKWRHsi3q6pLdMhIQ'
}).addTo(map);
var Botosani = L.marker([47.74145879286627,26.65952773936658]).addTo(map);
var Cernauti = L.marker([48.281723789609,25.942375039229802]).addTo(map);
var Viena = L.marker([48.20256653850632,16.375739391280092]).addTo(map);
var BudaPesta = L.marker([47.47406540960728,19.04659516095427]).addTo(map);
var Iasi = L.marker([47.1574936249298,27.58796427224692]).addTo(map);


Botosani.on("click", ()=>{
    map.flyTo([47.74145879286627, 26.65952773936658],12);

});

Cernauti.on("click",()=>{
    map.flyTo([48.281723789609,25.942375039229802],12);

});

Viena.on("click",()=>
{
    document.getElementById("mySidepanel").innerHTML="<h1>sugus laurentae evenigrande<\h1>";    
    map.flyTo([48.20256653850632,16.375739391280092],12);

});

BudaPesta.on("click",()=>
{
    map.flyTo([47.47406540960728,19.04659516095427],12);

});

Iasi.on("click",()=>{
    map.flyTo([47.1574936249298,27.58796427224692],12);

})
//map handle
map.on("click",()=>{closeNav();

});


//pop-up handle


Botosani.bindPopup(
    '<img class="sus" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"><\img><br><h1>asdasdasd<\h1>'
);
//function onMapClick(e) {
 //   alert("You clicked the map at " + e.latlng);
//}

//map.on('click', onMapClick);