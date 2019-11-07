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

<head>
	<style>
		table {
			font-family: arial, sans-serif;
			border-collapse: collapse;
			width: 100%;
		}

		td,
		th {
			border: 1px solid #dddddd;
			text-align: left;
			padding: 8px;
		}

		tr:nth-child(even) {
			background-color: #dddddd;
		}
	</style>
</head>

<body>

	<h2>HTML Table</h2>

	<table>
		<tr>
			<th>Company</th>
			<th>Contact</th>
			<th>Country</th>
		</tr>
		<tr>
			<td>Alfreds Futterkiste</td>
			<td>Maria Anders</td>
			<td>Germany</td>
		</tr>
		<tr>
			<td>Centro comercial Moctezuma</td>
			<td>Francisco Chang</td>
			<td>Mexico</td>
		</tr>
		<tr>
			<td>Ernst Handel</td>
			<td>Roland Mendel</td>
			<td>Austria</td>
		</tr>
		<tr>
			<td>Island Trading</td>
			<td>Helen Bennett</td>
			<td>UK</td>
		</tr>
		<tr>
			<td>Laughing Bacchus Winecellars</td>
			<td>Yoshi Tannamuri</td>
			<td>Canada</td>
		</tr>
		<tr>
			<td>Magazzini Alimentari Riuniti</td>
			<td>Giovanni Rovelli</td>
			<td>Italy</td>
		</tr>
	</table>

</body>

</html>`, 1); //1 = moves cursor to end

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

	editor.setShowPrintMargin(false);
	editor.setBehavioursEnabled(false);
}

setupEditor();
update();