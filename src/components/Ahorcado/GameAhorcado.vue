<template>
  <div id="ahorcado">
    <h1>Juego Del Ahorcado</h1>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="350px" height="260px" viewBox="0 0 350 275"
      preserveAspectRatio="xMidYMid meet">
      <line v-if="strikes > 0" x1="80" y1="257" x2="260" y2="257" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 1" x1="100" y1="257" x2="100" y2="40" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 2" x1="100" y1="40" x2="230" y2="40" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 3" x1="100" y1="80" x2="130" y2="40" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 4" x1="230" y1="40" x2="230" y2="80" style="stroke:black;fill:none;stroke-width:2px;" />
      <circle v-if="strikes > 5" cx="230" cy="90" style="fill:khaki;stroke:black;stroke-width:2px;" r="20" />
      <line v-if="strikes > 6" x1="230" y1="110" x2="230" y2="170" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 7" x1="230" y1="140" x2="250" y2="120" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 8" x1="230" y1="140" x2="210" y2="120" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 9" x1="230" y1="170" x2="250" y2="200" style="stroke:black;fill:none;stroke-width:2px;" />
      <line v-if="strikes > 10" x1="230" y1="170" x2="210" y2="200" style="stroke:black;fill:none;stroke-width:2px;" />
    </svg>
    <div>
      <div class="letter" v-for="letter in wordDisplayLetters" :key="letter">
        {{letter}}
      </div>
    </div>
    <template v-if="initialized">
      <div>
        <div @click="tryLetter(letter)" class="possibleLetter" :class="getStrikethroughClass(letter)" v-for="letter in possibleLetters" :key="letter">
          {{letter}}
        </div>
      </div>
    </template>
    <button @click="initialize()">New Game</button>
  </div>
</template>

<script>

  export default {
    name: 'ahorcado',
    data: function () {
      return {
        strikes: 12,
        word: "AHORCADO",
        wordLetters: ['A', 'H', 'O', 'R', 'C', 'A', 'D','O'],
        wordDisplayLetters: ['A', 'H', 'O', 'R', 'C', 'A', 'D','O'],
        usedLetters: [],
        possibleLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I" , "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        initialized: false,
        wordBank: ['CASA']
      }
    },
    methods: {
      initialize() {
        this.initialized = true
        this.strikes = 0
        this.word = this.getRandomWord()
        this.wordLetters = this.word.split('')
        this.wordDisplayLetters = Array(this.word.length)
        this.usedLetters = []
      },
      getRandomWord() {
        let index = Math.random() * (this.wordBank.length - 0)
        index = Math.floor(index)
        
        let word = this.wordBank[index]
        this.wordBank.splice(index, 1)

        return word
      },
      tryLetter(letter) {
        if (this.usedLetters.includes(letter)) {
          return
        }

        this.usedLetters.push(letter)
        let match = false

        const res = this.wordLetters.some((x) => x === letter);
        if(res){
          const i = this.wordLetters.findIndex((x) => x === letter)
          this.wordDisplayLetters.splice(i, 1, letter)
          match = true
        }

        if (!match) {
          this.strikes++
          console.log(strikes);
        }
      },
      getStrikethroughClass(letter) {
        if (this.usedLetters.includes(letter)) {
          return 'diagonal-strike'
        }
        return null
      }
    }
  }
</script>

<style scoped>
  #ahorcado {
    text-align: center;
  }

.letter {
  display: inline-block;
  border-bottom: 1px solid;
  margin: 0px 3px 0px 3px;
  font-size: 30px;
  min-width: 30px;
  vertical-align: bottom;
}

.possibleLetter {
  display: inline-block;
  margin: 10px 3px 0px 3px;
  font-size: 30px;
  min-width: 30px;
  cursor: pointer;
}

.diagonal-strike {
  background: linear-gradient(to left top, transparent 47.75%, currentColor 49.5%, currentColor 50.5%, transparent 52.25%);
  color: dimgrey;
}

button {
  margin-top: 20px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
}

button:hover {
    background-color: #e6e6e6;
    border-color: #adadad;
}

</style>