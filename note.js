  document.getElementById("backColor").addEventListener("click", backColor);
  document.getElementById("bold").addEventListener("click", bold);
  document.getElementById("contentReadOnly").addEventListener("click", contentReadOnly);
  document.getElementById("copy").addEventListener("click", copy);
  document.getElementById("createLink").addEventListener("click", createLink);
  document.getElementById("cut").addEventListener("click", cut);
  document.getElementById("decreaseFontSize").addEventListener("click", decreaseFontSize);
  document.getElementById("adelete").addEventListener("click", adelete);
  document.getElementById("enableInlineTableEditing").addEventListener("click", enableInlineTableEditing);
  document.getElementById("enableObjectResizing").addEventListener("click", enableObjectResizing);
  document.getElementById("fontName").addEventListener("click", fontName);
  document.getElementById("fontSize").addEventListener("click", fontSize);
  document.getElementById("foreColor").addEventListener("click", foreColor);
  document.getElementById("formatBlock").addEventListener("click", formatBlock);
  document.getElementById("forwardDelete").addEventListener("click", forwardDelete);
  document.getElementById("heading").addEventListener("click", heading);
  document.getElementById("hiliteColor").addEventListener("click", hiliteColor);
  document.getElementById("increaseFontSize").addEventListener("click", increaseFontSize);
  document.getElementById("indent").addEventListener("click", indent);
  document.getElementById("insertBrOnReturn").addEventListener("click", insertBrOnReturn);
  document.getElementById("insertHorizontalRule").addEventListener("click", insertHorizontalRule);
  document.getElementById("insertHTML").addEventListener("click", insertHTML);
  document.getElementById("insertImage").addEventListener("click", insertImage);
  document.getElementById("insertOrderedList").addEventListener("click", insertOrderedList);
  document.getElementById("insertUnorderedList").addEventListener("click", insertUnorderedList);
  document.getElementById("insertParagraph").addEventListener("click", insertParagraph);
  document.getElementById("insertText").addEventListener("click", insertText);
  document.getElementById("italic").addEventListener("click", italic);
  document.getElementById("justifyCenter").addEventListener("click", justifyCenter);
  document.getElementById("justifyFull").addEventListener("click", justifyFull);
  document.getElementById("justifyLeft").addEventListener("click", justifyLeft);
  document.getElementById("justifyRight").addEventListener("click", justifyRight);
  document.getElementById("outdent").addEventListener("click", outdent);
  document.getElementById("paste").addEventListener("click", paste);
  document.getElementById("redo").addEventListener("click", redo);
  document.getElementById("removeFormat").addEventListener("click", removeFormat);
  document.getElementById("selectAll").addEventListener("click", selectAll);
  document.getElementById("strikeThrough").addEventListener("click", strikeThrough);
  document.getElementById("subscript").addEventListener("click", subscript);
  document.getElementById("superscript").addEventListener("click", superscript);
  document.getElementById("underline").addEventListener("click", underline);
  document.getElementById("undo").addEventListener("click", undo);
  document.getElementById("unlink").addEventListener("click", unlink);
  document.getElementById("useCSS").addEventListener("click", useCSS);
  document.getElementById("styleWithCSS").addEventListener("click", styleWithCSS);

  document.getElementById("asHtml").addEventListener("click", asHtml);


