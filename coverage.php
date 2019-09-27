<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
<title>
Waste Zanzibar atlas
</title>
<link rel="stylesheet" href="css/bootstrap.css" />
<link rel="stylesheet" href="css/bootstrap.min.css" />

<link rel="stylesheet" charset="utf-8" href="library/leaflet/leaflet.css" />
	<script type="text/javascript" charset="utf-8" src="library/leaflet/leaflet.js"></script>
	<script type="text/javascript" charset="utf-8" src="dist/leaflet-meters.js"></script>
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
   
   <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
   integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
   crossorigin=""></script>
   
   <script src="data/countries.geojson"></script>
   <link rel="stylesheet" href="dist/leaflet.groupedlayercontrol.min.css" />
   <link rel="stylesheet" href="dist/leaflet-routing-machine.css" />
   
   
 

<style>

 #mapid { height: 600px;
          width:1000px; }
 /*Legend specific*/
.legend {
  padding: 6px 8px;
  font: 14px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255, 255, 255, 0.8);
  /*box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);*/
  /*border-radius: 5px;*/
  line-height: 24px;
  color: #555;
}
.legend h4 {
  text-align: center;
  font-size: 16px;
  margin: 2px 12px 8px;
  color: #777;
}

.legend span {
  position: relative;
  bottom: 3px;
}

.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin: 0 8px 0 0;
  opacity: 0.7;
}

.legend i.icon {
  background-size: 18px;
  background-color: rgba(255, 255, 255, 1);
}
</style>
</head>

<body>


<div class="col-md-12">
  <nav class="navbar navbar-default" style="background-color: whitesmoke">
    <div class="container-fluid">
    <h1>Zanzibar waste collection atlas</h1>
  </div>
</nav>
</div>
<div class="row container">


  <div class="col-md-3">
  <div class="list-group" >
            
            <li class="list-group-item"><a href="index.php" class="nav-link"><i class="fa fa-tasks"></i>  Map</a></li> 
            <li class="list-group-item"><a href="roots.php" class="nav-link"><i class="fa fa-tasks"></i>  Roots</a></li> 
            <li class="list-group-item"><a href="coverage.php" class="nav-link"><i class="fa fa-cog"></i>  Collection Coverage</a></li> 
           
            <li class="list-group-item"><a href="#" class="nav-link"><i class="fa fa-tasks"></i>  About</a></li> 
          
          
            </div>
  </div>
<div class="col-md-9">
  
<div id="mapid"></div>
<script src="dist/leaflet.groupedlayercontrol.min.js"></script>
<script src="dist/leaflet.groupedlayercontrol.min.js.map"></script>
<script type="text/javascript" src="point.js"></script>
<script src="dist/leaflet-routing-machine.js"></script>
<script>
	var mymap = L.map('mapid').setView([-6.1333328, 39.3166654], 11);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 20,
	id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYmluYm9uaXkiLCJhIjoiY2swa2VhdDB0MGl5OTNsbGlnMWduMmd0ZiJ9.XajWTPyAcPtxvcxIVZmg3Q',
}).addTo(mymap);

    //-6.1789725, 39.2054938	urusi
    var circle = L.circle([-6.1789725,39.2054938], {
      color: '#ffdccc',
      fillColor: '#ffdccc',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);

    //shauri moyo
    var circle = L.circle([-6.1554470, 39.2116630], {
      color: '#ffdccc',
      fillColor: '#ffdccc',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);
    //kwa wazee
    
    var circle = L.circle([-6.1678063, 39.2233492], {
      color: '#ffdccc',
      fillColor: '#ffdccc',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);
  
    //makadaraa
    var circle = L.circle([-6.1661416, 39.2030000], {
      color: '#ff854d',
      fillColor: '#ff854d',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);
//mwembe shauri

var circle = L.circle([-6.1664350, 39.1994186], {
  color: '#ff854d',
  fillColor: '#ff854d',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
//kwa wazee

var circle = L.circle([-6.1678063, 39.2233492], {
  color: '#ff854d',
  fillColor: '#ff854d',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
  
//mkele
var circle = L.circle([-6.1607152, 39.2096475], {
  color: '#cc4100',
  fillColor: '#cc4100',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

  //chumbuni
  var circle = L.circle([-6.1528383, 39.2200008], {
    color: '#cc4100',
    fillColor: '#cc4100',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);
  //amani

  
  var circle = L.circle([-6.004167, 39.328308], {
    color: '#cc4100',
    fillColor: '#cc4100',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);


  

  //////////////////////////////

/*Setup*/
  // add a scale at at your map.
var scale = L.control.scale().addTo(mymap); 

// Get the label.
var metres = scale._getRoundNum(mymap.containerPointToLatLng([0, mymap.getSize().y / 2 ]).distanceTo( mymap.containerPointToLatLng([scale.options.maxWidth,mymap.getSize().y / 2 ])))
  label = metres < 1000 ? metres + ' m' : (metres / 1000) + ' km';

  console.log(label);
/*Legend specific*/
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(mymap) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Keys</h4>";
  div.innerHTML += '<i style="background: #ffdccc"></i><span>Low collection cover</span><br>';
  div.innerHTML += '<i style="background: #ff854d"></i><span>Medium collection cover</span><br>';
  div.innerHTML += '<i style="background: #cc4100"></i><span>High collection cover</span><br>';
  

  return div;
};
legend.addTo(mymap);

</script>
</div>
</div>
<div class="">
  <div class="col-md-12">
<div class="well well-lg""  style="background-color: whitesmoke"><center><h2>Suza</h2></center> </div>
</div>
</div>


</body>

</html>