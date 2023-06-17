<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div id="wheatstone-bridge-calculator">
      <div id="tool-form">
        <h3 class="pb-4">Trebuie să introduceți totul în afară de una dintre:
          <span class="text-indigo-500">R<sub>x</sub> or V<sub>iesire</sub></span>
        </h3>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">Vintrare:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="VinValue.value" type="number" class="rounded-pill form-control mb-4 text-center"/>
            </div>
            <div class="col-sm-2">
              <select v-model="VinValue.unit" class="form-control">
                <option v-for="unit in voltageUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">R1:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="R1Value.value" type="number" class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="R1Value.unit" class="form-control">
                <option v-for="unit in ohmUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">R2:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="R2Value.value" type="number" class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="R2Value.unit" class="form-control">
                <option v-for="unit in ohmUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">R3:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="R3Value.value" type="number" class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="R3Value.unit" class="form-control">
                <option v-for="unit in ohmUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">Rx:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="RxValue.value" :disabled="disableInput(RxValue)"
                     :type="this.calculatedValue == RxValue ? 'text' : 'number'"
                     class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="RxValue.unit" class="form-control">
                <option v-for="unit in ohmUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">Viesire:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="VoutValue.value" :disabled="disableInput(VoutValue)"
                     :type="this.calculatedValue == VoutValue ? 'text' : 'number'"
                     class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="VoutValue.unit" class="form-control">
                <option v-for="unit in voltageUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="form-group">
            <button :disabled="disabled" @click="calculate" class="mb-4 mt-4 btn btn-primary">
              Calculează
            </button>
            <button @click="resetInputs" class="btn btn-primary mb-4">
              Resetează
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container pl-96 pr-96">
    <p class="text-xl"> Acest calculator poate fi folosit fie pentru a proiecta o punte Wheatstone, fie pentru a interpreta rezultatul unui senzor dintr-o punte Wheatstone.
      După cum se arată în figură, puntea Wheatstone este un circuit simplu format din două seturi de rezistențe în serie conectate în paralel.
    </p>
    <p class="text-xl">Configurația punții Wheatstone permite efectuarea de măsurători de mare precizie a rezistenței necunoscute. </p>
    <p class="text-3xl font-extrabold">Echilibrarea unui circuit de punte Wheatstone</p>
    <p class="text-xl">Acest tip de circuit este echilibrat când:</p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula" />
    </div>
    <p class="text-xl">Pentru a realiza acest echilibru, rapoartele de rezistență din circuit trebuie echilibrate:</p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula1" />
    </div>
    <p class="text-xl">
      Chiar și o mică modificare a rezistenței (R<sub>x</sub>) face ca puntea să devină dezechilibrată.
      Aceste modificări au ca rezultat o tensiune diferită de zero la V<sub>iesire</sub> polaritatea indicând dacă R<sub>x</sub>
      este mai mic sau mai mare decât valoarea echilibrată. Utilizarea unui amplificator diferenţial peste bornele V<sub>iesire</sub>
      pentru a extrage semnalul diferenţial în timp ce respinge zgomotul de mod comun face posibilă detectarea precisă a modificărilor foarte mici.
      Acest calculator fie rezolvă pentru V<sub>iesire</sub> din figura de mai sus, având dată rezistența R<sub>x</sub> sau fie rezolvă pentru rezistența
      R<sub>x</sub> fiind dată V<sub>iesire></sub>.
    </p>
    <p class="text-3xl font-extrabold">Ecuațiile punții Wheatstone folosind Legile lui Kirchhoff</p>
    <p class="text-xl">
      Pentru a afla tensiunea de ieșire, V<sub>iesire</sub>, fiind dată rezistența R<sub>x</sub>, folosim legile lui Kirchhoff pentru tensiune
      și curent pentru a ajunge la următoarea ecuație:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula2"/>
    </div>
    <p class="text-xl">Unde:</p>
    <ul class="text-xl">
      <li>V<sub>out</sub> = tensiunea de ieșire în Volți</li>
      <li>V<sub>in</sub> = tensiunea de alimentare în Volți</li>
      <li>R<sub>n</sub> = valorine rezistențelor în Ohmi</li>
    </ul>
    <p class="text-xl">
      Similar, pentru a afla R<sub>x</sub> fiind dată rezistența de iesșire V<sub>iesire</sub>,
      vom folosi legile lui Kirchhoff pentru a ajunge la ecuația:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center mb-12">
      <vue-mathjax  :formula="formula3"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "wheatstone",
  data() {
    return {
      VinValue: {value: null, unit: 1},
      R1Value: {value: null, unit: 1},
      R2Value: {value: null, unit: 1},
      R3Value: {value: null, unit: 1},
      RxValue: {value: null, unit: 1},
      VoutValue: {value: null, unit: 1},
      calculatedValue: null,
      formula: '$$V_{iesire} = 0$$',
      formula1: '$$\\frac{R_1}{R_3} = \\frac{R_2}{R_x}$$',
      formula2: '$$V_{iesire} = V_{intrare} \\centerdot (\\frac{R_x}{R_3+R_x} - \\frac{R_2}{R_1+R_2})$$',
      formula3: '$$R_{x} = \\frac{R_2 R_3 + R_3 \\centerdot(R_1+R_2) \\centerdot \\frac{V_{iesire}}{V_{intrare}}}{R_1 - (R_1+R_2) \\centerdot \\frac{V_{iesire}}{V_{intrare}}}$$',
    }
  },
  computed: {
    ohmUnits() {
      return [
        { value: 0.001, text: "mΩ" },
        { value: 1, text: "Ω" },
        { value: 1e3, text: "kΩ" },
        { value: 1e6, text: "MΩ" },
      ];
    },
    voltageUnits() {
      return [
        { value: 1e-6, text: "uV" },
        { value: 0.001, text: "mV" },
        { value: 1, text: "V" },
        { value: 1e3, text: "kV" },
      ];
    },
    disabled() {
      return !(
        null != this.VinValue.value && "" != this.VinValue.value &&
        null != this.R1Value.value && "" != this.R1Value.value &&
        null != this.R2Value.value && "" != this.R2Value.value &&
        null != this.R3Value.value && "" != this.R3Value.value &&
        ((null != this.RxValue.value && "" != this.RxValue.value) || (null != this.VoutValue.value && "" != this.VoutValue.value))
      );
    },
  },
  methods: {
    disableInput(inputParam) {
      return (
        inputParam == this.calculatedValue ||
        (null == this.calculatedValue &&
          ((inputParam == this.RxValue && null != this.VoutValue.value && "" != this.VoutValue.value) ||
            (inputParam == this.VoutValue && null != this.RxValue.value && "" != this.RxValue.value)))
      );
    },
    resetInputs() {
      (this.VinValue.value = null),
        (this.R1Value.value = null),
        (this.R2Value.value = null),
        (this.R3Value.value = null),
        (this.RxValue.value = null),
        (this.VoutValue.value = null),
        (this.calculatedValue = null);
    },
    calculate() {
      (null != this.RxValue.value && "" != this.RxValue.value && this.calculatedValue != this.RxValue) ||
      ((this.RxValue.value = this.formatOutput(
        (this.R2Value.value * this.R2Value.unit * (this.R3Value.value * this.R3Value.unit) +
          this.R3Value.value *
          this.R3Value.unit *
          (this.R1Value.value * this.R1Value.unit + this.R2Value.value * this.R2Value.unit) *
          ((this.VoutValue.value * this.VoutValue.unit) / (this.VinValue.value * this.VinValue.unit))) /
        (this.R1Value.value * this.R1Value.unit -
          (this.R1Value.value * this.R1Value.unit + this.R2Value.value * this.R2Value.unit) *
          ((this.VoutValue.value * this.VoutValue.unit) / (this.VinValue.value * this.VinValue.unit))) /
        this.RxValue.unit
      )),
        (this.calculatedValue = this.RxValue)),

      (null != this.VoutValue.value && "" != this.VoutValue.value && this.calculatedValue != this.VoutValue) ||
      ((this.VoutValue.value = this.formatOutput(
        (this.VinValue.value *
          this.VinValue.unit *
          ((this.RxValue.value * this.RxValue.unit) / (this.RxValue.value * this.RxValue.unit + this.R3Value.value * this.R3Value.unit) -
            (this.R2Value.value * this.R2Value.unit) / (this.R2Value.value * this.R2Value.unit + this.R1Value.value * this.R1Value.unit))) /
        this.VoutValue.unit
      )),
        (this.calculatedValue = this.VoutValue));
    },
    formatOutput(outputParam) {
      return isNaN(outputParam) || "" == outputParam || null == outputParam ? outputParam : parseFloat(outputParam.toFixed(4));
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
