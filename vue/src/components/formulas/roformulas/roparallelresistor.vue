<template>
  <div class="container text-2xl pl-96 pr-96 font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-12 pb-4 mb-8">
    <div id="parallel-resistance-calculator">
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 col-xs-12 mb-4">
            <label class="control-label">Numărul de rezistoare (<small>min 2 și max 20 rezistoare</small>):</label
            >
          </div>
          <div class="col-sm-6 col-xs-8">
            <input v-model="numberOfResistors" type="number" class="rounded-pill form-control bg-blue-500 mb-4 text-center" />
          </div>
          <div class="col-sm-2 col-xs-4"></div>
        </div>
      </div>
      <div v-for="(resistor, index) in addResistors" :key="index">
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label" v-html="resistorLabel(index)"></label>
            </div>
            <div class="col-sm-6 col-xs-8">
              <input v-model="resistors[index].value" type="number" class="rounded-pill form-control bg-blue-500 mb-4 text-center" />
            </div>
            <div class="col-sm-2 col-xs-4">
              (Ω)
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-3xl font-extrabold  mb-2">Rezultat</h3>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 col-xs-12">
            <label class="control-label">Rezistența Echivalentă:</label>
          </div>
          <div class="col-sm-6 col-xs-8">
            <input disabled v-model="eResistance" type="number" class="rounded-pill form-control bg-blue-500 mb-4 text-center" />
          </div>
          <div class="col-sm-2 col-xs-4">
            (Ω)
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 col-xs-12"></div>
          <div class="col-sm-6 col-xs-8 mb-4 mt-2">
            <button :disabled="disable" @click="calculate" class="btn btn-primary">
              Calculează
            </button>
            <button @click="resetInputs" class="btn btn-primary">
              Resetează
            </button>
          </div>
          <div class="col-sm-2 col-xs-4"></div>
        </div>
      </div>
    </div>
</div>
  <div class="container pl-96 pr-96">
    <div class=" text-3xl font-extrabold text-gray-900 mb-4">
      Cum se calculează rezistența echivalentă a rezistoarelor conectate în paralel
    </div>
      <p class="text-xl"> Calcularea manuală a rezistenței echivalente (Req) a rezistențelor în paralel (Figura 1) poate fi obositoare.
    </p>
    <img class="pl-72 mb-2" src="https://www.allaboutcircuits.com/uploads/articles/Parallel_Resistor_Drawing.jpg">
    <p class="italic text-center mb-4 pl-12"><b>Figura 1.</b> Schema circuitului pentru rezistențele conectate în paralel
    </p>
    <p class="text-3xl font-extrabold">Calcularea rezistenței în paralel folosind legea lui Ohm</p>
    <p class="text-xl">
      Tensiunea (V) la toate rezistențele dintr-un circuit paralel este identică.
      Acest lucru poate fi observat prin faptul că rezistențele paralele au aceleași noduri.
      Curentul prin fiecare rezistor individual, Rx, poate fi calculat folosind legea lui Ohm:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula" />
    </div>
    <p class="text-xl">
      Curentul total prin rezistențele paralele este suma curenților individuali:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula1" />
    </div>
    <p class="text-xl">
      Curentul prin fiecare rezistor individual nu se modifică atunci când adăugați rezistențe în paralel, deoarece adăugarea rezistențelor în paralel
      nu afectează tensiunea la bornele acestora. Ce se modifică este curentul total furnizat de sursa de alimentare,
      nu curentul printr-un anumit rezistor.
    </p>
    <p class="text-3xl font-extrabold">
      Formula pentru calculul rezistenței echivalente
    </p>
    <p class="text-xl">
      Din ecuația curentului total, putem deriva apoi o ecuație pentru rezistența paralelă echivalentă:    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula2"/>
    </div>
    <p class="text-xl">
      Apoi, prin simplificarea termenilor, obținem:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula3"/>
    </div>
    <p class="text-xl">
      Adesea exprimat:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula4"/>
    </div>
    <p class="text-xl">
      Când avem doar <b>două rezistoare</b> în paralel, rezistența echivalentă poate fi calculată ușor cu formula:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula5"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "parallelresistor",
  data() {
    return {
      resistors: [],
      numberOfResistors: 2,
      eResistance: null,
      formula: '$$I_x = \\frac{V}{R_x}$$',
      formula1: '$$I_{total} = I_1 + I_2 + I_3 + ... + I_n$$',
      formula2: '$$R_{eq} = \\frac{V}{I_{total}} = \\frac{V}{(\\frac{V}{R_1} + \\frac{V}{R_2} + \\frac{V}{R_3} + ... + \\frac{V}{R_n})}$$',
      formula3: '$$R_{eq} = \\frac{1}{(\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ... + \\frac{1}{R_n})}$$',
      formula4: '$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ... + \\frac{1}{R_n}$$',
      formula5: '$$R_{eq} = \\frac{R_1\\times R_2}{R_1+R_2}$$',
    }
  },
  computed: {
    addResistors() {
      (this.resistors = []),
        (this.eResistance = null),
        (this.numberOfResistors = this.numberOfResistors < 21 && this.numberOfResistors > 1 ? this.numberOfResistors
          : this.numberOfResistors < 2 ? 2 : 20);
      for (var e = 0; e < this.numberOfResistors; e++) this.resistors.push({value: ""});
      return this.resistors;
    },
    disable() {
      var e = !1;
      return (
        this.resistors.forEach(function (t) {
          (null != t.value && "" != t.value) || (e = !0);
        }),
          e
      );
    },
  },
  methods: {
    calculate() {
      var e = 0;
      this.resistors.forEach(function (t) {
        e += 1 / t.value;
      }),
        (this.eResistance = (1 / e).toFixed(3));
    },
    resistorLabel(e) {
      return "Rezistor<sub>" + (e + 1) + "</sub>";
    },
    resetInputs() {
     this.resistors = null,
     this.eResistance = null
    },
  },
}
</script>

<style scoped>
input[type=number] {
  background-color: rgb(30 41 59);
  border-color: rgb(30 41 59);
  color: white;
}
</style>
