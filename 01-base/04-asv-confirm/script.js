
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HER
    function functionData(){
        prompt("Please enter your age", "Pick");
        prompt("Please enter your gender", "Pick");
        prompt("Please enter your town", "Pick");
        alert("your data are " + age + " " + gender + " " + town)
    if (age=23) {
        alert("ok");
    }else {
        functionData();
    }
    }
    let age = prompt("Please enter your age", "Pick");
    let gender = prompt("Please enter your gender", "Pick");
    let town = prompt("Please enter your town", "Pick");
    alert("your data are " + age + " " + gender + " " + town)
    if (age=23) {
        alert("ok");
    }else {
        functionData();
    }
})();
