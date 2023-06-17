<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
    <div id="energy-calculator" class="row">
      <div class="col-sm-6 ">
        <table class="table is-fullwidth text-white text-2xl font-extrabold">
          <tbody>
          <tr class="text-white text-2xl font-extrabold">
            <th style="text-align: left; padding-bottom: 10px; min-width: 100px;">
              Date intrare
            </th>
            <th style="text-align: left; padding-bottom: 10px;">
              Valoare
            </th>
            <th style="text-align: left; padding-bottom: 10px;">
              Unități de măsură
            </th>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Tensiune</label>
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
                <label>Curent</label>
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
                <label>Rezistență</label>
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
                <label>Timp</label>
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
              Date ieșire
            </th>
            <th style="text-align: left; padding-bottom: 10px; min-width: 180px;">
              Valoare
            </th>
            <th style="text-align: left; padding-bottom: 10px;">
              Unități de măsură
            </th>
          </tr>
          <tr>
            <td>
              <div class="form-group text-white text-2xl font-extrabold">
                <label>Putere</label>
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
                <label>Energie</label>
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
                <label>Energie</label>
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
            Calculează
          </button>
          <button @click="resetInputs" class="btn btn-primary mb-4 mt-4">Resetează</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container pl-96 pr-96">
    <p class="text-xl">
      Aplicarea acestui calculator este atunci când încercați să înțelegeți forța și tensiunea generate de o schimbare în
      câmpul magnetic în jurul unei bucle închise. Puteți introduce oricare trei dintre cele patru variabile:
    </p>
    <p class="text-3xl font-extrabold">
      Calculul energiei electrice:
    </p>
    <p class="text-xl">
      Putem folosi oricare dintre următoarele ecuații pentru a găsi puterea disipată de un element de circuit rezistiv.
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula"/>
    </div>
    <p class="text-xl">
      Unde:
    </p>
    <ul class="text-xl">
      <li>P = Puterea disipată într-un element rezistiv în wați
      </li>
      <li>V = Căderea de tensiune pe elementul rezistiv în volți
      </li>
      <li>I = Curentul prin elementul rezistiv în amperi
      </li>
    </ul>
    <p class="text-3xl font-extrabold">Ecuația lui Joule pentru consumul de energie
    </p>
    <p class="text-xl">
      From here, we can find the total energy consumed by the circuit by using the following equation (also known as
      Joule’s Law):
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula2"/>
    </div>
    <p class="text-xl">
      Unde:
    </p>
    <ul class="text-xl">
      <li>E = Energia disipată într-un element rezistiv în jouli
      </li>
      <li>P = Puterea disipată într-un element rezistiv în wați
      </li>
      <li>t = Durata de timp în care energia a fost disipată în secunde
      </li>
    </ul>
    <p class="text-xl">
      Prin definiție 1 watt = 1 joule pe secundă (1 W = 1 J/s). În mod similar, puteți întoarce acea ecuație
      și devine 1 joule = 1 watt timp de 1 secundă (1 J = 1 w-s)
    </p>
    <p class="text-3xl font-extrabold">
      Conversia Watt-oră în Jouli
    </p>
    <p class="text-xl">
      De asemenea, este important să rețineți că energia este exprimată în mod obișnuit în termeni de wați-oră care,
      după cum sugerează și numele, este echivalentul energetic al unui watt de putere consumată continuu timp de o oră.
      Un watt-oră este egal cu 3600 Jouli (3,6 kJ). Mai jos este o ecuație de conversie rapidă.
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula3"/>
    </div>
    <p class="text-xl">
      Unde:
    </p>
    <ul class="text-xl mb-12">
      <li>Wh = Energia consumată pentru o perioadă de timp în wați-oră
      </li>
      <li>E = Energia disipată într-un element rezistiv în jouli
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
