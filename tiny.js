function compile() {
	var input = document.getElementById("input");
	var code = document.getElementById("code").contentWindow.document;
    document.body.onkeyup = function(){
	    code.open();
		code.writeln(input.value);
		code.close();
      };
    };
compile();