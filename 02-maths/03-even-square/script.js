
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let square = (i * i);
        for (i = 1; i <= 21; i++) {
            square=(i * i);
        }
        if (square <= 21) {
            alert(square);
        }
              
 }
    });

})();
