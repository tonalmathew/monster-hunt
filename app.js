new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameOn: false,
        logger: []
    },
    methods: {
        startGame: function() {
            this.isGameOn = true,
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.logger = []

        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.logger.unshift({
                isPlayer: true,
                text: "player hit Monster by" + damage
            });
            if(this.winOrNot()) {
                return;
            }

            damage = this.calculateDamage(5, 15);
            this.playerHealth -= damage;
            this.logger.unshift({
                isPlayer: false,
                text: "Monster hit player by" + damage
            });
            this.winOrNot();

        },
        specialAttack: function() {
            var damage = this.calculateDamage(13, 20);
            this.monsterHealth -= damage;
            this.logger.unshift({
                isPlayer: true,
                text: "player hit Monster by" + damage
            });
            if(this.winOrNot()) {
                return;
            }

            damage = this.calculateDamage(5, 15);
            this.playerHealth -= damage;
            this.logger.unshift({
                isPlayer: false,
                text: "Monster hit player by" + damage
            });
            this.winOrNot();
           

        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100
            }

            this.playerHealth -= this.calculateDamage(5, 15);
            this.logger.unshift({
                isPlayer: false,
                text: "player Healed by 10"
            });
            this.winOrNot();


        },
        giveUp: function() {
            this.isGameOn = false;

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