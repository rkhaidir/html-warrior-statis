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

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

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