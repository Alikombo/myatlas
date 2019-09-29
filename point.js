(function() {

  var basemaps = {
    Grayscale: L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    Streets: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
  };

  var groups = {
    dumps: new L.LayerGroup(),
    recyclebin: new L.LayerGroup(),
    roots: new L.LayerGroup(),
    coverage: new L.LayerGroup()
  };


  
    var poi = L.icon({
      iconUrl: 'library/leaflet/images/kipele.jpg',
      iconSize:     [40, 28],
      iconAnchor:   [25, 16],
      popupAnchor:  [-5, -12] 
      });
      var marker = L.marker([-6.2072, 39.3205], {icon: poi}).addTo(groups.dumps);
   


  //L.marker([-6.165954, 39.202282]).bindPopup('A recyclebin').addTo(groups.recyclebin);
//-6.1789725, 39.2054938	urusi
  var point1 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1789725,39.2054938], {icon: point1}).addTo(groups.recyclebin).bindPopup
    ('<b>Urusi collection point</b> <div><img style="width:100%;" src="library/leaflet/images/urusi.jpg"/></div>' ,{minWidth:256});

    //-6.1554470, 39.2116630	shauri moyo
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1554470, 39.2116630], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Shauri moyo collection point</b> <div><img style="width:100%;" src="library/leaflet/images/alabama.jpg"/></div>' ,{minWidth:256});

     // -6.1678063, 39.2233492	kwa wazee
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1678063, 39.2233492], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Kwa wazee collection point</b> <div><img style="width:100%;" src="library/leaflet/images/asya.jpg"/></div>' ,{minWidth:256});


     // -6.1661416, 39.2030000	makadara
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1661416, 39.2030000], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Makadara collection point</b> <div><img style="width:100%;" src="library/leaflet/images/alabama 2.jpg"/></div>' ,{minWidth:256});



     // -6.1664350, 39.1994186	mwembe shauri
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1664350, 39.1994186], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Mwembe shauri collection point</b> <div><img style="width:100%;" src="library/leaflet/images/mwembe.jpg"/></div>' ,{minWidth:256});


     // -6.1678063, 39.2233492	kwa wazee
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1678063, 39.2233492], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Kwa wazee collection point</b> <div><img style="width:100%;" src="library/leaflet/images/baja 1.jpg"/></div>' ,{minWidth:256});


         // -6.1607152, 39.2096475	Mkele
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1607152, 39.2096475], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Mkele collection point</b> <div><img style="width:100%;" src="library/leaflet/images/majalis 2.jpg"/></div>' ,{minWidth:256});

 
  
       // -6.1528383, 39.2200008	chumbuni
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1528383, 39.2200008], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Chumbuni collection point</b> <div><img style="width:100%;" src="library/leaflet/images/kisiwandui.jpg"/></div>' ,{minWidth:256});

  

        // -6.004167, 39.328308	Amani
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.004167, 39.328308], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Amani collection point</b> <div><img style="width:100%;" src="library/leaflet/images/asya 2.jpg"/></div>' ,{minWidth:256});


  //L.marker([-6.165954, 39.202282]).bindPopup('A recyclebin').addTo(groups.recyclebin);
 

   // -	Sogea
   var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1705216, 39.2181420], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Sogea collection point</b> <div><img style="width:100%;" src="library/leaflet/images/dump 2.jpg"/></div>' ,{minWidth:256});

   // 	Amani
   var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1631009, 39.2249867], {icon: point2}).addTo(groups.recyclebin).bindPopup
    ('<b>Amani collection point</b> <div><img style="width:100%;" src="library/leaflet/images/majalis 2.jpg"/></div>' ,{minWidth:256});

   // 	Majalis
 var point2 = L.icon({
  iconUrl: 'library/leaflet/images/point.png',
  iconSize:     [40, 28],
  iconAnchor:   [25, 16],
  popupAnchor:  [-5, -12] 
  });
  var marker = L.marker([-6.16859543,39.20060490], {icon: point2}).addTo(groups.recyclebin).bindPopup
  ('<b>Majalis collection point</b> <div><img style="width:100%;" src="library/leaflet/images/baja.jpg"/></div>' ,{minWidth:256});
 // 	Baja
 var point2 = L.icon({
  iconUrl: 'library/leaflet/images/point.png',
  iconSize:     [40, 28],
  iconAnchor:   [25, 16],
  popupAnchor:  [-5, -12] 
  });
  var marker = L.marker([-6.16921250,39.20060490], {icon: point2}).addTo(groups.recyclebin).bindPopup
  ('<b>Baja collection point</b> <div><img style="width:100%;" src="library/leaflet/images/majalisi.jpg"/></div>' ,{minWidth:256});



    
  
var point5 = L.icon({
  iconUrl: 'library/leaflet/images/point.png',
  iconSize:     [40, 28],
  iconAnchor:   [25, 16],
  popupAnchor:  [-5, -12] 
  });
  var marker = L.marker([-6.166082, 39.202545], {icon: point5}).addTo(groups.roots);
  
  var point5 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.004167, 39.328308], {icon: point5}).addTo(groups.roots);
    
  
      
  L.marker([-6.165954, 39.202282]).bindPopup('A recyclebin').addTo(groups.roots);

  
  
  

  
  
  window.ExampleData = {
    LayerGroups: groups,
    Basemaps: basemaps
  };

}());
