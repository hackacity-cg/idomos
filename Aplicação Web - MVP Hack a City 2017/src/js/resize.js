function checkSize(){
  //$sections.style.height = ( window.innerHeight -  $header.offsetHeight )+"px";
  console.log('resize')
}

setTimeout( checkSize, 100 )
window.addEventListener('resize', checkSize)
