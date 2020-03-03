// If you click the #1 button the title in your header should change to "1" and the background to blue. If you click the #2 button the title in your header should change to "2" and the background to red. Use classlist to change the background.

let numberOne = document.querySelector('#one');

let numberTwo = document.querySelector('#two');

let pHeader = document.querySelector('#zero')

let header = document.querySelector('#header')

numberOne.addEventListener('click', changeToLightBlue);

function changeToLightBlue(event){
    pHeader.innerText='1';
    header.classList.add('lightBlue');

}


numberTwo.addEventListener('click', changeToLightSalmon);

function changeToLightSalmon(event){
    pHeader.innerText='2';
    header.classList.add('lightRed');
}