<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Juego De Crucigrama</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'"><sup>1</sup>c</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">o</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'">a</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">m</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'">i</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'justicia'"><sup>3</sup>j</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">p</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'">c</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'justicia'">u</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">r</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'">n</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'justicia'">s</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">o</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'respecto'"><sup>2</sup> r</td>
            <td class="'diligencia' 'respecto'">e</td>
            <td class="'respecto'">s</td>
            <td class="'respecto'">p</td>
            <td class="'respecto'">e</td>
            <td class="'respecto'">c</td>
            <td class="'respecto' 'justicia'">t</td>
            <td class="'respecto'">o</td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">m</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'">g</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'justicia'">i</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">i</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'">i</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'justicia'">c</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="'compromiso'">s</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'">l</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'justicia'">i</td>
            <td></td>
          </tr>
          <tr>
            <td class="'honestidad'"><sup>1</sup>h</td>
            <td class="'compromiso' 'honestidad'">0</td>
            <td class="'honestidad'">n</td>
            <td class="'honestidad'">e</td>
            <td class="'honestidad'">s</td>
            <td class="'honestidad'">t</td>
            <td class="'honestidad' 'diligencia'">i</td>
            <td class="'honestidad'">d</td>
            <td class="'honestidad'">a</td>
            <td class="'honestidad'">d</td>
            <td></td>
            <td class="'justicia'">a</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="'diligencia'"><sup>2</sup>d</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Horizontal</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table>
          <thead>
            <tr>
              <td style="color: black" colspan="3">#</td>
              <td style="color: black" colspan="3">Preguntas</td>
              <td style="color: black" colspan="3">RTA</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in horizontal" :key="item.id">
              <td style="color: black" colspan="3">
                {{ item.id }}
              </td>
              <td style="color: black" colspan="3">
                {{ item.pregunta }}
              </td>
              <td colspan="3" class="p-2">
                <v-btn
                  style="background: black; color: white"
                  @click="openModal()"
                >
                  Responder
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Vertical</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table>
          <thead>
            <tr>
              <td style="color: black" colspan="3">#</td>
              <td style="color: black" colspan="3">Preguntas</td>
              <td style="color: black" colspan="3">RTA</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in vertical" :key="item.id">
              <td style="color: black" colspan="3">
                {{ item.id }}
              </td>
              <td style="color: black" colspan="3">
                {{ item.pregunta }}
              </td>
              <td colspan="3" class="p-2">
                <v-btn
                  style="background: black; color: white"
                  @click="openModal()"
                >
                  Responder
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
    <!--<v-row>
      <v-col>
        <div class="content">
            <form action="javascript:null">
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-question"></i>
                </div>
                <div>
                  <h5>Ingresar Palabra</h5>
                  <input type="text" class="input" />
                </div>
              </div>
              <button @click="checkAnswer()">Ingresar Respuesta</button>
              <input
                type="submit"
                class="btn"
                @click="checkAnswer()"
                value="Ingresar Respuesta"
              />
            </form>
          </div>
      </v-col>
    </v-row>-->
    <div data-app>
      <v-row justify="center">
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <v-card>
            <form action="javascript:null">
              <v-card-title>Ingresa tu Respuesta</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 50px">
                <input type="text" placeholder="Digitar la Respuesta" />
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn style="background: black; color: white" text @click="dialog = false">
                  Cerrar
                </v-btn>
                <v-btn style="background: black; color: white" text @click="checkAnswer()">
                  Enviar
                </v-btn>
              </v-card-actions>
            </form>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      horizontal: [
        {
          id: 1,
          pregunta: "pregunta 1",
          respuesta: "honestidad",
        },
        {
          id: 2,
          pregunta: "pregunta 2",
          respuesta: "respecto",
        },
        {
          id: 3,
          pregunta: "pregunta 3",
        },
      ],
      RHorizontal: [
        {
          respuesta: "",
        },
      ],
      vertical: [
        {
          id: 1,
          pregunta: "pregunta 1",
          respuesta: "compromiso",
        },
        {
          id: 2,
          pregunta: "pregunta 2",
          respuesta: "diligencia",
        },
        {
          id: 3,
          pregunta: "pregunta 3",
          respuesta: "justicia",
        },
      ],
    };
  },
  methods: {
    checkAnswer: function () {
      let answer = "'" + document.querySelector("input").value + "'";
      for (let node of document.querySelectorAll("td")) {
        if (node.className.indexOf(answer) >= 0) {
          node.style = "color: black;";
        }
      }
      document.querySelector("input").value = "";
    },
    validate: function () {
      alert(this.RHorizontal.respuesta);
    },
    openModal: function () {
      this.dialog = true;
    },
  },
};
</script>

<style>
/*


form{
	width: 360px;
}

.input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.i{
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
}

.i i{
	transition: .3s;
}

.input-div > div{
  position: relative;
	height: 45px;
}

.input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #999;
	font-size: 18px;
	transition: .3s;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #38d39f;
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div.focus div h5{
	top: -5px;
	font-size: 15px;
}

.input-div.focus .i i{
	color: #38d39f;
}

.input-div.one{
  margin-top: 0;
}

.input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'poppins', sans-serif;
}

.input-div.pass{
	margin-bottom: 4px;
}

.btn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
}
.btn:hover {
  background-position: right;
}

@media screen and (max-width: 1050px){
	.container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){
	form{
		width: 290px;
	}
}

@media screen and (max-width: 900px){
	.container{
		grid-template-columns: 1fr;
	}

	.content{
		justify-content: center;
	}
}
*/
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 50%;
  height: 50%;
  margin: auto;
}

.simple-table {
  border-collapse: collapse;
  width: 10%;
  height: 10%;
  margin: auto;
}

td {
  border: 1px solid black;
  width: 38px;
  height: 38px;
  text-align: center;
  color: white;
}

td:empty {
  background: black;
}

sup {
  color: black;
  position: absolute;
}
</style>