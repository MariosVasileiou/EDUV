Blockly.Blocks['Χαιρετισμός'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Χαιρετισμός');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(160);
    }
};
Blockly.Python['Χαιρετισμός'] = function (block) {
    var code = 'from salute import salute\nsalute()\n';
    return code;
};
Blockly.JavaScript['Χαιρετισμός'] = function (block) {
    var msg = 'Χαιρετισμός';
    var code = 'alert(' + msg + ');\n';
    return code;
};

Blockly.Blocks['Demo'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Demo')
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(90);
    }
};
Blockly.Python['Demo'] = function (block) {
    var code = 'from demo2 import demo2\ndemo2()\n';
    return code;
};
Blockly.JavaScript['Demo'] = function (block) {
    var msg = 'Demo';
    var code = 'alert(' + msg + ');\n';
    return code;
};

Blockly.Blocks['Περίμενε'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Περίμενε')
            .appendField('Για:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('Δευτερολέπτα');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(260);
    }
};
Blockly.Python['Περίμενε'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'import time \ntime.sleep(' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['Περίμενε'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = 'Περίμενε(' + msg + ');\n';
    return code;
};

Blockly.Blocks['Χόρεψε'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Χόρεψε');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(320);
    }
};
Blockly.Python['Χόρεψε'] = function (block) {
    var code = 'from dance2 import dance2\ndance2()\n';
    return code;
};
Blockly.JavaScript['Χόρεψε'] = function (block) {
    var msg = 'Χόρεψε';
    var code = 'alert(' + msg + ');\n';
    return code;
};

Blockly.Blocks['Προχώρα'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Προχώρα')
            .appendField('Για:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('Δευτερόλεπτα');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(20);
    }
};
Blockly.Python['Προχώρα'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'from go_forward_seconds import go_forward_seconds\ngo_forward_seconds(50,50,' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['Προχώρα'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = 'Προχώρα(' + msg + ');\n';
    return code;
};


Blockly.Blocks['Στρίψε δεξιά'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Στρίψε δεξιά')
            .appendField('Για:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('Δευτερόλεπτα');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(20);
    }
};
Blockly.Python['Στρίψε δεξιά'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'from go_forward_seconds import go_forward_seconds\ngo_forward_seconds(50,-50,' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['Στρίψε δεξιά'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = 'Στρίψεδεξιά(' + msg + ');\n';
    return code;
};

Blockly.Blocks['Στρίψε αριστερά'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Στρίψε αριστερά')
            .appendField('Για:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('Δευτερόλεπτα');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(20);
    }
};
Blockly.Python['Στρίψε αριστερά'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'from go_forward_seconds import go_forward_seconds\ngo_forward_seconds(-50,50,' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['Στρίψε αριστερά'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = 'Στρίψεαριστερά(' + msg + ');\n';
    return code;
};