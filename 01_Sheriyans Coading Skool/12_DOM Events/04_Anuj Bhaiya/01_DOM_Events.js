// box-1  (By using event handler => direct html me)
function myClick(){
    console.log('I was clicked');
}

// box-2 (By using event handler)
 const mouseOver = () =>{
    console.log('mouse over on Box-2');
}


// form wale me
function keyPressEvent(){
    console.log('key was pressed');
}

function keyUpEvent(){
    console.log('key Up was pressed');
}

function keyDownEvent(){
    console.log('key Down was pressed');
}


// By Using  (addEvent listeners)
const box3 = document.getElementById('box-3')
box3.addEventListener('click', (ev)=>{
    console.log('event object',ev);
})


// box-4 pe 
const box4 = document.getElementById('box-4')
box4.addEventListener('click', () =>{
    console.log('Click by Events No 1');
}) 
                                            
box4.addEventListener('click', () =>{
    console.log('Click by Events No 2');
})

box4.addEventListener('mousemove', (e) =>{
    console.log('mouse Move', e.clientX, e.clientY);
})



// 2nd wala input par 
const inputKey = document.getElementById('keyInput')
inputKey.addEventListener('keypress', (e) => {
    console.log('keypress', e.key);
})

inputKey.addEventListener('keydown', (e) => {
    console.log('keydown', e.key);
})

inputKey.addEventListener('focus', (e)=>{
   console.log('focus', e);
})



// Notes: bubbling me pahle inner event phir outer event)
const box5 = document.getElementById('box-5')
box5.addEventListener('click', () => {
  console.log('clicked on Box');
})

// const container = document.getElementById('create')
// container.addEventListener('click', () =>{
//   console.log('clicked on Container');
// },)

//This is bubbling (pahle box ka Event aaega fir container kaa)


//Notes: Capture me pahle outer event(like body ke badd )phir inner event(div ya kuch vi)
const container = document.getElementById('create')
container.addEventListener('click', () =>{
  console.log('clicked on Container');
},true)
 
//capture me bracket ke last me by default false hota hai usko true krna hoga.
//Dono me se ek ko comment kregene tavi output sahi se pata chalega 