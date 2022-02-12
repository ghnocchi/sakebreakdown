// vue.jsの設定関係
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        concentration: 0,
        alcohol: 0,
        volume: 0,
        weight: 0,
        hour: 0,
        drinks: [],
        seq: 0,
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        commit: function() {
            this.alcohol = this.volume * 0.01 * this.concentration
            this.hour = this.alcohol / 4
        },
        addDrink: function() {
            let drink = {
                id: this.seq,
                concentration: this.concentration,
                volume: this.volume
            }
            this.drinks.push(drink)
        },
        calc: function() {
            let sum = 0
            for (const drink in this.drinks) {
                sum += drink.volume * 0.01 * drink.concentration
            }
            this.alcohol = sum
            this.hour = this.alcohol / 4
         }
    }
});