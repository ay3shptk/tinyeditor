var varSection = window.location.search.substr(1);
var varArray = varSection.split("&");
for(var v=0; v<varArray.length; v++) { var keyValueArray = varArray[v].split("=");}
console.log (keyValueArray)
if(keyValueArray[0]=="input") { varValue=decodeURIComponent(keyValueArray[1]); document.getElementById("input").value=varValue;}
if(keyValueArray[2]=="style") { varValue=decodeURIComponent(keyValueArray[3]); document.getElementById("style").value=varValue;}
if(keyValueArray[4]=="script") { varValue=decodeURIComponent(keyValueArray[5]); document.getElementById("script").value=varValue;}
function compile() {
	var input = document.getElementById("input");
	var code = document.getElementById("code").contentWindow.document;
	code.open();
	code.writeln("<style>" + style.value + "</style><script>" + script.value + "</script>" + input.value );
	code.close();
    document.body.onkeyup = function(){
		code.open();
		code.writeln("<style>" + style.value + "</style><script>" + script.value + "</script>" + input.value );
		code.close();
      };
    };
compile();

document.getElementById("download").addEventListener("click", function(){
    var filename = "tinyedit.html";
    download(filename, "<style>" + style.value + "</style><script>" + script.value + "</script>" + input.value);
}, false);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("<style>" + style.value + "</style><script>" + script.value + "</script>" + input.value));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
