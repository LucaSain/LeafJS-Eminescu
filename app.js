const app = Vue.createApp({
  data() {
    return {
      NavOpen: false,

      //check which is open
      Init: true,

    cur : 1,

    //handle data
      data: "",
      title: "",
      cnt:0,
      which:0,
      default_image: "src/botosani_castigator.jfif",
      textData: {
        1: {
            def_img: "src/botosani_castigator.jfif",
            title: "Botosani",
            text: "La Botoșani – oraș care îl revendică pe Eminescu prin nașterea sa –, locurile prin care a trecut conturează un traseu încărcat simbolic, de apropiere de pașii poetului. Casa în care s-a născut Eminescu, cumpărată de Raluca Eminovici; Biserica Uspenia, la care a fost botezat; Tribunalul Botoșani (astăzi clădire a primăriei), în care a lucrat ca practicant; Casa ,,Petrache Cristea” (fostul sediul al Consiliului Judeţean), unde a lucrat ca secretar; Casa ,,Sommer”, unde a dat reprezentaţii trupa lui M. Pascaly, Eminescu fiind sufleor; Casele mătușii sale, Maria Mavrodin, la care a stat întreaga familie Eminovici; casa în care a fost îngrijit de sora sa, Harieta, după externarea de la Bolniţa Mănăstirii Neamţ; Parcul „Vârnav” (astăzi parcul ,,Mihai Eminescu”) în care poetul era văzut în perioada 1887-1888; Spitalul ,,Mavromati” (fostul spital Sf. Spiridon), unde a fost internat în 1887; Hotelul Moldova din Botoşani, unde participase la o agapă cu Toma Micheriu și sora acestuia, Nataliţa; poşta din Botoşani, de unde expedia scrisori; Casa de Economii Botoşani, de unde își ridica banii; Gara din Botoşani, unde poposea pe 30 august 1871 sau 13 august 1876, sau 10 aprilie 1887 – unele dintre acestea existente și acum, altele dispărute între timp sunt semne al aflării sale la Botoșani. Ele rețin evenimente și oameni, întâmplări din biografia poetului, fiind repere pentru a-l situa într-un anume timp, într-un anume spațiu, cunoscută fiind discreția lui Eminescu în privința vieții sale private, care a impus, într-un fel, un punct de vedere din afară asupra biografiei sale reconstituite din amintirile celor care l-au cunoscut sau l-au văzut în aceste sau alte locuri."
            ,img:0
        },
        2:{
            def_img: "src/casa.webp",
            title:"Ipotesti",
            text:"În vara lui 1847, Gheorghe Eminovici cumpăra, cu 4000 de galbeni moșia Ipotești de la Eufrosinia Petrino, prin fratele acesteia, Constantin Hurmuzachi. Pe moșia cu peste 300 de fălcide pământ se afla și o casă veche, pe care căminarul o demolează și construiește, pe fundațiaexistentă, o casă nouă. Abia în 1853, își va aduce aici familia, locuind constant la Ipotești și dupăvânzarea moșiei, până la moartea sa, în 1884. Din 1853, prin urmare, și până în 1857, când pleacă împreună cu frații săi la școlile din Cernăuți, Mihai Eminescu a locuit cu familia la Ipotești. Aici va reveni în vacanțe în perioada studiilor la Cernăuți, dar și după aceea: din peregrinările sale cu trupe teatrale prin țară, de la studii la Viena sau Berlin, de la slujbele sale din Iași sau București. Cât va fi însemnat Ipoteștii pentru Eminescu? Atunci când tatăl său, căminarul Eminovici, este nevoit să vândă moșia, ar fi vrut să adune bani și să o răscumpere: \n „Să mă însor ca să pot răscumpăra Ipoteştii sau să împrumut bani de la Hristu. Avans să dea bătrânul, oricât ne-ar cere. Restul să se ia de la creditul funciar. Dobânzile la credit şi ratele lunare să le plătesc eu”."
            ,img:0
        },
        3:{
            def_img: "https://www.galeriile-cismigiu.ro/uploads/products/poezii-mihai-eminescu-editia-maiorescu-p3-0.jpg",
            title:"Bucuresti",
            text:"Despre prima ediție a Poesiilor, în 1883, Petru Creția scria: „Eminescu mai dăinuia încă în iunie, dar fără a mai fi stăpân al soartei sale, când, totuși, i-au apărut într-un volum elegant, culese pe hârtie bună, împodobite pagină cu pagină cu vignete, 61 de poezii, la Socec, către sfârșitul lui decembrie 1883 (după stilul vechi). Poetul era în Ober-Döbling, lângă Viena, înstrăinat de lume și de sine” (P. Creția, Testamentul unui eminescolog, București, 2015, p. 106). \n  Ediția a doua – 1885 – reproducea fidel cuprinsul primei ediții. Maiorescu, deși extrăsese din lada lui Eminescu și publicase în Convorbiri literare trei texte (Diana; Din noaptea; Sara pe deal), nu le include în volumul nou editat. În ediția a treia, ultima din timpul vieții poetului, din 1888, Maiorescu include, față de edițiile anterioare, încă trei poezii: La steaua; De ce nu-mi vii; Camadeva."
            ,img:0
        },
        4:{
            def_img: "https://luceafarul.net/wp-content/uploads/2020/01/Lacramioarele-673x1024.jpg",
            title:"Cernauti",
            text:"„Seara m-am dus iarăși la Eminescu și l-am aflat scriind o poezie. El mai schimba, mai adăoga, mai netezea, dar am observat că nu i-a plăcut că l-am surprins. Pe urmă însă îmi arătă poezia și-mi spuse că mai mulți studenți vor scrie poezii la moartea lui Pumnul cari se vor tipări. Mi-a cetit apoi întreaga poezie. Este aceeași care împreună cu alte șase poezii a fost tipărită cu ocazia morții lui Pumnul sub titula: Lăcrămioarele învățăceilor gimnaziaști din Cernăuți la moartea prea iubitului lor profesor Arune Pumnul.După cetire îmi spuse singur că începutul strofei a doua, adică Metalica vibrândă a clopotelor jale, nu-i place, dar nu mai are timp să prefacă poezia căci trebuie să o predea profesorului Sbiera. Eminescu iscălește această poezie: M. Eminoviciu, privatist.”(Teodor V. Ștefanelli, Amintiri despre Eminescu, 1914)"
            ,img:0
        },
        5:{
            def_img: "https://s3-eu-west-1.amazonaws.com/a10ro/Lot/12055/conversions/main-image-details.jpg",
            title:"Viena",
            text:"Luceafărul - Almanahul Societății Academice „România Jună”, 1883 \n „Sâmbătă: 17/29 Aprilie. Seara Junimea la mine. Puțină lume, numai 12. Citit frumoasă legendă de Eminescu, «Luceafărul».‟ \n „Sâmbătă 24 Aprilie. Între acestea, în cele 2 camere din față ale mele Junimea până la 12 ¾ noaptea. Prințul Știrbey, Carp, I. Cerchez, Mandrea, D. R. Rosetti, (Theodor R[osetti] și Burghele lipsesc din București), Nica, Frollo, Popescu (Hermes), Slavici, Eminescu, [Nicolae] Densusianu și Iacovachi. Lipseau încă Chibici, văru-meu [Popasu], [cei de la] Rom[ânia] lib[eră]‟ și Manliu, Jipescu, Filibiliu, Hasdeu. – Discuție cu Carp despre patima beției a lui Poe. Lectură a traducerei Mănăstirea Tomnatica, care a fost găsită bună, a unui întâiu tablou al nouei «reviste» a [anului] 1881 de D. Rosetti, a nouei frumoase poezii a lui Eminescu «Luceafărul».‟ \n Luni 13/25 Sept. 82. Ieri seară au fost aici încă al-de [Teodor] Rosetti, Annette, Burghele. Am citit câte ceva din «Tribunal comique», dar mai ales «Cocoana Smaranda», care a plăcut tuturor, și nematura «Cocoanele din Vălenii-de-munte», de Jipescu, apoi vecinic frumoasele poezii de Eminescu.‟ \n „Vineri 8/20 Oct. 82. Seara Luceafărul lui Eminescu, cu el și Anette și familia mea, citit, corectând.‟„Joi 28 0ct./9 Noem. 82. De 4 zile, vreme foarte frumoasă, foarte cald și soare. – Aseară, Junimea, cu Alecsandri, Zizin, Gane, d-na Beldimanu, Annette, d-na Rosetti, Mite, Alduleanu (stud. jur. din Pesta), Caloianu, Hermes-Popescu, J. Cerchez, Jipescu, Nica, Chibici, Eminescu, Slavici, Păucescu, Burghele, Nenitescu, în total 23 de persoane. O frumoasă nouă novelă a lui Gane, pentru Almanahul studenților de la Viena, 4 poezii drăguțe de Nenițescu, scrisoare a lui Slavici din Italia, frumosul «Luceafăr» al lui Eminescu, șlefuit.‟ "
            ,img:22
        },
        6:{
            def_img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Revista_Familia_-_Logo_-_9_martie_1866.JPG",
            title:"Budapesta",
            text:"De-aș avea - Familia, 25 februarie/9 martie 1866 \n „Cu bucurie deschidem coloanele foii noastre acestui june de numai 16 ani, care cu primele sale încercări poetice transmise nouă ne-a surprins plăcut. Red.” \n \n O călărire în zori - Familia, 15/27 mai 1866 \n „Cernăuți. M.E. Vom primi toate cu bucurie, numai te rugăm ca, încât se poate, să scrii după ortografia ce o urmăm și noi.”"
            ,img:21
        },
        7:{
            //1 si 9 rip
            def_img: "src/img/Convorbiri_Literare(iasi)/1.jpg",
            title:"Iasi",
            text:"Epigonii – Convorbiri literare, 15 august 1870 \n „Poate că Epigonii să fie rău scrisă. Ideea fundamentală e comparaţiunea dintre lucrarea încrezută şi naivă a predecesorilor noştri, şi lucrarea noastră trezită, rece. Prin operele liricilor români, tineri, se manifestă acel aer bolnav deşi dulce pe care germanii îl numesc Weltschmerz. Aşa Nicoleanu, aşa Skelitti, aşa Matilda Cugler, e oarecum conştiinţa adevărului trist şi sceptic învins de către colorile şi formele frumoase, e ruptura între lumea bulgărului şi lumea ideei. Predecesorii noştri credeau în ceea ce scriau, cum Shakespeare credea în fantasmele sale, îndată însă ce conştiinţa vede că imaginile nu sunt decât un joc, atunci, după părerea mea, se naşte neîncrederea sceptică în propriele sale creaţiuni. Comparaţiunea din poesia mea cade în defavorul generaţiunii noi şi cred cu drept.Încă una. Mi se pare că strofa a treia nu se prea potriveşte cu întregul. Se poate cum că numai mi se pare, se poate cum că şi multe altele mi s-or fi părând bune, şi or fi rele; în fine ceea ce nu se va potrivi puteţi şterge în bună voie. În caz de a şterge strofa a treia, apoi veţi fi bun de a corege într-a patra vorba zidea în zidind: «Eliad zidind»… Admiţând strofa a treia ar suna mai bine, cores[punzător] astfel.” \n \n Mortua est! - Convorbiri literare, 1 martie 1871 \n „Apoi vă mai trimit niște versuri de-ale mele. Bune simt că nu sunt; poate însă să nu fie cu desăvârșire rele. Ștergeți ce vi se pare bun de șters.”"
            ,img:39
        }
      }
    };
  },
  methods: {
    OpenNav() {
      this.NavOpen = true;
    
      if (this.Init == true) {
        this.data=this.textData[2].text;
        this.title=this.textData[2].title;
        this.default_image=this.textData[2].def_img;
        this.cur=1;
        this.Init=false;
        this.cnt=0
        map.flyTo([47.76520853657726, 26.558941863861747], 12);
        
      }
      
    },
    CloseNav() {
      this.NavOpen = false;
    },
    next()
    {
        this.cur++;
        if(this.cur>7)
        {
            this.cur=1;
        }
        if(this.cur==1)
        {
            this.cnt=0
          
            this.data=this.textData[2].text;
            this.title=this.textData[2].title;
            this.default_image=this.textData[2].def_img;
            map.flyTo([47.76520853657726, 26.558941863861747], 12);
        }
        if(this.cur==2)
        {
            
            this.data=this.textData[1].text;
            this.title=this.textData[1].title;
            this.default_image=this.textData[1].def_img;
            this.cnt=0
            map.flyTo([47.74145879286627, 26.65952773936658], 12);
        }
        if(this.cur==3)
        {
            
            this.data=this.textData[4].text;
            this.title=this.textData[4].title;
            this.default_image=this.textData[4].def_img;
            this.cnt=0
            map.flyTo([48.281723789609, 25.942375039229802], 12);
        }
        if(this.cur==4)
        {
            
            this.data=this.textData[6].text;
            this.title=this.textData[6].title;
            this.default_image=this.textData[6].def_img;
            this.which=3;
            this.cnt=this.textData[6].img;
            map.flyTo([47.47406540960728, 19.04659516095427], 12);
        }
        if(this.cur==5)
        {
           
            this.data=this.textData[5].text;
            this.title=this.textData[5].title;
            this.default_image=this.textData[5].def_img;
            this.which=1;
            this.cnt=this.textData[5].img;
            map.flyTo([48.20256653850632, 16.375739391280092], 12)
        }
        if(this.cur==6)
        {
            
            this.data=this.textData[7].text;
            this.title=this.textData[7].title;
            this.default_image=this.textData[7].def_img;
            this.which=2;
            this.cnt=this.textData[7].img;
            map.flyTo([47.1574936249298, 27.58796427224692], 12);
        }
        if(this.cur==7)
        {
         
            this.data=this.textData[3].text;
            this.title=this.textData[3].title;
            this.default_image=this.textData[3].def_img;
            this.cnt=0
            map.flyTo([44.428865136973656, 26.110832379918293], 12);
        }

    },
    prev()
    {
        this.cur--;
        if(this.cur<1)
        {
            this.cur=7;
        }
        if(this.cur==1)
        {
          
            this.data=this.textData[2].text;
            this.title=this.textData[2].title;
            this.default_image=this.textData[2].def_img;
            map.flyTo([47.76520853657726, 26.558941863861747], 12);
            this.cnt=0
        }
        if(this.cur==2)
        {
            
            this.data=this.textData[1].text;
            this.title=this.textData[1].title;
            this.default_image=this.textData[1].def_img;
            this.cnt=0
            map.flyTo([47.74145879286627, 26.65952773936658], 12);
        }
        if(this.cur==3)
        {
            
            this.data=this.textData[4].text;
            this.title=this.textData[4].title;
            this.default_image=this.textData[4].def_img;
            this.cnt=0
            map.flyTo([48.281723789609, 25.942375039229802], 12);
        }
        if(this.cur==4)
        {
            
            this.data=this.textData[6].text;
            this.title=this.textData[6].title;
            this.default_image=this.textData[6].def_img;
            this.which=3;
            this.cnt=this.textData[6].img;
            map.flyTo([47.47406540960728, 19.04659516095427], 12);
        }
        if(this.cur==5)
        {
           
            this.data=this.textData[5].text;
            this.title=this.textData[5].title;
            this.default_image=this.textData[5].def_img;
            this.which=1;
            this.cnt=this.textData[5].img;
            map.flyTo([48.20256653850632, 16.375739391280092], 12)
        }
        if(this.cur==6)
        {
           
            this.data=this.textData[7].text;
            this.title=this.textData[7].title;
            this.default_image=this.textData[7].def_img;
            this.which=2;
            this.cnt=this.textData[7].img;
            map.flyTo([47.1574936249298, 27.58796427224692], 12);
        }
        if(this.cur==7)
        {
         
            this.data=this.textData[3].text;
            this.title=this.textData[3].title;
            this.default_image=this.textData[3].def_img;
            
            map.flyTo([44.428865136973656, 26.110832379918293], 12);
            this.cnt=0
        }
    }
  },
  mounted() {
     
     
    var map = L.map("map", {
      center: L.latLng(46.58031938407686, 22.521783487001443), //default Botosani
      zoom: 7.5,
    });
    window.map=map; 
    //locate zoom
    map.zoomControl.setPosition("topright");

    setTimeout(function () {
      map.invalidateSize();
    }, 100);
    //handle waypoints

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/lucasainenco/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        maxZoom: 18,
        id: "cl3evd2lo004414rz7mmgpd5g",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibHVjYXNhaW5lbmNvIiwiYSI6ImNsM2V2YXJ2czA0bDYzam4wMXYycDU0eG0ifQ.p7mkAeKWRHsi3q6pLdMhIQ",
      }
    ).addTo(map);
    map.flyTo([46.58031938407686, 22.521783487001443], 7.5);

    //create popups
    var greenIcon = L.icon({
      iconUrl: "src/img/vecc.png",
      iconSize: [50, 50], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -20], // point from which the popup should open relative to the iconAnchor
    });

    var Botosani = L.marker([47.74145879286627, 26.65952773936658], {
      icon: greenIcon,
    });
    var Ipotesti = L.marker([47.76520853657726, 26.558941863861747], {
        icon: greenIcon,
      });
    Ipotesti.addTo(map);
    Botosani.addTo(map);
    var Cernauti = L.marker([48.281723789609, 25.942375039229802], {
      icon: greenIcon,
    });
    Cernauti.addTo(map);
    var Viena = L.marker([48.20256653850632, 16.375739391280092], {
      icon: greenIcon,
    });
    Viena.addTo(map);
    var Budapesta = L.marker([47.47406540960728, 19.04659516095427], {
      icon: greenIcon,
    });
    Budapesta.addTo(map);
    var Iasi = L.marker([47.1574936249298, 27.58796427224692], {
      icon: greenIcon,
    });
    Iasi.addTo(map);

    var Bucuresti = L.marker([44.428865136973656, 26.110832379918293], {
      icon: greenIcon,
    });
    Bucuresti.addTo(map);

    //handle label
    var nick = L.marker([47.74145879286627, 26.65952773936658], {
      icon: L.divIcon({
        html: "Botosani",
        className: "text-below-marker",
      }),
    }).addTo(map);
    L.marker([48.281723789609, 25.942375039229802], {
      icon: L.divIcon({
        html: "Cernauti",
        className: "text-below-marker",
      }),
    }).addTo(map);
    L.marker([48.20256653850632, 16.375739391280092], {
      icon: L.divIcon({
        html: "Viena",
        className: "text-below-marker",
      }),
    }).addTo(map);
    L.marker([47.76520853657726, 26.558941863861747], {
        icon: L.divIcon({
          html: "Ipotesti",
          className: "text-slight-marker",
        }),
      }).addTo(map);
    L.marker([47.47406540960728, 19.04659516095427], {
      icon: L.divIcon({
        html: "Budapesta",
        className: "text-below-marker",
      }),
    }).addTo(map);
    L.marker([47.1574936249298, 27.58796427224692], {
      icon: L.divIcon({
        html: "Iasi",
        className: "text-below-marker",
      }),
    }).addTo(map);
    L.marker([44.428865136973656, 26.110832379918293], {
      icon: L.divIcon({
        html: "Bucuresti",
        className: "text-below-marker", 
      }),
    }).addTo(map);

    Botosani.on("click", () => {
        this.Init=false;
  
      this.data=this.textData[1].text;
      this.title=this.textData[1].title;
      this.default_image=this.textData[1].def_img;
      this.OpenNav();
      this.cnt=0
      map.flyTo([47.74145879286627, 26.65952773936658], 12);
      this.cur=2;
      //nisan();
    });
    Bucuresti.on("click", () => {
        this.Init=false;
       
        this.data=this.textData[3].text;
        this.title=this.textData[3].title;
        this.default_image=this.textData[3].def_img;
        this.OpenNav();
        this.cnt=0
        map.flyTo([44.428865136973656, 26.110832379918293], 12);
        this.cur=7

      });
      Cernauti.on("click", () => {
        this.Init=false;
     
        this.data=this.textData[4].text;
        this.title=this.textData[4].title;
        this.default_image=this.textData[4].def_img;
        this.OpenNav();
        this.cnt=0
        map.flyTo([48.281723789609, 25.942375039229802], 12);
        this.cur=3;

      });
      Viena.on("click", () => {
        this.Init=false;
       
        this.data=this.textData[5].text;
        this.title=this.textData[5].title;
        this.default_image=this.textData[5].def_img;
        this.which=1;
        this.cnt=this.textData[5].img;
        this.OpenNav();
        map.flyTo([48.20256653850632, 16.375739391280092], 12);
        this.cur=5;

      });
      Budapesta.on("click", () => {
        this.Init=false;
      
        this.data=this.textData[6].text;
        this.title=this.textData[6].title;
        this.default_image=this.textData[6].def_img;
        this.OpenNav();
        this.which=3;
        this.cnt=this.textData[6].img;
        map.flyTo([47.47406540960728, 19.04659516095427], 12);
        this.cur=4;
    
      });
      Iasi.on("click", () => {
        this.Init=false;
       
        this.data=this.textData[7].text;
        this.title=this.textData[7].title;
        this.default_image=this.textData[7].def_img;
        this.which=2;
        this.cnt=this.textData[7].img;
        this.OpenNav();
        map.flyTo([47.1574936249298, 27.58796427224692], 12);
        this.cur=6;
  
      });
      Ipotesti.on("click", () => {
        this.Init=false;
     
        this.data=this.textData[2].text;
        this.title=this.textData[2].title;
        this.default_image=this.textData[2].def_img;
        this.OpenNav();
        this.cnt=0
        map.flyTo([47.76520853657726, 26.558941863861747], 12);
        this.cur=1;
        

      });
      
      //map handle
