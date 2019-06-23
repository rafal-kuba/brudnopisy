var eightBall = {
    index: 0,
    advice: ["tak", "nie", "może", "nie ma szans"],
    shake: function() {
        this.index = this.index + 1;
        if(this.index >= this.advice.length){
            this.index = 0;
        }
    },
    look: function(){
        return this.advice[this.index];
    }
}

eightBall.shake();
console.log(eightBall.look3());

}