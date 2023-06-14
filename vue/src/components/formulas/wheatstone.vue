<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div id="wheatstone-bridge-calculator">
      <div id="tool-form">
        <h3 class="pb-4">You must input everything except for either
          <span class="text-indigo-500">R<sub>x</sub> or V<sub>out</sub></span>
        </h3>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">Vin Value:</label>
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
              <label class="control-label">R1 Value:</label>
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
              <label class="control-label">R2 Value:</label>
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
              <label class="control-label">R3 Value:</label>
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
              <label class="control-label">Rx Value:</label>
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
              <label class="control-label">Vout Value:</label>
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
              Calculate
            </button>
            <button @click="resetInputs" class="btn btn-primary mb-4">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container pl-96 pr-96">
    <p class="text-xl"> This calculator can be used to either design a Wheatstone bridge or to interpret the
      output of a sensor within a Wheatstone bridge. As shown in Figure 1, the Wheatstone bridge is a simple circuit
      consisting of two sets of series resistors connected in parallel.
    </p>
    <p class="text-xl">The Wheatstone bridge configuration allows for high accuracy measurements of unknown resistance. </p>
    <p class="text-3xl font-extrabold">Balancing a Wheatstone Bridge Circuit</p>
    <p class="text-xl">This type of circuit is balanced when:</p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula" />
    </div>
    <p class="text-xl">To achieve this balance, the resistance ratios in the circuit must be balanced:</p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula1" />
    </div>
    <p class="text-xl">
      Even a small change in resistance (R<sub>x</sub>) causes the bridge to become unbalanced.
      These changes result in a non-zero voltage at V<sub>out</sub> with the polarity indicating if R<sub>x</sub>
      is smaller or larger than the balanced value. Utilizing a differential amplifier across the V<sub>out</sub>
      terminals to extract the differential signal while rejecting common-mode noise makes precise detection of very small changes possible.
      This calculator with either solve for V<sub>out</sub> in the figure above given the R<sub>x</sub> resistance or solve
      for the R<sub>x</sub> resistance given Vout.
    </p>
    <p class="text-3xl font-extrabold">Wheatstone Bridge Equation—Using KVL and KCL</p>
    <p class="text-xl">
      To solve for output voltage, V<sub>out</sub>, given the R<sub>x</sub> resistance, we use Kirchoff's Voltage Law (KVL)
      and Kirchoff's Current Law (KCL) to arrive at the following equation:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula2"/>
    </div>
    <p class="text-xl">Where:</p>
    <ul class="text-xl">
      <li>V<sub>out</sub> = differential voltage across the Wheatstone bridge, in volts</li>
      <li>V<sub>in</sub> = input voltage to the Wheatstone bridge,&nbsp;in volts</li>
      <li>R<sub>n</sub> = resistor values, expressed in ohms</li>
    </ul>
    <p class="text-xl">
      Similarly, to solve for R<sub>x</sub> given the output voltage V<sub>out</sub>,
      we'll use KVL and KCL to arrive at the following equation:
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
      formula: '$$V_{out} = 0$$',
      formula1: '$$\\frac{R_1}{R_3} = \\frac{R_2}{R_x}$$',
      formula2: '$$V_{out} = V_{in} \\centerdot (\\frac{R_x}{R_3+R_x} - \\frac{R_2}{R_1+R_2})$$',
      formula3: '$$R_{x} = \\frac{R_2 R_3 + R_3 \\centerdot(R_1+R_2) \\centerdot \\frac{V_{out}}{V_{in}}}{R_1 - (R_1+R_2) \\centerdot \\frac{V_{out}}{V_{in}}}$$',
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