map.on("click", () => {
    this.CloseNav();
  
  });
  
  //pop-up handle
  Ipotesti.bindPopup(
    '<img class="sus" src="https://planiada.ro/www/uploads/129/271.Casa_memorial_Mihai_Eminescu_1850_1889_i_lacul_din_Ipote_ti_1.jpg">  <img><br><h1>Ipotesti<h1>  '
  )
  Botosani.bindPopup(
    '<img class="sus" src="src/botosani_castigator.jfif">  <img><br><h1>Botosani<h1>  '
  );
  Bucuresti.bindPopup(
    '<img class="sus" src="https://www.formula-as.ro/wp-content/uploads/2019/09/1802-12-m-1000x630.jpg">  <img><br><h1>Casa lui Titu Maiorescu<h1>   '
  );
  Cernauti.bindPopup(
    '<img class="sus" src="https://i.simpalsmedia.com/point.md/news/809x456/2a526ddeabc05ec9e80ea41f42e0f94a.jpg">  <img><br><h1>Casa Lui Aron Pumnul<h1>'
  );
  Viena.bindPopup(
    '<img class="sus" src="https://adevarul.ro/assets/adevarul.ro/MRImage/2015/08/29/55e198f5f5eaafab2c0969a2/627x0.jpg">  <img><br><h1>Porzellangasse nr.9<h1>  '
  );
  Budapesta.bindPopup(
    '<img class="sus" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Revista_Familia_-_Logo_-_9_martie_1866.JPG">  <img><br><h1>A publicat in revista “Familia”<h1>   '
  );
  Iasi.bindPopup(
    '<img class="sus" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/d9/22/casa-v-pogor.jpg?w=1200&h=-1&s=1">  <img><br><h1>Casa Vasile Pogor<h1> '
  );
  },
});
app.mount("#app");
