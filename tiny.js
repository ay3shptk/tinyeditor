var varSection = window.location.search.substr(1);
var varArray = varSection.split("&");
for(var v=0; v<varArray.length; v++) { var keyValueArray = varArray[v].split("=");}
console.log (keyValueArray)
if(keyValueArray[0]=="input") { varValue=keyValueArray[1]; document.getElementById("input").value=varValue;}
function compile() {
	var input = document.getElementById("input");
	var code = document.getElementById("code").contentWindow.document;
    document.body.onkeyup = function(){
	    code.open();
		code.writeln(decodeURIComponent(input.value));
		code.close();
		console.log("https://tinycode.aysh.me/?input=" + encodeURIComponent(input.value))

      };
    };
compile();
