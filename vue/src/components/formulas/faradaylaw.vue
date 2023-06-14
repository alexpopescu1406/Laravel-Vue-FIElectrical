<template>
  <div class="container text-2xl pl-96 pr-96 font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div class="row pl-12 pr-12 pt-4 pb-4">
      <div class="col-md">
      <div id="faraday-law-calculator">
        <div id="tool-form">
          <div class="form-group">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <label class="control-label">Number of Turns (N):</label>
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
                <label class="control-label">Change in Magnetic Flux (dΦ):</label
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
                <label class="control-label">Time (dt):</label>
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
                <label class="control-label">Induced EMF (ϵ):</label>
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
                Calculate
              </button>
              <button @click="resetInputs" class="btn btn-primary">
                Reset
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
      This calculator is specifically designed to assist in comprehending the force and voltage produced by a fluctuating magnetic field surrounding a closed loop.
      You have the flexibility to input any combination of three out of the four variables:
    </p>
    <ul class="text-xl">
      <li>The number of turns of a coil</li>
      <li>The change in magnetic flux</li>
      <li>The time period for the change</li>
      <li>The EMF</li>
    </ul>
    <p class="text-xl">From there, the calculator will return the result for the fourth variable.
    </p>
    <p class="text-3xl font-extrabold">Faraday's Law Equation and Definition
    </p>
    <p class="text-xl">Faraday’s law of electromagnetic induction states that any change in a magnetic field will
      induce an electromotive force in a conductive coil that is directly proportional to the rate of change in the inducing magnetic field.
      This EMF, measured in volts, will also create a current flow.
      Faraday’s equation only tells us the magnitude of the EMF, not the polarity:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula" />
    </div>
    <p class="text-xl">Where:</p>
    <ul class="text-xl">
      <li>ε = the electromotive force, in volts</li>
      <li>N = the number of turns in a coil of wire</li>
      <li>dθ = the change in magnetic flux, in webers</li>
      <li>dt = the time over which the change in flux occurred, in seconds</li>
    </ul>
    <p class="text-3xl font-extrabold">Lenz’s Law Equation and Definition
    </p>
    <p class="text-xl">
      To determine the polarity of the induced EMF, we must turn to Lenz’s law which states that when a changing
      magnetic field induces a current in a conducting coil, the induced current will generate a magnetic field
      that opposes the inducing magnetic field. To put it simply, the induced current opposes the changing magnetic
      flux which is producing it, as shown in Figure 1.
      <br><br>When the north pole of the magnet in the figure above moves closer to or further from the loop,
      an EMF will be created with polarity such that the induced current in the loop will create a magnetic field
      that opposes the changing magnetic field from the magnet.
      Putting together Faraday’s equation (magnitude) and Lenz’s equation (polarity), we get the following:
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
