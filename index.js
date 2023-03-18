const startQuiz = document.getElementById('start-quiz');

startQuiz.addEventListener('click', function(){
    console.log('object');
    let startCount = 3;
    const setInterValId = setInterval(() => {
        window.document.body.innerHTML = `
           <div class="w-screen h-screen flex justify-center items-center opacity-70 bg-black text-white">
           <h2 class="text-2xl">${--startCount}  S</h2>
           </div>
        `;
        if(startCount === 0){
            clearInterval(setInterValId)
            timeConsumed()
        }
       }, 1000);
})

const timeConsumed = () =>{

    const timeConsumedDiv = document.getElementById('time-consumed');

    document.body.innerHTML = `
    <header class="shadow-sm shadow-gray-200/50">
        <nav class="flex justify-between items-center w-9/12 mx-auto p-2">
            <div id="branding-logo">
                <h3 class="text-2xl font-bold">QUIZ <span class="text-green-400">HERO</span></h3>
                <p>
                    Get Ready To Quiz And Be Amazed!</p>
            </div>
            <div id="option">
                <button class="bg-green-600 p-3 px-7 rounded text-white">Blog</button>
            </div>
        </nav>
        <section class="flex justify-between items-center w-9/12 mx-auto p-2 py-7">
            <div id="branding-logo">
                <h3 class="font-thin "><span class="text-red-400">Attention!</span>  You have 60 seconds to answer 6 questions.</h3>
                <p>
                    lease keep an eye on the timer and make sure to answer all questions before time runs out.</p>
            </div>
            <div id="time-consumed">
                <h3 class="text-green-600 text-2xl font-semibold"> <span id="min-zero">0</span><span id="timer-min">0</span>:<span id="sec-zero">0</span><span id="timer-sec">0</span>sec</h3>
                <p>Time Consumed</p>
            </div>
        </section>
    </header>
    `
    timerUp()
}

const timerUp = ()=>{
    // let timeUpTag = document.getElementById('time-up');
    let timeMin = document.getElementById('timer-min');
    let timeSec = document.getElementById('timer-sec');
    let minZero = document.getElementById('min-zero');
    let secZero = document.getElementById('sec-zero');
    let setIntervalId = null;
 
    let sec = 0;
    let min = 0;
    setInterval(() => {
        sec++
        timeSec.innerText = sec;
        console.log(secZero);
        if(sec === 10){
            secZero.innerText = ''
        }else if(sec === 60){
            sec = 0;
            secZero.innerText = 0;

        }
    }, 1000);
    setInterval(() => {
        min++
        timeMin.innerText = min;
         if(min === 10){
            minZero.innerText = ''
        }
    }, 60000);
}

