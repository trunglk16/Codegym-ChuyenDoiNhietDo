function convert(val) {
    val = parseFloat(document.getElementById("number").value );
    document.getElementById("output").innerHTML = (val -32)/1.8;
}