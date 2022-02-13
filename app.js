// https://v3.ja.vuejs.org/examples/todomvc.html#todomvc
// localStorage persistence
const STORAGE_KEY = "SakeBreakDownStrage";
const drinksStorage = {
  fetch() {
    const drinks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    // drinks.forEach((drink, index) => {
    //   drink.id = index;
    // });
    drinksStorage.uid = drinks.length;
    return drinks;
  },
  save(drinks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drinks));
  }
};

// vue.jsの設定関係
var app = new Vue({
  el: '#app',
  data: {
    concentration: 0,
    alcohol: 0,
    volume: 0,
    weight: 0,
    drinks: drinksStorage.fetch(),
    seq: 0,
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    commit: function () {
      this.alcohol = this.volume * 0.01 * this.concentration
      this.hour = this.alcohol / 4
    },
    addDrink: function () {
      let drink = {
        id: this.seq,
        concentration: this.concentration,
        volume: this.volume
      }
      this.drinks.push(drink)
    },
    calc: function () {
      let sum = 0
      for (const drink of this.drinks) {
        sum += drink.volume * 0.01 * drink.concentration
      }
      this.alcohol = sum
      this.hour = this.alcohol / 4
    },
    clear: function () {
      this.drinks = []
    },
    setConcentration5: function () {
      this.concentration = 5
    },
    setConcentration12: function () {
      this.concentration = 12
    },
    setConcentration16: function () {
      this.concentration = 16
    },
    setConcentration40: function () {
      this.concentration = 40
    },
    setVolume200: function () {
      this.volume = 200
    },
    setVolume350: function () {
      this.volume = 350
    },
    setVolume700: function () {
      this.volume = 700
    },
    setVolume180: function () {
      this.volume = 180
    },
  },
  computed: {
    hour: function () {
      let sum = 0
      for (const drink of this.drinks) {
        sum += drink.volume * 0.01 * drink.concentration
      }
      return sum / 4
    }
  },
  // watch todos change for localStorage persistence
  watch: {
    drinks: {
      handler(drinks) {
        drinksStorage.save(drinks);
      },
      deep: true
    }
  },
});