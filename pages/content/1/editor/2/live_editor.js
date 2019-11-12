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
	editor.setValue(`<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->`, 1); //1 = moves cursor to end

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