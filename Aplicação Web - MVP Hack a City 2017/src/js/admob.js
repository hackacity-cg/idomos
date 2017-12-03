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
