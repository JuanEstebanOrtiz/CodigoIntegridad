<template>
  <body>
    <div id="app" class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <h3 class="text-center text-info">JUEGO DE AHORCADO</h3>
          <ul id="horizontal-list">
            <button v-for="items in palabra_escrita" :key="items" type="button" class="btn btn-primary cuadro">
              <span class="badge">{{items}}</span>
            </button>
          </ul>
        </div>
        <div class="container text-center">
          <div class="col-sm-12">
            <span>{{palabra_generada}}</span>
            <span v-for="(letra, index) in letras" :key="index">
              <!--<button @click="comparar(letra, index)"--> 
              <button type="submit" @click="comparar(letra, index)" 
                v-bind:disabled="botones[index]" 
              >
                {{letra}}
              </button>
            </span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-8 col-sm-8 col-md-8">

        </div>
        <div class="co-xs-4 col-sm-4 col-md-4">
          <label for="">ACIERTOS</label>
          <input type="text" class="form-control" v-model="contador_aciertos">
          <label for="">ERRORES</label>
          <input type="text" class="form-control" v-model="contador_errores">
          <!--<button v-on:click="generarAleatorio">Nuevo Juego</button>-->
          <button type="submit" @click="recargar()">Nuevo Juego</button>
        </div>
      </div>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </body>
</template>

<script>
export default {
  name: "GameAhorcado",
  data: function(){
    this.game=true,
    this.win=false,
    this.lost=false,
    this.contador_aciertos=0,
    this.contador_errores=0,
    this.aleatorio=0,
    this.palabra_escrita=[],
    this.botones=[],
    this.letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    this.frutas=['manzana','cereza','mora','naranja']
  },
  methods: {
    recargar: function(){
      location.reload();
    }, 
    generarAleatorio:function(){
      this.game=true,
      this.win=false,
      this.lost=false,
      this.palabra_escrita=[],
      this.botones=[],
      this.contador_aciertos=0,
      this.contador_errores=0,
      this.aleatorio = Math.floor(Math.random()*this.frutas.length)
      for(var i = 0; i<this.frutas[this.aleatorio].length;i++){
        this.palabra_escrita.push('')
      }
    },
    comparar: function(letra, index){
      alert("esta es la letra " + letra + " esta es la posicion "+ index)
      if(this.game){
        
        this.botones[index]=true
        for(var i=0;i<= this.palabra_generada.length;i++){
          if(letra.toLowerCase()==this.palabra_generada[i]){
            this.palabra_escrita[i] = letra
            
            this.contador_aciertos++
          } 
        }
        
      }
    }
    
  },
  computed: {
    palabra_generada: function(){
      return this.frutas[this.aleatorio]
    }
  },
  created:function() {
    this.generarAleatorio()
  }
};
</script>

<style>
html{
  background-color: white;
}
#app {
  background-color: #cecece;
  border: 4px solid green;
  border-radius: 5px;
  padding-top: 10px;
}

.teclado{
  margin-top: 5px;
  margin-left: 4px;
  width: 35px;
  display: inline-grid;
  border: 2px solid green;
  border-radius: 100px;
  background-color: #ebf5fb;
  text-align: center;
  cursor: pointer;
}

ul#horizontal-list li {
  display: inline;
}

ul#horizontal-list button {
  margin-left: 10px;
  width: 40px;
}

.cuadro {
  width: 30px;
  margin-left: 4px;
  border: 4px solid #CC6600;
  border-radius: 5px;
  background: white;
  color: blue;
  height: 30px;
  text-align: center;
  padding-top: 3px;
  padding-left: 3px;
  font-size: 1em;
}

.rojo{
  background-color: red;
}

.verde{
  background-color: green;
}

</style>