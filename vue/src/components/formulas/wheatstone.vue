<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div id="wheatstone-bridge-calculator">
      <div id="tool-form">
        <h3 class="pb-4">You must input everything except for either <span class="text-indigo-500">R<sub>x</sub> or V<sub>out</sub></span></h3>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label">Vin Value:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="VinValueNew.value" type="number" class="rounded-pill form-control mb-4 text-center"/>
            </div>
            <div class="col-sm-2">
              <select v-model="VinValueNew.unit" class="form-control">
                <option v-for="unit in voltageUnitsNew" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
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
              <input v-model="R1ValueNew.value" type="number" class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="R1ValueNew.unit" class="form-control">
                <option v-for="unit in ohmUnitsNew" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
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
              <input v-model="R2ValueNew.value" type="number" class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="R2ValueNew.unit" class="form-control">
                <option v-for="unit in ohmUnitsNew" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
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
              <input v-model="R3ValueNew.value" type="number" class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="R3ValueNew.unit" class="form-control">
                <option v-for="unit in ohmUnitsNew" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
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
              <input v-model="RxValueNew.value" :disabled="disableInput(RxValueNew)"
                     :type="this.calculatedValue == RxValueNew ? 'text' : 'number'"
                     class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="RxValueNew.unit" class="form-control">
                <option v-for="unit in ohmUnitsNew" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
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
              <input v-model="VoutValueNew.value" :disabled="disableInput(VoutValueNew)"
                     :type="this.calculatedValue == VoutValueNew ? 'text' : 'number'"
                     class="rounded-pill form-control mb-4 text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="VoutValueNew.unit" class="form-control">
                <option v-for="unit in voltageUnitsNew" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="form-group">
            <button :disabled="disabledNew" @click="calculateNew" class="mb-4 mt-4 btn btn-primary">
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
      VinValueNew: {value: null, unit: 1},
      R1ValueNew: {value: null, unit: 1},
      R2ValueNew: {value: null, unit: 1},
      R3ValueNew: {value: null, unit: 1},
      RxValueNew: {value: null, unit: 1},
      VoutValueNew: {value: null, unit: 1},
      calculatedValue: null,
      inputVbR1: {value: 10, unit: "1"},
      inputVbR2: {value: 10, unit: "1"},
      inputVbR3: {value: 10, unit: "1"},
      inputVbR4: {value: 10, unit: "1"},
      inputVbV: {value: 10, unit: "1"},
      inputR1: {value: 10, unit: "1"},
      inputR2: {value: 10, unit: "1"},
      inputR3: {value: 10, unit: "1"},
      rx: "1",
      r4: null,
      prefR4: "1xxxxxxxxx",
      formula: '$$V_{out} = 0$$',
      formula1: '$$\\frac{R_1}{R_3} = \\frac{R_2}{R_x}$$',
      formula2: '$$V_{out} = V_{in} \\centerdot (\\frac{R_x}{R_3+R_x} - \\frac{R_2}{R_1+R_2})$$',
      formula3: '$$R_{x} = \\frac{R_2 R_3 + R_3 \\centerdot(R_1+R_2) \\centerdot \\frac{V_{out}}{V_{in}}}{R_1 - (R_1+R_2) \\centerdot \\frac{V_{out}}{V_{in}}}$$',
    }
  },
  computed: {
    ohmUnitsNew() {
      return [
        { value: 0.001, text: "mΩ" },
        { value: 1, text: "Ω" },
        { value: 1e3, text: "kΩ" },
        { value: 1e6, text: "MΩ" },
      ];
    },
    voltageUnitsNew() {
      return [
        { value: 1e-6, text: "uV" },
        { value: 0.001, text: "mV" },
        { value: 1, text: "V" },
        { value: 1e3, text: "kV" },
      ];
    },
    disabledNew() {
      return !(
        null != this.VinValueNew.value &&
        "" != this.VinValueNew.value &&
        null != this.R1ValueNew.value &&
        "" != this.R1ValueNew.value &&
        null != this.R2ValueNew.value &&
        "" != this.R2ValueNew.value &&
        null != this.R3ValueNew.value &&
        "" != this.R3ValueNew.value &&
        ((null != this.RxValueNew.value && "" != this.RxValueNew.value) || (null != this.VoutValueNew.value && "" != this.VoutValueNew.value))
      );
    },
    series() {
      var e = [];
      switch ((console.log(this.rx), this.rx)) {
        case "1":
          e = [100, 120, 150, 180, 220, 270, 330, 390, 470, 560, 680, 820, 1e3];
          break;
        case "2":
          e = [100, 110, 120, 130, 150, 160, 180, 200, 220, 240, 270, 300, 330, 360, 390, 430, 470, 510, 560, 620, 680, 750, 820, 910, 1e3];
          break;
        case "3":
          e = [
            100,
            105,
            110,
            115,
            121,
            127,
            133,
            140,
            147,
            154,
            162,
            169,
            178,
            187,
            196,
            205,
            215,
            226,
            237,
            249,
            261,
            274,
            287,
            301,
            316,
            332,
            348,
            365,
            383,
            402,
            422,
            442,
            464,
            487,
            511,
            536,
            562,
            590,
            619,
            649,
            681,
            715,
            750,
            787,
            825,
            866,
            909,
            953,
            1e3,
          ];
          break;
        case "4":
          e = [
            100,
            102,
            105,
            107,
            110,
            113,
            115,
            118,
            121,
            124,
            127,
            130,
            133,
            137,
            140,
            143,
            147,
            150,
            154,
            158,
            162,
            165,
            169,
            174,
            178,
            182,
            187,
            191,
            196,
            200,
            205,
            210,
            215,
            221,
            226,
            232,
            237,
            243,
            249,
            255,
            261,
            267,
            274,
            280,
            287,
            294,
            301,
            309,
            316,
            324,
            332,
            340,
            348,
            357,
            365,
            374,
            383,
            392,
            402,
            412,
            422,
            432,
            442,
            453,
            464,
            475,
            487,
            491,
            511,
            523,
            536,
            549,
            562,
            576,
            590,
            604,
            619,
            634,
            649,
            665,
            681,
            698,
            715,
            732,
            750,
            768,
            787,
            806,
            825,
            845,
            866,
            887,
            909,
            931,
            959,
            976,
            1e3,
          ];
          break;
        default:
          e = [
            100,
            101,
            102,
            104,
            105,
            106,
            107,
            109,
            110,
            111,
            113,
            114,
            115,
            117,
            118,
            120,
            121,
            123,
            124,
            126,
            127,
            129,
            130,
            132,
            133,
            135,
            137,
            138,
            140,
            142,
            143,
            145,
            147,
            149,
            150,
            152,
            154,
            156,
            158,
            160,
            162,
            164,
            165,
            167,
            169,
            172,
            174,
            176,
            178,
            180,
            182,
            184,
            187,
            189,
            191,
            193,
            196,
            198,
            200,
            203,
            205,
            208,
            210,
            213,
            215,
            218,
            221,
            223,
            226,
            229,
            232,
            234,
            237,
            240,
            243,
            246,
            249,
            252,
            255,
            258,
            261,
            264,
            267,
            271,
            274,
            277,
            280,
            284,
            287,
            291,
            294,
            298,
            301,
            305,
            309,
            312,
            316,
            320,
            324,
            328,
            332,
            336,
            340,
            344,
            348,
            352,
            357,
            361,
            365,
            370,
            374,
            379,
            383,
            388,
            392,
            397,
            402,
            407,
            412,
            417,
            422,
            427,
            432,
            437,
            442,
            448,
            453,
            459,
            464,
            470,
            475,
            481,
            487,
            493,
            499,
            505,
            511,
            517,
            523,
            530,
            536,
            542,
            549,
            556,
            562,
            569,
            576,
            583,
            590,
            597,
            604,
            612,
            619,
            626,
            634,
            642,
            649,
            657,
            665,
            673,
            681,
            690,
            698,
            706,
            715,
            723,
            732,
            741,
            750,
            759,
            768,
            777,
            787,
            796,
            806,
            816,
            825,
            835,
            845,
            856,
            866,
            876,
            887,
            898,
            909,
            920,
            931,
            942,
            953,
            965,
            976,
            988,
            1e3,
          ];
      }
      return e;
    },
  },
  watch: {
    RxValueNewClone: {
      handler(e, t) {
        this.calculatedValue == this.VoutValueNew && ((this.calculatedValue = null), (this.VoutValueNew.value = null));
      },
      deep: !0,
      nextTick: !0,
    },
    VoutValueNewClone: {
      handler(e, t) {
        this.calculatedValue == this.RxValueNew && ((this.calculatedValue = null), (this.RxValueNew.value = null));
      },
      deep: !0,
      nextTick: !0,
    },
  },
  methods: {
    disableInput(e) {
      return (
        e == this.calculatedValue ||
        (null == this.calculatedValue &&
          ((e == this.RxValueNew && null != this.VoutValueNew.value && "" != this.VoutValueNew.value) || (e == this.VoutValueNew && null != this.RxValueNew.value && "" != this.RxValueNew.value)))
      );
    },
    resetInputs() {
      (this.VinValueNew.value = null),
        (this.R1ValueNew.value = null),
        (this.R2ValueNew.value = null),
        (this.R3ValueNew.value = null),
        (this.RxValueNew.value = null),
        (this.VoutValueNew.value = null),
        (this.calculatedValue = null);
    },
    calculateNew() {
      (null != this.RxValueNew.value && "" != this.RxValueNew.value && this.calculatedValue != this.RxValueNew) ||
      ((this.RxValueNew.value = this.formatOutput(
        (this.R2ValueNew.value * this.R2ValueNew.unit * (this.R3ValueNew.value * this.R3ValueNew.unit) +
          this.R3ValueNew.value *
          this.R3ValueNew.unit *
          (this.R1ValueNew.value * this.R1ValueNew.unit + this.R2ValueNew.value * this.R2ValueNew.unit) *
          ((this.VoutValueNew.value * this.VoutValueNew.unit) / (this.VinValueNew.value * this.VinValueNew.unit))) /
        (this.R1ValueNew.value * this.R1ValueNew.unit -
          (this.R1ValueNew.value * this.R1ValueNew.unit + this.R2ValueNew.value * this.R2ValueNew.unit) * ((this.VoutValueNew.value * this.VoutValueNew.unit) / (this.VinValueNew.value * this.VinValueNew.unit))) /
        this.RxValueNew.unit
      )),
        (this.calculatedValue = this.RxValueNew)),
      (null != this.VoutValueNew.value && "" != this.VoutValueNew.value && this.calculatedValue != this.VoutValueNew) ||
      ((this.VoutValueNew.value = this.formatOutput(
        (this.VinValueNew.value *
          this.VinValueNew.unit *
          ((this.RxValueNew.value * this.RxValueNew.unit) / (this.RxValueNew.value * this.RxValueNew.unit + this.R3ValueNew.value * this.R3ValueNew.unit) -
            (this.R2ValueNew.value * this.R2ValueNew.unit) / (this.R2ValueNew.value * this.R2ValueNew.unit + this.R1ValueNew.value * this.R1ValueNew.unit))) /
        this.VoutValueNew.unit
      )),
        (this.calculatedValue = this.VoutValueNew));
    },
    formatOutput(e) {
      return isNaN(e) || "" == e || null == e ? e : parseFloat(e.toFixed(4));
    },
    getPrefR4() {
      var e,
        t,
        n = this.r4;
      if (n < 1) return 1;
      if (n > 1e8) return 1e8;
      for (var r = 1, i = 1e9; n < 100; ) (n *= 10), (r /= 10);
      for (; n >= 1e3; ) (n /= 10), (r *= 10);
      for (var a = 0; a < this.series.length; a++) (t = Math.abs(n - this.series[a])) < i && ((i = t), (e = this.series[a]));
      this.prefR4 = e * r;
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
