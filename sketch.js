var bird; // hold the player object
var pipes = []; // array of Pipe objects

var score = 0;

var gameOver = false;
var setScore = false;
var highscores = [];

function setup(){
    //build the canvas
    createCanvas(400,600);
    //create a new player object
    bird = new Bird();
    //create the first pipe
    pipes.push(new Pipe());


}

function draw(){
    background(0);

    if(!gameOver) {


        //iterate through all pipes backwards to ensure no Pipes are missed
        for (var i = pipes.length - 1; i >= 0; i--) {
            pipes[i].show();
            pipes[i].update();

            if (pipes[i].hits(bird)) {
                gameOver = true;
            }


            //if pipe is off the screen remove it from the array
            if (pipes[i].offscreen()) {
                pipes.splice(i, 1);
            }
        }

        //WRITE FUNCTION TO DETERMINE IF BIRD IS OFF THE SCREEN
        //if(bird.offScreen()){
           // gameOver = true;
       // }

        bird.update();
        bird.show();

        //every x frames create another pipe
        if (frameCount % 80 == 0) {
            pipes.push(new Pipe());
        }

        if (frameCount % 5 == 0) {
            score += 5;
        }

        textSize(32);
        text('Score', 10, 30);
        text(score, 160, 30);
        fill(0, 102, 153, 51);

        highScore();
    }else{
        textSize(32);
        text('Game Over', width/2 -80 , height/2);
        text('Score:' + score, width/2 - 80, height/2 + 40);
        textSize(20);
        text('Press Spacebar to Try Again!', width/2 - 120 , height/2 + 100);
        fill(0, 102, 153, 51);
        if(setScore == false){
            highscores.push(score);
            setScore = true;
        }

        for (var i = pipes.length - 1; i >= 0; i--) {
            pipes.splice(i, 1);
        }
    }


}//draw

function highScore(){
    textSize(20);
    text('High Scores', width -120, 20);
    fill(0, 102, 153, 51);

    var y = 40;
    highscores.sort();
    for (var i = 0; i < highscores.length; i++) {
        text('Score:' + highscores[i], width -120, y);
        fill(0, 102, 153, 51);
        y += 20;
    }
}//highScore

function keyPressed() {
    if(!gameOver){
        if (key == ' '){
            bird.up();
        }
    }else{
        score = 0;
        gameOver = false;
        setScore = false;
        bird.y = height/2 - 100;
        redraw();
    }
}//keyPressed
