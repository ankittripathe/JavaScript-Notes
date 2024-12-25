var bulf = document.querySelector('#bulb')
var btn = document.querySelector('button')


var flag = 0;

btn.addEventListener('click', function(){
    if(flag == 0){
        bulf.style.backgroundColor = 'yellow'
        bulf.style.border = '0.5px solid black'
        console.log('Bulb is ON');
        btn.innerHTML ='OFF'
        flag = 1
    } else{
        bulf.style.backgroundColor = 'transparent'
        bulf.style.border = '0.5px solid black'
        console.log('Bulb is OFF');
        btn.innerHTML = 'ON'
        flag = 0
    }
});