<template>
  <div class="container text-2xl pl-96 pr-96 font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-12 pb-4 mb-8">
    <div id="parallel-resistance-calculator">
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 col-xs-12 mb-4">
            <label class="control-label">Number of Resistors (<small>min 2 and max 20 resistors</small>):</label
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
      <h3 class="text-3xl font-extrabold  mb-2">Result</h3>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 col-xs-12">
            <label class="control-label">Equivalent Resistance:</label>
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
              Calculate
            </button>
            <button @click="resetInputs" class="btn btn-primary">
              Reset
            </button>
          </div>
          <div class="col-sm-2 col-xs-4"></div>
        </div>
      </div>
    </div>
</div>
  <div class="container pl-96 pr-96">
    <div class=" text-3xl font-extrabold text-gray-900 mb-4">
      How to Calculate the Equivalent Resistance of Resistors Connected in Parallel
    </div>
    <p class="text-xl"> Calculating the equivalent resistance (Req) of resistors in parallel (Figure 1) by hand can be tiresome.
    </p>
    <img class="pl-72 mb-2" src="https://www.allaboutcircuits.com/uploads/articles/Parallel_Resistor_Drawing.jpg">
    <p class="italic text-center mb-4 pl-12"><b>Figure 1.</b> Circuit schematic for resistors connected in parallel
    </p>
    <p class="text-3xl font-extrabold">Calculating Resistance in Parallel Using Ohm's Law</p>
    <p class="text-xl">
      The voltage (V) across all of the resistors in a parallel circuit is identical.
      This can be seen by observing that the parallel resistors share the same nodes.
      The current through each individual resistor, Rx, can be calculated using Ohm's law:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula" />
    </div>
    <p class="text-xl">
      The total current through the parallel resistors is the sum of the individual currents:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula1" />
    </div>
    <p class="text-xl">
      The current through each individual resistor does not change when you add resistors in parallel because adding resistors in parallel
      does not affect the voltage across the resistors' terminals. What changes in the total current delivered by the power supply,
      not the current through one particular resistor.
    </p>
    <p class="text-3xl font-extrabold">
      Parallel Resistance Formula
    </p>
    <p class="text-xl">
      From the total current equation, we can then derive an equation for the equivalent parallel resistance:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula2"/>
    </div>
    <p class="text-xl">
      From there, by simplifying the terms, we get:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula3"/>
    </div>
    <p class="text-xl">
      This is often expressed as:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax  :formula="formula4"/>
    </div>
    <p class="text-xl">
      When you have only <b>two resistors</b> in parallel, the equivalent resistance can be easily calculated using this equation:
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
      formula4: '$$\\frac{1}{R_{eq}} = \\frac{1}{R_1 + R_2 + R_3 + ... + R_n}$$',
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
      return "Resistor<sub>" + (e + 1) + "</sub>";
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
