'use strict';
// Depending on the URL argument, render as LTR or RTL.
var rtl = (document.location.search == '?rtl');
var block = null;

function start() {
  Blockly.inject(document.getElementById('blocklyDiv'), 
      {
        path: '../', 
        toolbox: document.getElementById('toolbox')
      }
  );
  Blockly.addChangeListener(renderContent);
}

function addFunctions(code){
var setup= "void setup()\t{\n"
var i;
for (i = 0; i < Blockly.cake.inputs.length; i++) {
  setup += "\tpinMode("+Blockly.cake.inputs[i] + ",INPUT)\n";
}
for (i = 0; i < Blockly.cake.outputs.length; i++) {
  setup += "\tpinMode("+Blockly.cake.outputs[i] + ",OUTPUT)\n";
}
setup+= "\n}\n";
var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
var xml_text = Blockly.Xml.domToText(xml);
//console.log(xml_text);
//console.log(Blockly.cake.outputs);
return Blockly.cake.header+setup+" void loop()\t{\n "+code+"\n}";
}

function renderContent() {
  var content = document.getElementById('code');
  var code = addFunctions(Blockly.cake.workspaceToCode());
  content.textContent = code;
  if (typeof prettyPrintOne == 'function') {
   code = content.innerHTML;
    code = prettyPrintOne(code, 'c');
    content.innerHTML = code;
  }
}

/**
 * Discard all blocks from the workspace.
 */
function discard() {
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count < 2 || window.confirm("Remove all blocks?")) {
    Blockly.mainWorkspace.clear();
    window.location.hash = '';
  }
}

/**
 * Insert terminal into page.
 * https://github.com/jcubic/jquery.terminal
 */
jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        if (command !== '') {
            var result = window.eval(command);
            if (result != undefined) {
                term.echo(String(result));
            }
        }
    }, {
        greetings: 'Cake Console Terminal',
        name: 'js_demo',
        height: 0,
        width: 0,
        prompt: 'cake> '});
});

/**
 * Save current codes into a *.c file.
 * https://github.com/eligrey/FileSaver.js
 */
function downloadCode() {
  var code = Blockly.cake.workspaceToCode();
  var codeArray = [];
  codeArray.push(code);
  console.log(code);
  var codeBlob = new Blob(codeArray, {type: "text/plain;charset=utf-8"});
  saveAs(codeBlob, "code.c");
}