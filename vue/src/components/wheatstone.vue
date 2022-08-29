<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div class="row pl-12 pr-12">
      <div class="col-md mr-36">
        <div class="mb-2 text-3xl">Knowing <span class="text-indigo-500">Vout Value</span></div>
          <label class="mb-2">Vin Value:</label>
            <input type="number" class="rounded-pill form-control bg-blue-500 mb-2 text-center" v-model="vin">
          <label class="mb-2">R1 Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r1">
          <label class="mb-2">R2 Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r2">
          <label class="mb-2">R3 Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r3">
          <label class="mb-2 text-indigo-500 ">Vout Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="vout">
          <div class="text-3xl mb-2 mt-4">Result</div>
            <button @click="calcRx" class="mb-2 btn btn-primary">Calculate</button>
            <button @click="resetInputs" class="mb-2 btn btn-primary">Reset values</button><br>
              Rx = {{ rx }}<br><br>
          </div>

      <div class="col-md mb-8">
        <div class="text-3xl mb-2"> Knowing <span class="text-indigo-500">Rx Value</span></div>
        <label class="mb-2">Vin Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="vinNew">
        <label class="mb-2">R1 Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r1New">
        <label class="mb-2">R2 Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r2New">
        <label class="mb-2">R3 Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r3New">
        <label class="mb-2 text-indigo-500 ">Rx value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="rxNew">
        <div class="text-3xl mb-2 mt-4">Result </div>
          <button @click="calcVout" class="mb-2 btn btn-primary">Calculate</button>
          <button @click="resetInputsNew" class="mb-2 btn btn-primary">Reset values</button><br>
            Vout = {{ voutNew }}
        </div>
    </div>
  </div>
  <div class="container pl-96 pr-96">
    <p class="text-xl"> This calculator can be used to either design a Wheatstone bridge or to interpret the output of a sensor within a Wheatstone bridge. As shown in Figure 1, the Wheatstone bridge is a simple circuit consisting of two sets of series resistors connected in parallel.
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
      Even a small change in resistance (R<sub>x</sub>) causes the bridge to become unbalanced. These changes result in a non-zero voltage at V<sub>out</sub> with the polarity indicating if R<sub>x</sub> is smaller or larger than the balanced value. Utilizing a differential amplifier across the V<sub>out</sub> terminals to extract the differential signal while rejecting common-mode noise makes precise detection of very small changes possible.
      This calculator with either solve for V<sub>out</sub> in the figure above given the R<sub>x</sub> resistance or solve for the R<sub>x</sub> resistance given Vout.    </p>
    <p class="text-3xl font-extrabold">Wheatstone Bridge Equation—Using KVL and KCL</p>
    <p class="text-xl">
      To solve for output voltage, V<sub>out</sub>, given the R<sub>x</sub> resistance, we use Kirchoff's Voltage Law (KVL) and Kirchoff's Current Law (KCL) to arrive at the following equation:    </p>
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
      Similarly, to solve for R<sub>x</sub> given the output voltage V<sub>out</sub>, we'll use KVL and KCL to arrive at the following equation:    </p>
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
      rx: '',
      vin: '',
      r1: '',
      r2: '',
      r3: '',
      vout: '',
      rxNew: '',
      vinNew: '',
      r1New: '',
      r2New: '',
      r3New: '',
      voutNew: '',
      formula: '$$V_{out} = 0$$',
      formula1: '$$\\frac{R_1}{R_3} = \\frac{R_2}{R_x}$$',
      formula2: '$$V_{out} = V_{in} \\centerdot (\\frac{R_x}{R_3+R_x} - \\frac{R_2}{R_1+R_2})$$',
      formula3: '$$R_{x} = \\frac{R_2 R_3 + R_3 \\centerdot(R_1+R_2) \\centerdot \\frac{V_{out}}{V_{in}}}{R_1 - (R_1+R_2) \\centerdot \\frac{V_{out}}{V_{in}}}$$',
    }
  },
  methods: {
    calcRx() {
      this.rx = this.formatOutput(
        (this.r2 * this.r3 + this.r3 * (this.r1 + this.r2) * (this.vout / this.vin))
        / (this.r1 - (this.r1 + this.r2) * (this.vout / this.vin))
      );
    },
    calcVout() {
      this.voutNew = this.formatOutput(
        (this.vinNew * ((this.rxNew / (this.r3New + this.rxNew)) - (this.r2New / (this.r1New + this.r2New))))
      );
    },
    formatOutput(e) {
      return isNaN(e) || "" == e || null == e ? e : parseFloat(e.toFixed(3));
    },
    resetInputs() {
      this.vin = null,
        this.r1 = null,
        this.r2 = null,
        this.r3 = null,
        this.rx = null,
        this.vout = null
    },
    resetInputsNew() {
      this.vinNew = null,
        this.r1New = null,
        this.r2New = null,
        this.r3New = null,
        this.rxNew = null,
        this.voutNew = null
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
