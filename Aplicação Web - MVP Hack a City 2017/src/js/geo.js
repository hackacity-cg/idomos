/*
var geofireRef = database.ref("geofire")
var geoFire = new GeoFire(geofireRef)

var currentPosition = JSON.parse( localStorage.getItem('currentPosition') );

var geoQuery = geoFire.query({
  center: [0,0],
  radius: 0.5,
});

// Attach event callbacks to the query

var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location) {

  console.log(key + " entered the query. Hi " + key + "!");

  marketRef = database.ref("markets/" + key)
  marketRef.on('value', function(s){
    markets[ key ] = s.val()
    dispatchAppEvent('marketsChanged')
    localStorage.setItem('markets', JSON.stringify( markets ))
  })



});

var onKeyExitedRegistration = geoQuery.on("key_exited", function(key, location) {
  console.log(key + " migrated out of the query. Bye bye :(");
  delete markets[ key ]
  dispatchAppEvent('marketsChanged')
  localStorage.setItem('markets', JSON.stringify( markets ))
});

var onKeyMovedRegistration = geoQuery.on("key_moved", function(key, location) {
  console.log(key + " moved to somewere else within the query.");
});


var lastKnownPolygon = [];

function getLocation()
{
  log("Buscando localização")
  navigator.geolocation.watchPosition(
    gotPosition,
    noPosition
  )
}

function gotPosition(pos)
{

  currentPosition = [pos.coords.longitude, pos.coords.latitude];

  console.log('atualizando criterio geoQuery')
  geoQuery.updateCriteria({ center: currentPosition })

  localStorage.setItem('currentPosition', JSON.stringify(currentPosition));
  dispatchAppEvent('currentPositionReady', JSON.stringify(currentPosition));

  $splash.className = "";

}

function noPosition()
{
  console.log("no Position... shit");
};

*/
