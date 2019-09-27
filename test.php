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

<link rel="stylesheet" href="fonts\font-awesome\font-awesome.min.css" />
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
   
   
 
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
          integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
          crossorigin="" />

    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
            integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
            crossorigin=""></script>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>

  

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
            <li class="list-group-item active"><a href="routes.php" class="nav-link" style="color:white;"><i class="fa fa-tasks"></i>  Routes</a></li> 
          <li class="list-group-item"><a href="about.php" class="nav-link"><i class="fa fa-tasks"></i>  About</a></li> 
          
          
            </div>
  </div>
<div class="col-md-9">
  
<div id="mapid"></div>
<div id="distancetravelled"></div>
<script src="dist/leaflet.groupedlayercontrol.min.js"></script>
<script src="dist/leaflet.groupedlayercontrol.min.js.map"></script>
<script src="dist/leaflet-routing-machine.js"></script>
<script>
	var mymap = L.map('mapid').setView([-6.1655,39.2033], 14);
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 20,
	id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYmluYm9uaXkiLCJhIjoiY2swa2VhdDB0MGl5OTNsbGlnMWduMmd0ZiJ9.XajWTPyAcPtxvcxIVZmg3Q',
}).addTo(mymap);


//urusi

    var control = L.Routing.control({
            waypoints: [
              L.latLng(-6.1789725, 39.2254938),
        L.latLng(-6.2072, 39.3205)
            ],
            routeWhileDragging: true
        }).addTo(mymap);

        console.log(control);


    // add a scale at at your map.
    var scale = L.control.scale().addTo(mymap); 

// Get the label.
var metres = scale._getRoundNum(mymap.containerPointToLatLng([0, mymap.getSize().y / 2 ]).distanceTo( mymap.containerPointToLatLng([scale.options.maxWidth,mymap.getSize().y / 2 ])))
  label = metres < 1000 ? metres + ' m' : (metres / 1000) + ' km';

  console.log(label);
  
     

  //////////////////////////////

  var north = L.control({position: "bottomleft"});
north.onAdd = function(mymap) {
    var div = L.DomUtil.create("div");
    div.innerHTML = '<img style="width:20%;margin-left:10%;"src="library/leaflet/images/north5.png">';
    return div;
}
north.addTo(mymap);
  


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