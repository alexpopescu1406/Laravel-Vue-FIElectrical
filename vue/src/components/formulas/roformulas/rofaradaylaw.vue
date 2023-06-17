<template>
  <div class="container text-2xl pl-96 pr-96 font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div class="row pl-12 pr-12 pt-4 pb-4">
      <div class="col-md">
      <div id="faraday-law-calculator">
        <div id="tool-form">
          <div class="form-group">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <label class="control-label">Numărul de spire (N):</label>
              </div>
              <div class="col-sm-6 col-xs-12">
                <input v-model="nrTurns.value" @input="checkNrOfInputs(nrTurns)"
                       :disabled="disableInput(nrTurns)" :type="this.valoareCalculata == nrTurns
                       ? 'text' : 'number'"
                       class="rounded-pill form-control bg-blue-500 mb-4 text-center" />
              </div>
              <div class="col-sm-2"></div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <label class="control-label">Fluxul magnetic variabil (dΦ):</label
                >
              </div>
              <div class="col-sm-6 col-xs-12">
                <input v-model="changeInMagneticFlux.value" @input="checkNrOfInputs(changeInMagneticFlux)"
                       :disabled="disableInput(changeInMagneticFlux)" :type="this.valoareCalculata == changeInMagneticFlux
                       ? 'text' : 'number'"
                       class="rounded-pill form-control bg-blue-500 mb-4 text-center" />
              </div>
              <div class="col-sm-2">
                <select v-model="changeInMagneticFlux.unit" class="form-control text-center">
                  <option v-for="unit in changeInMagneticFluxUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <label class="control-label">Timp (dt):</label>
              </div>
              <div class="col-sm-6 col-xs-12">
                <input v-model="time.value" @input="checkNrOfInputs(time)" :disabled="disableInput(time)"
                       :type="this.valoareCalculata == time ? 'text' : 'number'"
                       class="rounded-pill form-control mb-4 text-center" />
              </div>
              <div class="col-sm-2">
                <select v-model="time.unit" class="text-center form-control">
                  <option v-for="unit in timeUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-4 col-xs-12 mb-4">
                <label class="control-label">Forța electromotoare indusă (ϵ):</label>
              </div>
              <div class="col-sm-6 col-xs-12 mb-4">
                <input v-model="inducedEMF.value" @input="checkNrOfInputs(inducedEMF)"
                       :disabled="disableInput(inducedEMF)" :type="this.valoareCalculata == inducedEMF
                       ? 'text' : 'number'"
                       class="rounded-pill form-control mb-2 text-center mb-4" />
              </div>
              <div class="col-sm-2 mb-4">
                <select v-model="inducedEMF.unit" class="text-center form-control">
                  <option v-for="unit in inducedEMFUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-xs-12 mb-4">
            <div class="form-group">
              <button :disabled="disabled" @click="calculate" class="btn btn-primary">
                Calculează
              </button>
              <button @click="resetInputs" class="btn btn-primary">
                Resetează
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="container pl-96 pr-96">
    <p class="text-xl">
      Acest calculator este conceput special pentru a ajuta la înțelegerea forței și tensiunii produse de un câmp magnetic variabil care înconjoară o buclă închisă.
      Aveți posibilitatea de a introduce orice combinație de trei din cele patru variabile:
    </p>
    <ul class="text-xl">
      <li>Numărul de spire</li>
      <li>Fluxul magnetic variabil</li>
      <li>Perioada de timp</li>
      <li>Forța electromotoare</li>
    </ul>
    <p class="text-xl">De aici, calculatorul va afișa valoarea celei de a patra variabile.
    </p>
    <p class="text-3xl font-extrabold">Legea lui Faraday
    </p>
    <p class="text-xl">Legea lui Faraday a inducției electromagnetice spune că orice modificare a unui câmp magnetic va avea loc, va
      induce o forță electromotoare într-o bobină conductivă care este direct proporțională cu rata de modificare a câmpului magnetic inductor.
      Această forța electromotoare (EMF), măsurată în volți, va crea, de asemenea, un flux de curent.
      Ecuația lui Faraday ne spune doar magnitudinea EMF, nu polaritatea:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula" />
    </div>
    <p class="text-xl">Unde:</p>
    <ul class="text-xl">
      <li>ε = forța electromotoare, în volți</li>
      <li>N = numărul de spire</li>
      <li>dθ = fluxul magnetic variabil în timp, în weberi</li>
      <li>dt = timpul în care s-a produs schimbarea fluxului, în secunde</li>
    </ul>
    <p class="text-3xl font-extrabold">Legea lui Lenz
    </p>
    <p class="text-xl">
      Pentru a determina polaritatea EMF indusă, trebuie să ne întoarcem la legea lui Lenz care afirmă că atunci când se schimbă
      câmpul magnetic, acesta induce un curent într-o bobină conducătoare, curent indus ce va genera un câmp magnetic
      care se opune câmpului magnetic inductor.
      <br><br>Când polul nord al magnetului din figura de mai sus se deplasează mai aproape sau mai departe de buclă,
      va fi creat o EMF cu polaritate astfel încât curentul indus în buclă va crea un câmp magnetic
      care se opune câmpului magnetic variabil de la magnet.
      Punând împreună ecuația lui Faraday (magnitudinea) și ecuația lui Lenz (polaritatea), obținem următoarele:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center mb-12">
      <vue-mathjax  :formula="formula1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "faradaylaw",
  data() {
    return {
      inputValues: [],
      valoareCalculata: null,
      nrTurns: { value: null, unit: 1 },
      changeInMagneticFlux: { value: null, unit: 1 },
      time: { value: null, unit: 1 },
      inducedEMF: { value: null, unit: 1 },
      nrOfLoops: "",
      timeUnit: "sec",
      magneticField: "",
      inducedVoltage: "",
      magneticFlux: "",
      formula: '$$\\epsilon = N \\frac{d\\theta}{dt}$$',
      formula1: '$$\\epsilon = -N \\frac{d\\theta}{dt}$$',
    }
  },
  computed: {
    changeInMagneticFluxUnits() {
      return [
        {value: 1e6, text: "MWb"},
        {value: 1e3, text: "kWb"},
        {value: 1, text: "Wb"},
        {value: 0.001, text: "mWb"},
        {value: 1e-6, text: "uWb"},
      ];
    },
    inducedEMFUnits() {
      return [
        {value: 1e6, text: "MV"},
        {value: 1e3, text: "kV"},
        {value: 1, text: "V"},
        {value: 0.001, text: "mV"},
        {value: 1e-6, text: "uV"},
        {value: 1e-9, text: "nV"},
        {value: 1e-12, text: "pV"},
      ];
    },
    timeUnits() {
      return [
        {value: 3600, text: "hr"},
        {value: 60, text: "min"},
        {value: 1, text: "s"},
        {value: 0.001, text: "ms"},
        {value: 1e-6, text: "us"},
        {value: 1e-9, text: "ns"},
        {value: 1e-12, text: "ps"},
      ];
    },
    disabled() {
      return 3 != this.inputValues.length;
    },
  },
  methods: {
    checkNrOfInputs(inputParam) {
      if (null == inputParam.value || "" == inputParam.value) {
        if ((null != this.valoareCalculata && (this.inputValues.push(this.valoareCalculata), (this.valoareCalculata = null)),
          this.inputValues.includes(inputParam))) {
          var t = this.inputValues.indexOf(inputParam);
          -1 !== t && this.inputValues.splice(t, 1);
        }
      } else this.inputValues.includes(inputParam) || (this.inputValues.length < 4 || ((this.inputValues[0].value = null),
        this.inputValues.shift()), this.inputValues.push(inputParam));
    },
    disableInput(inputParam) {
      return (("" == inputParam.value || null == inputParam.value) && this.inputValues.length >= 3) ||
        (inputParam == this.valoareCalculata && this.inputValues.length >= 3);
    },
    resetInputs() {
        (this.nrTurns.value = null),
        (this.changeInMagneticFlux.value = null),
        (this.time.value = null),
        (this.inducedEMF.value = null),
        (this.inputValues = []),
        (this.valoareCalculata = null);
    },
    calculate() {
      (null != this.nrTurns.value && "" != this.nrTurns.value && this.valoareCalculata != this.nrTurns) ||
      ((this.nrTurns.value = this.formatOutput(
        Math.abs((this.inducedEMF.value * this.inducedEMF.unit * (this.time.value * this.time.unit)) /
          (this.changeInMagneticFlux.value * this.changeInMagneticFlux.unit)) / this.nrTurns.unit
      )),
        (this.valoareCalculata = this.nrTurns)),

      (null != this.changeInMagneticFlux.value && "" != this.changeInMagneticFlux.value && this.valoareCalculata
        != this.changeInMagneticFlux) ||
      ((this.changeInMagneticFlux.value = this.formatOutput(
        (-this.inducedEMF.value * this.inducedEMF.unit * (this.time.value * this.time.unit)) /
        (this.nrTurns.value * this.nrTurns.unit) / this.changeInMagneticFlux.unit
      )),
        (this.valoareCalculata = this.changeInMagneticFlux)),

      (null != this.time.value && "" != this.time.value && this.valoareCalculata != this.time) ||
      ((this.time.value = this.formatOutput(
        Math.abs((this.nrTurns.value * this.nrTurns.unit * (this.changeInMagneticFlux.value *
          this.changeInMagneticFlux.unit)) / (this.inducedEMF.value * this.inducedEMF.unit)) /
        this.time.unit
      )),
        (this.valoareCalculata = this.time)),

      (null != this.inducedEMF.value && "" != this.inducedEMF.value && this.valoareCalculata != this.inducedEMF) ||
      ((this.inducedEMF.value = this.formatOutput(
        (this.nrTurns.value * this.nrTurns.unit * -1 * ((this.changeInMagneticFlux.value *
          this.changeInMagneticFlux.unit) / (this.time.value * this.time.unit))) /
        this.inducedEMF.unit
      )),
        (this.valoareCalculata = this.inducedEMF));
    },
    formatOutput(outputParam) {
      return isNaN(outputParam) || "" == outputParam || null == outputParam ? outputParam : parseFloat(outputParam.toFixed(5));
    },
    round(a) {
      return a.toFixed(20).match(/^-?\d*\.?0*\d{0,4}/)[0];
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
