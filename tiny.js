var varSection = window.location.search.substr(1);
var varArray = varSection.split("&");
for(var v=0; v<varArray.length; v++) { var keyValueArray = varArray[v].split("=");
if(keyValueArray[0]=="input") { varValue=decodeURIComponent(keyValueArray[1]); document.getElementById("input").value=varValue;}
if(keyValueArray[0]=="style") { varValue=decodeURIComponent(keyValueArray[1]); document.getElementById("style").value=varValue;}
if(keyValueArray[0]=="script") { varValue=decodeURIComponent(keyValueArray[1]); document.getElementById("script").value=varValue;}
}

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
        console.log("https://tinycode.aysh.me/share.html?share=" + encodeURIComponent("<style>" + style.value + "</style><script>" + script.value + "</script>" + input.value ))
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

function newpage() {alert("This will open a new tab with your website. Feel free to copy the link and share it with anyone - the webpage is now yours, free forever."); 
window.open("https://tinycode.aysh.me/share.html?share=" + encodeURIComponent("<style>" + style.value + "</style><script>" + script.value + "</script>" + input.value ), '_blank');
}