function backColor() {
  var value = prompt("Eneter background colour", "#000fff");
  if (value == null) {
    value = "";
  }
  document.execCommand("backColor", false, value);
}
function bold() {
  document.execCommand("bold", false, "");
}          
function contentReadOnly() {
  alert("You can apply it only once and is permanent"); 
  document.execCommand("contentReadOnly", false, "");
}
function copy() {
  document.execCommand("copy", false, "");
}
function createLink() {
  var value = prompt("Please enter the URL", "https://ppp");
  if (value == null) {
    value = "";
  }
  document.execCommand("createLink", false, value);
}
function cut() {
  document.execCommand("cut", false, "");
}
function decreaseFontSize() {
  document.execCommand("decreaseFontSize", false, "");
}
function adelete() {
  document.execCommand("delete", false, "");
}
function enableInlineTableEditing() {
  document.execCommand("enableInlineTableEditing", false, "");
}
function enableObjectResizing() {
  document.execCommand("enableObjectResizing", false, "");
}
function fontName() {
  var value = prompt("Please enter font name", "'Inconsolata', monospace");
  if (value == null) {
    value = "";
  }
  document.execCommand("fontName", false, value);
}
function fontSize() {
  var value = prompt("Please enter font size", "24");
  if (value == null) {
    value = "";
  }
  document.execCommand("fontSize", false, value);
}
function foreColor() {
  var value = prompt("Please enter font color", "#FFF000");
  if (value == null) {
    value = "";
  }
  document.execCommand("foreColor", false, value);
}
function formatBlock() {
  var value = prompt("Please enter block quote", "h1");
  if (value == null) {
    value = "";
  }
  document.execCommand("formatBlock", false, value);
}
function forwardDelete() {
  document.execCommand("forwardDelete", false, "");
}
function heading() {
  var value = prompt("Please enter heading", "h1");
  if (value == null) {
    value = "";
  }
  document.execCommand("heading", false, value);
}
function hiliteColor() {
  var value = prompt("Please enter background colour", "#000fff");
  if (value == null) {
    value = "";
  }
  document.execCommand("hiliteColor", false, value );
}
function increaseFontSize() {
  document.execCommand("increaseFontSize", false, "");
}
function indent() {
  document.execCommand("indent", false, "");
}
function insertBrOnReturn() {
  document.execCommand("insertBrOnReturn", false, "");
}
function insertHorizontalRule() {
  document.execCommand("insertHorizontalRule", false, "");
}
function insertHTML() {
  var value = prompt("Please enter html code here", "<p>Krish<p>");
  if (value == null) {
    value = "";
  }
  document.execCommand("insertHTML", false, value);
}
function insertImage() {
  var value = prompt("Please enter url to image here", "http://www.cds-alumni.org/xoops2_4_2/uploads/photos/421.jpg");
  if (value == null) {
    value = "";
  }
  document.execCommand("insertImage", false, value);
}
function insertOrderedList() {
  document.execCommand("insertOrderedList", false, "");
}
function insertUnorderedList() {
  document.execCommand("insertUnorderedList", false, "");
}
function insertParagraph() {
  document.execCommand("insertParagraph", false, "");
}
function insertText() {
  var value = prompt("Enter new text", "Some text");
  if (value == null) {
    value = "";
  }
  document.execCommand("insertText", false, value);
}
function italic() {
  document.execCommand("italic", false, "");
}
function justifyCenter() {
  document.execCommand("justifyCenter", false, "");
}
function justifyFull() {
  document.execCommand("justifyFull", false, "");
}
function justifyLeft() {
  document.execCommand("justifyLeft", false, "");
}
function justifyRight() {
  document.execCommand("justifyRight", false, "");
}
function outdent() {
  document.execCommand("outdent", false, "");
}
function paste() {
  document.execCommand("paste", false, "");
}
function redo() {
  document.execCommand("redo", false, "");
}
function removeFormat() {
  document.execCommand("removeFormat", false, "");
}
function selectAll() {
  document.execCommand("selectAll", false, "");
}
function strikeThrough() {
  document.execCommand("strikeThrough", false, "");
}
function subscript() {
  document.execCommand("subscript", false, "");
}
function superscript() {
  document.execCommand("superscript", false, "");
}
function underline() {
  document.execCommand("underline", false, "");
}
function undo() {
  document.execCommand("undo", false, "");
}
function unlink() {
  document.execCommand("unlink", false, "");
}
function useCSS() {
  document.execCommand("useCSS", false, "");
}
function styleWithCSS() {
  document.execCommand("styleWithCSS", false, "");
}
function asHtml() {
  var s = document.getElementById("editor").innerHTML;
  var FinalText = "<!DOCTYPE html>\n";
  FinalText += "<html>\n";
  FinalText += "<head>\n";
  FinalText += "  <title>Title</title>\n";
  FinalText += "</head>\n";
  FinalText += "<body>\n";
  FinalText += s;
  var blob = new Blob([FinalText], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "Note.html");

}