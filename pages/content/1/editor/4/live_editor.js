function update() {
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

function setupEditor() {
	ace.require("ace/ext/language_tools");
	window.editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/html");
	editor.setValue(`<!DOCTYPE html>
<html>
<body>

<h2>Tag Links</h2>
<p>HTML links didefiniskan dengan tag a:</p>

<a href="https://html-warrior.netlify.com">HTML Warrior</a>

</body>
</html>	
`, 1); //1 = moves cursor to end

	editor.getSession().on('change', function () {
		update();
	});

	editor.focus();

	editor.setOptions({
		fontFamily: "monospace",
		fontSize: "12pt",
		showLineNumbers: true,
		showGutter: true,
		vScrollBarAlwaysVisible: true,
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});

	editor.setShowPrintMargin(true);
	editor.setBehavioursEnabled(true);
}

setupEditor();
update();