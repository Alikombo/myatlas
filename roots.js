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
  var point = [-6.165954, 39.202282];
  var marker = L.marker(point).addTo(groups.dumps);

  var point5 = L.icon({
  iconUrl: 'library/leaflet/images/point.png',
  iconSize:     [40, 28],
  iconAnchor:   [25, 16],
  popupAnchor:  [-5, -12] 
  });
  var marker = L.marker([-6.166082, 39.202545], {icon: point5}).addTo(groups.dumps);

  var point = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.004167, 39.328308], {icon: point}).addTo(groups.dumps);
  
    var poi = L.icon({
      iconUrl: 'library/leaflet/images/point.png',
      iconSize:     [40, 28],
      iconAnchor:   [25, 16],
      popupAnchor:  [-5, -12] 
      });
      var marker = L.marker([-6.1630489, 39.2173351], {icon: poi}).addTo(groups.dumps);
      var circle = L.circle([-6.004167, 39.328308], {
        color: '#800026',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      });
      var marker = L.marker([-6.1630489, 39.2173351], {icon: circle}).addTo(groups.dumps);


  //L.marker([-6.165954, 39.202282]).bindPopup('A recyclebin').addTo(groups.recyclebin);
//-6.1789725, 39.2054938	urusi
  var point1 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1789725,39.2054938], {icon: point1}).addTo(groups.recyclebin);

    //-6.1554470, 39.2116630	shauri moyo
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1554470, 39.2116630], {icon: point2}).addTo(groups.recyclebin);

     // -6.1678063, 39.2233492	kwa wazee
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1678063, 39.2233492], {icon: point2}).addTo(groups.recyclebin);


     // -6.1661416, 39.2030000	makadara
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1661416, 39.2030000], {icon: point2}).addTo(groups.recyclebin);



     // -6.1664350, 39.1994186	mwembe shauri
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1664350, 39.1994186], {icon: point2}).addTo(groups.recyclebin);


     // -6.1678063, 39.2233492	kwa wazee
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1678063, 39.2233492], {icon: point2}).addTo(groups.recyclebin);


         // -6.1607152, 39.2096475	Mkele
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1607152, 39.2096475], {icon: point2}).addTo(groups.recyclebin);

 
  
       // -6.1528383, 39.2200008	chumbuni
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.1528383, 39.2200008], {icon: point2}).addTo(groups.recyclebin);

  

        // -6.004167, 39.328308	Amani
  var point2 = L.icon({
    iconUrl: 'library/leaflet/images/point.png',
    iconSize:     [40, 28],
    iconAnchor:   [25, 16],
    popupAnchor:  [-5, -12] 
    });
    var marker = L.marker([-6.004167, 39.328308], {icon: point2}).addTo(groups.recyclebin);


  //L.marker([-6.165954, 39.202282]).bindPopup('A recyclebin').addTo(groups.recyclebin);
 

  L.marker([-6.165954, 39.202282]).bindPopup('A recyclebin').addTo(groups.roots);

  
    //-6.1789725, 39.2054938	urusi
    var circle = L.circle([-6.1789725,39.2054938], {
      color: '#ff9966',
      fillColor: '#ff9966',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);

    //shauri moyo
    var circle = L.circle([-6.1554470, 39.2116630], {
      color: '#ff9966',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);
    //kwa wazee
    
    var circle = L.circle([-6.1678063, 39.2233492], {
      color: '#ffccb3',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);
  
    //makadaraa
    var circle = L.circle([-6.1661416, 39.2030000], {
      color: '#ffccb3',
      fillColor: '#ffccb3',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);
//mwembe shauri

var circle = L.circle([-6.1664350, 39.1994186], {
  color: '#ff9966',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
//kwa wazee

var circle = L.circle([-6.1678063, 39.2233492], {
  color: '#800026',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
  
//mkele
var circle = L.circle([-6.1607152, 39.2096475], {
  color: '#ffeee6',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

  //chumbuni
  var circle = L.circle([-6.1528383, 39.2200008], {
    color: '#ffccb3',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);
  //amani

  
  var circle = L.circle([-6.004167, 39.328308], {
    color: '#ffeee6',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);

  
  L.Routing.control({
    waypoints: [
        L.latLng(-6.2072, 39.3205),
        L.latLng(-6.1638, 39.2188)
    ],
    routeWhileDragging: true
}).addTo(groups.roots);
  
  window.ExampleData = {
    LayerGroups: groups,
    Basemaps: basemaps
  };

}());
