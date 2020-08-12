new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameOn: false
    },
    methods: {
        startGame: function() {
            this.isGameOn = true,
            this.playerHealth = 100,
            this.monsterHealth = 100

        },
        attack: function() {
            this.monsterHealth -= this.calculateDamage(3, 10);
            if(this.winOrNot()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 15);
            this.winOrNot();

        },
        specialAttack: function() {
            this.monsterHealth -= this.calculateDamage(13, 20);
            if(this.winOrNot()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 15);
            this.winOrNot();
           

        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100
            }

            this.playerHealth -= this.calculateDamage(5, 15);
            this.winOrNot();


        },
        giveUp: function() {

        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        winOrNot: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You son of a Bitch, You Won!!! \nWanna go for a new game?')) {
                    this.startGame();
                } else {
                    this.isGameOn = false;
                }
                return true;
            } else if(this.playerHealth <= 0){
                if(confirm('Better luck next time bitch!!! \nWanna go for a new game?')) {
                    this.startGame();
                } else {
                    this.isGameOn = false;
                }
                return true;
            }
            return false;
        }
        
    }
});