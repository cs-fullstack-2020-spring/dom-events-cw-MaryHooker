// If you click the #1 button the title in your header should change to "1" and the background to blue. If you click the #2 button the title in your header should change to "2" and the background to red. Use classlist to change the background.

//Reference and save the first button in variable
let numberOne = document.querySelector('#one');
//Reference and save the second button in variable
let numberTwo = document.querySelector('#two');
//Reference and save the p tag in header in variable
let pHeader = document.querySelector('#zero')
//Reference and save the header tag in variable
let header = document.querySelector('#header')
//Create an event listener and call function name
numberOne.addEventListener('click', changeToLightBlue);
//Create function that changes the text of the p tag and the background color of the header
function changeToLightBlue(event){
    pHeader.innerText='1';
    //Remove the red background
    header.classList.remove('lightRed');
    //add the blue background
    header.classList.add('lightBlue');

}

//Create an event listener and call function name
numberTwo.addEventListener('click', changeToLightSalmon);
//Create function that changes the text of the p tag and the background color of the header
function changeToLightSalmon(event){
    pHeader.innerText='2';
    //remove the blue background
    header.classList.remove('lightBlue');
    //add the red background
    header.classList.add('lightRed');
}