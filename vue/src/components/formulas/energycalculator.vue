<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div id="energy-calculator" class="row">
      <div class="col-sm-6 ">
        <table class="table is-fullwidth text-white text-2xl font-extrabold">
          <tbody>
          <tr class="text-white text-2xl font-extrabold">
            <th style="text-align: left; padding-bottom: 10px; min-width: 100px;">
              Inputs
            </th>
            <th style="text-align: left; padding-bottom: 10px;">
              Value
            </th>
            <th style="text-align: left; padding-bottom: 10px;">
              Units
            </th>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Voltage</label>
              </div>
            </td>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <input type="number" :disabled="disableInput(voltage)"
                       v-model="voltage.value" @input="checkNrOfInputs(voltage)"
                       class="form-control text-center"/>
              </div>
            </td>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <select v-model="voltage.unit" class="form-control">
                  <option v-for="unit in voltageUnits" :key="unit.text" :value="unit.value" v-text="unit.text">

                  </option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Current</label>
              </div>
            </td>
            <td>
              <div class="form-group">
                <input type="number" :disabled="disableInput(current)" v-model="current.value"
                       @input="checkNrOfInputs(current)" class="text-center form-control"/>
              </div>
            </td>
            <td>
              <div class="form-group">
                <select v-model="current.unit" class="form-control">
                  <option v-for="unit in currentUnits" :key="unit.text" :value="unit.value" v-text="unit.text">
                  </option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Resistance</label>
              </div>
            </td>
            <td>
              <div class="form-group ">
                <input type="number" :disabled="disableInput(resistance)" v-model="resistance.value"
                       @input="checkNrOfInputs(resistance)" class="text-center form-control"/>
              </div>
            </td>
            <td>
              <div class="form-group">
                <select v-model="resistance.unit" class="form-control">
                  <option v-for="unit in resistanceUnits" :key="unit.text" :value="unit.value" v-text="unit.text">

                  </option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Time</label>
              </div>
            </td>
            <td>
              <div class="form-group">
                <input type="number" v-model="time.value" class="text-center form-control"/>
              </div>
            </td>
            <td>
              <div class="form-group">
                <select v-model="time.unit" class="form-control">
                  <option v-for="unit in timeUnits" :key="unit.text" :value="unit.value" v-text="unit.text">

                  </option>
                </select>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
      <div class="col-sm-6">
        <table class="table is-fullwidth text-white text-2xl font-extrabold">
          <tbody>
          <tr class="text-white text-2xl font-extrabold">
            <th style="text-align: left; padding-bottom: 10px; min-width: 100px;">
              Outputs
            </th>
            <th style="text-align: left; padding-bottom: 10px; min-width: 180px;">
              Value
            </th>
            <th style="text-align: left; padding-bottom: 10px;">
              Units
            </th>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Power</label>
              </div>
            </td>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <span v-text="formatOutput(powerInWatts.outputValue)"></span>
              </div>
            </td>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <select v-model="powerInWatts.unit" @change="calculate" class="form-control">
                  <option v-for="unit in powerInWattsUnits" :key="unit.text" :value="unit.value" v-text="unit.text">

                  </option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Energy</label>
              </div>
            </td>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <span v-text="formatOutput(energyInJoules.outputValue)"></span>
              </div>
            </td>
            <td>
              <div class="form-group ">
                <select v-model="energyInJoules.unit" @change="calculate" class="form-control">
                  <option v-for="unit in energyInJoulesUnits" :key="unit.text" :value="unit.value" v-text="unit.text">

                  </option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Energy</label>
              </div>
            </td>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <span v-text="formatOutput(energyInWattHours.outputValue)"></span>
              </div>
            </td>
            <td>
              <div class="form-group">
                <select v-model="energyInWattHours.unit" @change="calculate" class="form-control">
                  <option v-for="unit in energyInWattHoursUnits" :key="unit.text" :value="unit.value"
                          v-text="unit.text">

                  </option>
                </select>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-xs-12">
        <div class="form-group">
          <button :disabled="disabled" @click="calculate" class="btn btn-primary mb-4">
            Calculate
          </button>
          <button @click="resetInputs" class="btn btn-primary mb-4 mt-4">Reset</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container pl-96 pr-96">
    <p class="text-xl">
      The application of this calculator is when trying to understand the force and voltage generated by a changing
      magnetic field around a closed loop. You can enter any three of the four variables:
    </p>
    <p class="text-3xl font-extrabold">
      Electrical Energy Equation:
    </p>
    <p class="text-xl">
      We can use any of the following equations to find the power dissipated by a resistive circuit element.
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula"/>
    </div>
    <p class="text-xl">
      Where:
    </p>
    <ul class="text-xl">
      <li>P = Power dissipated in a resistive element in watts
      </li>
      <li>V = The voltage drop across the resistive element in volts
      </li>
      <li>I = The current through the resistive element in amps
      </li>
    </ul>
    <p class="text-3xl font-extrabold">Joule's Law Equation for Energy Consumption
    </p>
    <p class="text-xl">
      From here, we can find the total energy consumed by the circuit by using the following equation (also known as
      Joule’s Law):
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula2"/>
    </div>
    <p class="text-xl">
      Where:
    </p>
    <ul class="text-xl">
      <li>E = Energy dissipated in a resistive element in joules
      </li>
      <li>P = Power dissipated in a resistive element in watts
      </li>
      <li>t = The duration of time the energy was dissipated in seconds
      </li>
    </ul>
    <p class="text-xl">
      By definition 1 watt = 1 joule per second (1 W = 1 J/s). Similarly, you can flip that equation around
      and it becomes 1 joule = 1 watt for 1 second (1 J = 1 w-s)
    </p>
    <p class="text-3xl font-extrabold">
      Converting Watt-hours to Joules
    </p>
    <p class="text-xl">
      It's also important to note that energy is also commonly expressed in terms of watt-hours which,
      as the name suggests, is the energy equivalent of one watt of power consumed continuously for one hour.
      One watt-hour is equal to 3600 Joules (3.6 kJ). Below is a quick conversion equation.
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula3"/>
    </div>
    <p class="text-xl">
      Where:
    </p>
    <ul class="text-xl mb-12">
      <li>Wh = Energy consumed for a period of time in watt-hours
      </li>
      <li>E = Energy dissipated in a resistive element in joules
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "energycalculator",
  data() {
    return {
      voltage: {value: null, unit: 1},
      current: {value: null, unit: 1},
      resistance: {value: null, unit: 1},
      powerInWatts: {value: null, outputValue: null, unit: 1},
      energyInJoules: {value: null, outputValue: null, unit: 1},
      energyInWattHours: {value: null, outputValue: null, unit: 1},
      inputValues: [],
      power: null,
      time: {value: null, unit: 1},
      energy: null,
      wattHour: null,
      formula: '$$P = VI = I^2R = \\frac{V^2}{R}$$',
      formula2: '$$E = Pt$$',
      formula3: '$$Wh = \\frac{E}{3600}$$',
    }
  },
  computed: {
    voltageUnits() {
      return [
        {value: 1e3, text: "kV"},
        {value: 1, text: "V"},
        {value: 0.001, text: "mV"},
        {value: 1e-6, text: "uV"},
      ];
    },
    currentUnits() {
      return [
        {value: 1e3, text: "kA"},
        {value: 1, text: "A"},
        {value: 0.001, text: "mA"},
        {value: 1e-6, text: "uA"},
        {value: 1e-9, text: "nA"},
        {value: 1e-12, text: "pA"},
      ];
    },
    resistanceUnits() {
      return [
        {value: 1e6, text: "MΩ"},
        {value: 1e3, text: "kΩ"},
        {value: 1, text: "Ω"},
        {value: 0.001, text: "mΩ"},
      ];
    },
    timeUnits() {
      return [
        {value: 3600, text: "h"},
        {value: 60, text: "m"},
        {value: 1, text: "s"},
        {value: 0.001, text: "ms"},
        {value: 1e-6, text: "us"},
        {value: 1e-9, text: "ns"},
        {value: 1e-12, text: "ps"},
      ];
    },
    powerInWattsUnits() {
      return [
        {value: 1e6, text: "MW"},
        {value: 1e3, text: "kW"},
        {value: 1, text: "W"},
        {value: 0.001, text: "mW"},
        {value: 1e-6, text: "uW"},
        {value: 1e-9, text: "nW"},
        {value: 1e-12, text: "pW"},
      ];
    },
    energyInJoulesUnits() {
      return [
        {value: 1e9, text: "GJ"},
        {value: 1e6, text: "MJ"},
        {value: 1e3, text: "kJ"},
        {value: 1, text: "J"},
        {value: 0.001, text: "mJ"},
        {value: 1e-6, text: "uJ"},
        {value: 1e-9, text: "nJ"},
        {value: 1e-12, text: "pJ"},
      ];
    },
    energyInWattHoursUnits() {
      return [
        {value: 1e9, text: "GWh"},
        {value: 1e6, text: "MWh"},
        {value: 1e3, text: "kWh"},
        {value: 1, text: "Wh"},
        {value: 0.001, text: "mWh"},
        {value: 1e-6, text: "uWh"},
        {value: 1e-9, text: "nWh"},
        {value: 1e-12, text: "pWh"},
      ];
    },
    disabled() {
      return 2 != this.inputValues.length || null == this.time.value || "" == this.time.value;
    },
  },
  methods: {
    disableInput(a) {
      return ("" == a.value || null == a.value) && 2 == this.inputValues.length;
    },
    resetInputs() {
      (this.voltage.value = null),
        (this.current.value = null),
        (this.resistance.value = null),
        (this.time.value = null),
        (this.powerInWatts.outputValue = null),
        (this.energyInJoules.outputValue = null),
        (this.energyInWattHours.outputValue = null),
        (this.inputValues = []);
    },
    checkNrOfInputs(inputParam) {
      if (null == inputParam.value || "" == inputParam.value) {
        if (this.inputValues.includes(inputParam)) {
          var t = this.inputValues.indexOf(inputParam);
          -1 !== t && this.inputValues.splice(t, 1);
        }
      } else this.inputValues.includes(inputParam) || (this.inputValues.length < 2 || ((this.inputValues[0].value = null), this.inputValues.shift()), this.inputValues.push(inputParam));
    },
    calculate() {
      var tensiune = "" != this.voltage.value && null != this.voltage.value ? this.voltage.value * this.voltage.unit : null,
        curent = "" != this.current.value && null != this.current.value ? this.current.value * this.current.unit : null,
        rezistenta = "" != this.resistance.value && null != this.resistance.value ? this.resistance.value * this.resistance.unit : null,
        timp = "" != this.time.value && null != this.time.value ? this.time.value * this.time.unit : null;
      (this.powerInWatts.value = null == rezistenta ? curent * tensiune : null == curent ? (tensiune * tensiune) / rezistenta : null == tensiune ? curent * curent * rezistenta : NaN),
        (this.energyInJoules.value = this.powerInWatts.value * timp),
        (this.energyInWattHours.value = (this.powerInWatts.value * timp) / 3600),
        (this.powerInWatts.outputValue = this.powerInWatts.value / this.powerInWatts.unit),
        (this.energyInJoules.outputValue = this.energyInJoules.value / this.energyInJoules.unit),
        (this.energyInWattHours.outputValue = this.energyInWattHours.value / this.energyInWattHours.unit);
    },
    formatOutput(b) {
      return isNaN(b) || "" == b || null == b ? b : parseFloat(b.toFixed(6));
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

table, th, td {
  border: none;
}
</style>
