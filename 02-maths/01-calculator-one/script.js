
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let add =new Number(document.getElementById("op-one").value) +new Number(document.getElementById("op-two").value);
        alert(add)
        
    });

    document.getElementById("substraction").addEventListener("click", function () {
        // perform a substraction
        let sub =new Number(document.getElementById("op-one").value) - new Number(document.getElementById("op-two").value);
        alert(sub)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform a multiplication
        let mult =new Number(document.getElementById("op-one").value) * new Number(document.getElementById("op-two").value);
        alert(mult)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform a division
        let divi =new Number(document.getElementById("op-one").value) / new Number(document.getElementById("op-two").value);
        alert(divi)
    });
})();
