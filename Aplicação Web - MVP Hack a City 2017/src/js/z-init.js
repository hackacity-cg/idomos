
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
