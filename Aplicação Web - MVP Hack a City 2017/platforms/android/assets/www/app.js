var moneyUnit = 'R$';

var $app = document.querySelector("#app-shell")
var $splash = document.querySelector('#splash');
var $logo = document.querySelector("#title-button")
var $log = document.querySelector("#log")
var $launcher = document.querySelector("#launcher")

function getDataTarget( target )
{

    while ( target.dataset.activity == undefined )
    {
        target = target.parentElement
    }

    return target
}

function textContent( $nodeList , text )
{
  for( var i = 0; i < $nodeList.length; i++ )
  {
    $nodeList[i].textContent = text;
  }
}

function addListeners( $nodeList, evName, listener )
{
  for( var i = 0; i < $nodeList.length; i++ )
  {
    $nodeList[i].addEventListener(evName, listener);
  }
}

function log( msg )
{
  $log.textContent = msg;
}

function dispatchAppEvent(name, data)
{
  document.dispatchEvent( new Event('app:'+name) )
  console.debug( 'app:'+name, 'dispatched', data )
  log(name)
}


function ucwords(str)
{

  return (str + '')
    .replace(/^(.)|\s+(.)/g, function ($1) {
      return $1.toUpperCase()
    })

}

function str_replace( search, replace, val )
{
  while( val.indexOf(search) > -1)
  {
    val = val.replace(search, replace)
  }
  return val
}

function removerAcentos( val )
{
  val = str_replace("ã", "a", val);
	val = str_replace("á", "a", val);
	val = str_replace("à", "a", val);
	val = str_replace("â", "a", val);
	val = str_replace("Ã", "A", val);
	val = str_replace("Á", "A", val);
	val = str_replace("À", "A", val);
	val = str_replace("Â", "A", val);

	val = str_replace("é", "e", val);
	val = str_replace("è", "e", val);
	val = str_replace("ê", "e", val);
	val = str_replace("É", "E", val);
	val = str_replace("È", "E", val);
	val = str_replace("Ê", "E", val);

	val = str_replace("í", "i", val);
	val = str_replace("ì", "i", val);
	val = str_replace("î", "i", val);
	val = str_replace("ĩ", "i", val);
	val = str_replace("Í", "I", val);
	val = str_replace("Ì", "I", val);
	val = str_replace("Î", "I", val);
	val = str_replace("Ĩ", "I", val);

	val = str_replace("ó", "o", val);
	val = str_replace("ò", "o", val);
	val = str_replace("ô", "o", val);
	val = str_replace("õ", "o", val);
	val = str_replace("Ó", "O", val);
	val = str_replace("Ò", "O", val);
	val = str_replace("Ô", "O", val);
	val = str_replace("Õ", "O", val);

	val = str_replace("ú", "u", val);
	val = str_replace("ù", "u", val);
	val = str_replace("û", "u", val);
	val = str_replace("ũ", "u", val);
	val = str_replace("ü", "u", val);
	val = str_replace("Ú", "U", val);
	val = str_replace("Ù", "U", val);
	val = str_replace("Û", "U", val);
	val = str_replace("Ũ", "U", val);
	val = str_replace("Ü", "U", val);

	val = str_replace("ç", "c", val);
	val = str_replace("Ç", "C", val);
	val = str_replace("ñ", "n", val);
	val = str_replace("Ñ", "N", val);
	val = str_replace("ª", "a", val);
	val = str_replace("º", "o", val);
	val = str_replace("°", "o", val);

	val = str_replace("?", "", val);
	val = str_replace("@", "", val);
	val = str_replace("!", "", val);
	val = str_replace("#", "", val);
	val = str_replace("$", "", val);
	val = str_replace("%", "", val);
	val = str_replace("&", "", val);
	val = str_replace("*", "", val);
	val = str_replace("'", "", val);
	val = str_replace("'", "", val);
	val = str_replace("`", "", val);
	val = str_replace("~", "", val);
	val = str_replace("^", "", val);

  return val;
}

function dr()
{
  document.dispatchEvent( new Event('deviceready') )
}

// https://github.com/floatinghotpot/cordova-admob-pro#usage
/*
admobID = "ca-app-pub-1130283171348151~8755371587"
bannerID = "ca-app-pub-1130283171348151/9007487174"

var admobid = {};
  if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
    admobid = {
      banner: bannerID, // or DFP format "/6253334/dfp_example_ad"
      interstitial: 'ca-app-pub-xxx/yyy'
    };
  } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
    admobid = {
      banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
      interstitial: 'ca-app-pub-xxx/kkk'
    };
  } else { // for windows phone
    admobid = {
      banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
      interstitial: 'ca-app-pub-xxx/kkk'
    };
  }
*/

/*
var products = JSON.parse(localStorage.getItem('products'))

if ( products == null ) products = {};


var database = firebase.database();
var productsRef = database.ref("products");
var connectedRef = database.ref(".info/connected");

productsRef.on('value', function(snap){
  products = snap.val();
  localStorage.setItem('products', JSON.stringify( products ));
  dispatchAppEvent('productsChanged');
})

connectedRef.on("value", function(snap) {
  if (snap.val() === true) {
    log("connected")
  } else {
    log("not connected")
  }
});

*/

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

function checkSize(){
  //$sections.style.height = ( window.innerHeight -  $header.offsetHeight )+"px";
  console.log('resize')
}

setTimeout( checkSize, 100 )
window.addEventListener('resize', checkSize)


$logo.addEventListener( "click", function(){
  $app.className = "ui vbox main"
})

function onBackButton(ev)
{
    ev.stopPropagation()
    ev.preventDefault()
    $app.className = "ui vbox main"
}

document.addEventListener("deviceready", function(){

  console.log("deviceready")

  document.addEventListener("backbutton", onBackButton, false);

  /*if (AdMob)
  {

    AdMob.setOptions({
      // adSize: 'SMART_BANNER',
      position: AdMob.AD_POSITION.BOTTOM_CENTER,
      //isTesting: true, // set to true, to receiving test ad for testing purpose
      bgColor: 'black', // color name, or '#RRGGBB'
      // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
      // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
    });

    AdMob.createBanner({
      adId: admobid.banner,
      autoShow: true });

  } else { console.log('no AdMob ?') }*/

  setTimeout( function(){ $splash.className = "" }, 1000 )

}, false);

setTimeout( function(){ $splash.className = "" }, 1000 )

$launcher.addEventListener('click', function(ev){

  target = getDataTarget(ev.target)

  if ( 'activity' in target.dataset )
  {
    $app.className = "ui vbox "+target.dataset.activity;
  }

})
