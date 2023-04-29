function showCode() {
    var blcode = Blockly.Python.workspaceToCode(workspace);
    window.editor2.setValue(blcode);
}