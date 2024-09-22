const header = document.querySelector('h1');
const paragraph = document.querySelector('p:nth-child(2)');
const image = document.querySelector('#main-image');
const noteOutput = document.querySelector('.output');
const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');


header.classList.add('crazy');

header.style.textDecoration = "underline";

//image.setAttribute('src', 'https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

//insert a new article element into the output section

noteOutput.insertAdjacentHTML('beforeend', `
    <article>
        <h2>New note text</h2>
        <p>Added On: 9/20/2024</p>
    </article>
`);

//timers

//setTimeout(function() {
//console.log('time up!');  
//}, 10000); 

let count = 10;
let started = false;






timerBtn.addEventListener('click', function() {
    if (!started) {
    const timer = setInterval(function () {
        count--;
    
        timerDisplay.innerText = 'Time: ' + count;
    
        if (count <= 0) {
            clearInterval(timer);

            timerDisplay.innerText = 'Time: 10';
            count = 10;
            started = false;
        }
    }, 1000);

    started = true;
}

started = false;
});



