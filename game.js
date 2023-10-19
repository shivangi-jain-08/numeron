// Iteration 2: Generate 2 random number and display it on the screen

//Declaring variables ----------------------------------
    var num1;
    var num2;
    var num1_box = document.getElementById("number1");
    var num2_box = document.getElementById("number2");

//Creating a function to generate random numbers 
    function generateRandom(){
            num1 = Math.floor(Math.random()*100);
            num2 = Math.floor(Math.random()*100);
            num1_box.textContent = num1;
            num2_box.textContent = num2;
    }

//Calling that function to generate random numbers
    generateRandom();


// Iteration 3: Make the options button functional

//Declaring variables for game buttons--------------------------------
    let greaterButton = document.getElementById("greater-than");
    let equalButton = document.getElementById("equal-to");
    let lesserButton = document.getElementById("lesser-than");

// Initializing value for score as 0
    var score = 0;

// Adding onclick event for game buttons
    greaterButton.onclick = () =>{
        if(num1>num2){
            score++;
            localStorage.setItem('score',score);
            generateRandom()
            clearInterval(interval)
            startInterval()
        }else{
            location.href = "./gameover.html";
        }
    }
    equalButton.onclick = () =>{
        if(num1==num2){
            score++;
            localStorage.setItem('score',score);
            generateRandom()
            clearInterval(interval)
            startInterval();
        }else{
            location.href = "./gameover.html";
        }
    }
    lesserButton.onclick = () =>{
        if(num1<num2){
            score++;
            localStorage.setItem('score',score);
            generateRandom()
            clearInterval(interval)
            startInterval();

        }else{
            location.href = "./gameover.html";
        }
    }

// Iteration 4: Build a timer for the game
    var timerBox = document.getElementById("timer")
    var timer = 5;
    let interval;

//Creating function to start the timer using setInterval
    function startInterval(){
        timer = 5;
        interval = setInterval(()=>{
            timerBox.textContent = timer;
            timer--;
    //Clearing interval when the timer value comes to 0
            if(timer==0){
                clearInterval(interval)
                location.href = "./gameover.html";
            }
        }, 1000);
    }

    console.log("score: ", score);
    startInterval();
    localStorage.setItem("score", score)














