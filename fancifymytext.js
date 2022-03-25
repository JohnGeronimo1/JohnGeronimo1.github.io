function fontFunction(){
    var element = document.getElementById("textarea");
    element.style.fontSize = "24px";
}
function handleChange1(){
    var element = document.getElementById("textarea");
    element.style.fontWeight = "bold";
    element.style.color="blue";
    element.style.textDecoration="underline";
}
function handleChange2(){
    var element = document.getElementById("textarea");
    element.style.fontWeight = "normal";
    element.style.color="black";
    element.style.textDecoration="";
}
function alertFunction(){
    alert("alert");
}
function mooFunction(){
    let text = document.getElementById("textarea").value;
    var punctuation = text.charAt(text.length-1);
    var parts = text.split(" ");
    var lastElement = parts[parts.length-1];
    lastElement = lastElement.substring(0,lastElement.length-1);
    lastElement += "_Moo" + punctuation;
    parts[parts.length-1] = lastElement;
    text = parts.join("_");
    document.getElementById("textarea").value = text.toUpperCase();
}