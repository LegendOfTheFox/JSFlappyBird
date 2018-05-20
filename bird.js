function Bird(){
    this.y = height/2 - 100;
    this.x = 64;

    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -15;

    this.show = function(){

      //  if(this.offScreen()){
           // fill(255,0,0);
      //  }else{
            fill(255);
      //  }
        ellipse(this.x, this.y, 16, 16);
    }//show

    this.up = function(){
        this.velocity += this.lift;
    }//up

    /*
    this.offScreen = function(){
        if(this.y < 0 || this.y > height){
            return true;
        }else{
            return false;
        }
    }
*/
    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;


        if(this.y > height){
            this.y = height;
            this.velocity =0;
        }

        if(this.y < 0){
            this.y = 0;
            this.velocity =0;
        }
    }//update

}//Bird