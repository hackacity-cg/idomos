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
