
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        switch (performOperation) {
    
            case 'document.getElementById("addition")':
            let add =new Number(document.getElementById("op-one").value) +new Number(document.getElementById("op-two").value);
                    alert(add);
                    break;
                    case 'document.getElementById("substration")':
                    let sub =new Number(document.getElementById("op-one").value) - new Number(document.getElementById("op-two").value);
                    alert(sub);
                break;
                case 'document.getElementById("multiplication")':
                document.getElementById("multiplication").addEventListener("click", function() {
                    let mult =new Number(document.getElementById("op-one").value) * new Number(document.getElementById("op-two").value);
                    alert(mult);
                break;
                default:
                document.getElementById("division").addEventListener("click", function() {
                    let divi =new Number(document.getElementById("op-one").value) / new Number(document.getElementById("op-two").value);
                    alert(divi);
                }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
