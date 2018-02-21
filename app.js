function CalculateFact() {
    var n =
        $('input').val();
        console.log(n);
    var result = fact(n);
    console.log(result);
    document.getElementById("result").innerHTML = result;
alert(result);
}
function fact(n) {

    if (n == 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }

}