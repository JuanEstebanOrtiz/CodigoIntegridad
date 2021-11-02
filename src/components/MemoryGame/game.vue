<script>
import { ref, watch } from "vue";
import createDeck from "./createDeck";
import createGame from "./createGame";
import { launchConfetti } from "./confetti";
import Card from "./Card.vue";
import MemoryDeck from "./MemoryDeck.json";

export default {
  components: {
    Card,
  },
  setup() {
    const { cardList } = createDeck(MemoryDeck);
    const { newPlayer, startGame, restartGame, matchesFound, status } =
      createGame(cardList);
    const userSelection = ref([]);

    const flipCard = (payload) => {
      cardList.value[payload.position].visible = true;

      if (userSelection.value[0]) {
        if (
          userSelection.value[0].position === payload.position &&
          userSelection.value[0].faceValue === payload.faceValue
        ) {
          return;
        } else {
          userSelection.value[1] = payload;
        }
      } else {
        userSelection.value[0] = payload;
      }
    };

    watch(matchesFound, (currentValue) => {
      if (currentValue === 10) {
        launchConfetti();
      }
    });

    watch(
      userSelection,
      (currentValue) => {
        if (currentValue.length === 2) {
          const cardOne = currentValue[0];
          const cardTwo = currentValue[1];

          if (cardOne.faceValue === cardTwo.faceValue) {
            cardList.value[cardOne.position].matched = true;
            cardList.value[cardTwo.position].matched = true;
          } else {
            setTimeout(() => {
              cardList.value[cardOne.position].visible = false;
              cardList.value[cardTwo.position].visible = false;
            }, 2000);
          }

          userSelection.value.length = 0;
        }
      },
      { deep: true }
    );

    return {
      cardList,
      flipCard,
      userSelection,
      status,
      restartGame,
      startGame,
      newPlayer,
    };
  },
};
</script>

<template>
  <div>
    <h1 class="sr-only">Juego De Memoria</h1>
    <img
      src="/img/escudo.png"
      alt="Juego-de-Memoria"
      class="title"
      style="height: 20%"
    />
    <section class="description">
      <p>Bienvenido al Juego De Memoria</p>
      <p>A card matching game poered by Vue.js 3!</p>
    </section>
    <transition-group tag="secton" class="game-board" name="shuffle-card">
      <Card
        v-for="card in cardList"
        :key="`${card.value}-${card.variant}`"
        :matched="card.matched"
        :value="card.value"
        :visible="card.visible"
        :position="card.position"
        @select-card="flipCard"
      />
    </transition-group>
    <h2 class="status">{{ status }}</h2>
    <button v-if="newPlayer" @click="startGame" class="button">
      <img src="/img/play.svg" alt="Restart Icon" /> Start Game
    </button>
    <button v-else @click="restartGame" class="button">
      <img src="/img/restart.svg" alt="Restart Icon" /> Restart Game
    </button>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

h1 {
  margin-top: 0;
}

.title {
  padding-bottom: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("/images/neiva.png");
  background-size: 33%;
  background-color: rgb(27, 29, 165);
  height: 201vh;
  color: #fff;
  padding-top: 60px;
}

.description {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.description p {
  margin: 0;
  font-size: 1.2rem;
}

.description p:last-child {
  margin-bottom: 30px;
}

.status {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.button {
  background-color: green;
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1.2rem;
  border: 0;
  border-radius: 10px;
}

.button img {
  padding-right: 10px;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(5, 150px);
  grid-template-rows: repeat(5, 150px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
}

.shuffle-card-move {
  transition: transform 0.8s ease-in;
}
</style>
