var varSection = window.location.search.substr(1);
var varArray = varSection.split("&");
for(var v=0; v<varArray.length; v++) { var keyValueArray = varArray[v].split("=");
if(keyValueArray[0]=="share") { varValue=decodeURIComponent(keyValueArray[1]); document.getElementById("share").value=varValue;}
}
function compile() {
	var input = document.getElementById("share");
	var code = document.getElementById("code").contentWindow.document;
	code.open();
	code.writeln(share.value);
	code.close();
    }; 
compile();
