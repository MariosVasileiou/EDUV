Blockly.Blocks['�����������'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('�����������');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(160);
    }
};
Blockly.Python['�����������'] = function (block) {
    var code = 'from salute import salute\nsalute()\n';
    return code;
};
Blockly.JavaScript['�����������'] = function (block) {
    var msg = '�����������';
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

Blockly.Blocks['��������'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('��������')
            .appendField('���:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('������������');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(260);
    }
};
Blockly.Python['��������'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'import time \ntime.sleep(' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['��������'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = '��������(' + msg + ');\n';
    return code;
};

Blockly.Blocks['������'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('������');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(320);
    }
};
Blockly.Python['������'] = function (block) {
    var code = 'from dance2 import dance2\ndance2()\n';
    return code;
};
Blockly.JavaScript['������'] = function (block) {
    var msg = '������';
    var code = 'alert(' + msg + ');\n';
    return code;
};

Blockly.Blocks['�������'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('�������')
            .appendField('���:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('������������');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(20);
    }
};
Blockly.Python['�������'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'from go_forward_seconds import go_forward_seconds\ngo_forward_seconds(50,50,' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['�������'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = '�������(' + msg + ');\n';
    return code;
};


Blockly.Blocks['������ �����'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('������ �����')
            .appendField('���:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('������������');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(20);
    }
};
Blockly.Python['������ �����'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'from go_forward_seconds import go_forward_seconds\ngo_forward_seconds(50,-50,' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['������ �����'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = '�����������(' + msg + ');\n';
    return code;
};

Blockly.Blocks['������ ��������'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('������ ��������')
            .appendField('���:')
            .appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
            .appendField('������������');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(20);
    }
};
Blockly.Python['������ ��������'] = function (block) {
    var var1 = block.getFieldValue('seconds');
    var code = 'from go_forward_seconds import go_forward_seconds\ngo_forward_seconds(-50,50,' + var1 + ')\n';
    return code;
};
Blockly.JavaScript['������ ��������'] = function (block) {
    var msg = block.getFieldValue('seconds');
    var code = '��������������(' + msg + ');\n';
    return code;
};