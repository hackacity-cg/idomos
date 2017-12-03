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
