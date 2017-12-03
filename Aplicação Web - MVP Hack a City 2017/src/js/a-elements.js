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
