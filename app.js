function CalculateFact() {
    var n =
        $('input').val();
    console.log(n);
    if (n < 0) {
        document.getElementById("result").innerHTML = " Number should be positive and greater than zero";
        return;
    }
    else if (n > 21) {
        document.getElementById("result").innerHTML = " Number should be less than 22";
        return;
    }
    else if ( ! ((typeof n )!= "number")){
        document.getElementById("result").innerHTML = " Type must be whole number";
        return;
    }

    if (n > 0 ){
        var result = fact(n);
    console.log(result);
    document.getElementById("result").innerHTML = result;
    }
}
function fact(n) {

    if (n == 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }

}