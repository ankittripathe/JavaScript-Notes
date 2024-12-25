/*  Constructor Function:-
    (1) normal function jisme this ka istemaal ho and aap function ko call krte waqt new keyword ka use karein.
*/

// Example.1
function saachaOfbiscuits(){
    this.width = 12; 
    this.height = 22;
    this.color = 'brown';
    this.taste = 'sugary';
}

var bis1 = new saachaOfbiscuits()
var bis2 = new saachaOfbiscuits()
var bis3 = new saachaOfbiscuits()
console.log(bis1);
console.log(bis2);
console.log(bis3);

// Notes: Jab aapko Ek jaisi properties waale bahut saare elements banaane hai us waqt aap constructor function use kar sakte hoo.

// Example.2
function circularBtnBanno(kolor){
    this.radius = 2;
    this.color = kolor;
    this.icon = false;
    this.pressable = true;
}
let redBtn = new circularBtnBanno('red')
console.log(redBtn);

let greenBtn = new circularBtnBanno('green')
console.log(greenBtn);
