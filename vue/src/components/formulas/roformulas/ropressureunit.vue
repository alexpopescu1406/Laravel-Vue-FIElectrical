<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
  <div id="lc-resonance-calculator">
    <div id="tool-form">
      <h3 class="mb-4">Date intrare:</h3>
      <div class="form-group">
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2"></label>
          </div>
          <div class="col-md">
            <label class="control-label mb-2">Valoare</label>
          </div>
          <div class="col-md col-sm-2">
            <label class="control-label mb-2">Unitate</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2">Presiune</label>
          </div>
          <div class="col-md">
            <input v-model="pressure.value" type="number" class="form-control text-center" />
          </div>
          <div class="col-md col-sm-2">
            <select v-model="pressure.unit" class="form-control text-center">
              <option v-for="unit in pressureUnits" :key="unit.text" :value="unit.value" v-text="unit.text"></option>
            </select>
          </div>
        </div>
      </div>
      <h3 class="mb-4 mt-4">Date ieșire:</h3>
      <div class="form-group">
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2"></label>
          </div>
          <div class="col-md">
            <label class="control-label mb-2 mb-2">Valoare</label>
          </div>
          <div class="col-md col-sm-2">
            <label class="control-label mb-2">Unitate de măsură</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2 text-indigo-500">Pascal</label>
          </div>
          <div class="col-md text-indigo-500">
            <span v-text="formatOutput(Pascal.value)"></span>
          </div>
          <div class="col-md col-sm-2 text-indigo-500">
            <span>Pa (N/m<sup>2</sup>)</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2">Bar</label>
          </div>
          <div class="col-md">
            <span v-text="formatOutput(Bar.value)"></span>
          </div>
          <div class="col-md col-sm-2">
            <span>bar</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2 text-indigo-500">Kilogram pe centimetru pătrat</label
            >
          </div>
          <div class="col-md text-indigo-500">
            <span v-text="formatOutput(KilogramPerSquareCentimeter.value)"></span>
          </div>
          <div class="col-md col-sm-2 text-indigo-500">
            <span>kg/cm<sup>2</sup></span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2">Milimetru coloană de mercur</label>
          </div>
          <div class="col-md">
            <span v-text="formatOutput(MillimetersOfMercury.value)"></span>
          </div>
          <div class="col-md col-sm-2">
            <span>mm Hg</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2 text-indigo-500">Inch coloană de mercur</label>
          </div>
          <div class="col-md text-indigo-500">
            <span v-text="formatOutput(InchesOfMercury.value)"></span>
          </div>
          <div class="col-md col-sm-2 text-indigo-500">
            <span>in Hg</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2 ">Pound pe inch pătrat</label>
          </div>
          <div class="col-md">
            <span v-text="formatOutput(PoundPerSquareInch.value)"></span>
          </div>
          <div class="col-md col-sm-2">
            <span>psi</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2 text-indigo-500">Pound per Square Foot</label>
          </div>
          <div class="col-md text-indigo-500">
            <span v-text="formatOutput(PoundPerSquareFoot.value)"></span>
          </div>
          <div class="col-md col-sm-2 text-indigo-500">
            <span>psf</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2">Milimetri de coloană de apă la 4C</label
            >
          </div>
          <div class="col-md">
            <span v-text="formatOutput(MillimetersOfWaterColumnAt4C.value)"></span>
          </div>
          <div class="col-md col-sm-2">
            <span>mm H2O</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2 text-indigo-500">Inch de coloană de apă la 4C</label
            >
          </div>
          <div class="col-md text-indigo-500">
            <span v-text="formatOutput(InchesOfWaterColumnAt4C.value)"></span>
          </div>
          <div class="col-md col-sm-2 text-indigo-500">
            <span>in H2O</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <label class="control-label mb-2">Presiune Atmosferică</label>
          </div>
          <div class="col-md">
            <span v-text="formatOutput(AtmosphericPressure.value)"></span>
          </div>
          <div class="col-md col-sm-2">
            <span>atm</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 col-xs-12"></div>
          <div class="col-sm-6 col-xs-12">
            <button :disabled="disabledNew" @click="calculateNew" class="btn btn-primary mb-4 mt-4">
              Calculează
            </button>
            <button @click="resetNew" class="btn btn-primary mb-4">
              Resetează
            </button>
          </div>
          <div class="col-sm-3 col-xs-12"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="container pl-96 pr-96">
  <div class="lg:mx-4">
    <p class="text-3xl font-extrabold">Calculator de conversie a unităților de presiune. Aplicații</p>
    <p class="text-xl">Acest calculator se aplică atunci când încercați să exprimați o măsurare a presiunii în unități diferite.
      Acest lucru poate fi util atunci când lucrați cu senzori de presiune într-un circuit electronic, proiectați piese mecanice sau modelați un sistem fizic.
    </p>
    <p class="text-3xl font-extrabold">Unități de măsură ale Presiunii</p>
    <p class="text-xl">Acest calculator convertește următoarele unități:</p>
    <ul class="text-xl">
      <li>Pascal (Pa) = 1 N/m<sup>2</sup></li>
      <li>Bar (bar)</li>
      <li>Kilogram pe centimetru pătrat (kg/cm<sup>2</sup>)</li>
      <li>Millimetru coloană de mercur (mm Hg)</li>
      <li>Inches of mercury (in Hg)</li>
      <li>Pound per square inch (lb/in<sup>2</sup>)</li>
      <li>Pound per square foot (lb/ft<sup>2</sup>)</li>
      <li>Millimeters of water column at 4 &deg;C (mm H<sub>2</sub>0)</li>
      <li>Inches of water column at 4 &deg;C (mm H<sub>2</sub>0)</li>
      <li>Atmosferă (atm)</li>
    </ul>
    <p class="text-3xl font-extrabold"><br />
      Factori de conversie a presiunii</p>
    <p class="text-xl">Următorul tabel (Tabelul 1) prezintă factorii de conversie pentru a converti de la o unitate de măsură a presiunii la alta:</p>
    <p>&nbsp;</p>
    <h5 class="text-center"><em><strong>Tabel 1. </strong>Factorii de conversie de la o unitate de măsură a presiunii la alta.</em></h5>
    <div class="wysiwyg-table-wrapper text-xl mb-12">
      <table align="center" style="width:900px">
        <thead>
        <tr>
          <th scope="row">&nbsp;</th>
          <th scope="col">
            <p>Pascal (N/m<sup>2</sup>)</p>
          </th>
          <th scope="col">bar</th>
          <th scope="col">
            <p>kg/cm<sup>2</sup></p>
          </th>
          <th scope="col">
            <p>mm Hg</p>
          </th>
          <th scope="col">
            <p>in Hg</p>
          </th>
          <th scope="col">psi</th>
          <th scope="col">
            <p>psf</p>
          </th>
          <th scope="col">
            <p>mm H<sub>2</sub>O</p>
          </th>
          <th scope="col">in H<sub>2</sub>O</th>
          <th scope="col">atm</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">
            <p>1 Pa<br />
              (1 N/m<sup>2</sup>)</p>
          </th>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>0.00001</p>
          </td>
          <td class="text-center">
            <p>0.00001</p>
          </td>
          <td class="text-center">
            <p>0.00750</p>
          </td>
          <td class="text-center">
            <p>0.00030</p>
          </td>
          <td class="text-center">
            <p>0.00015</p>
          </td>
          <td class="text-center">
            <p>0.0209</p>
          </td>
          <td class="text-center">
            <p>0.102</p>
          </td>
          <td class="text-center">
            <p>0.00401</p>
          </td>
          <td class="text-center">
            <p>0.00001</p>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <p>1 Bar</p>
          </th>
          <td class="text-center">
            <p>100000</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>1.0197</p>
          </td>
          <td class="text-center">
            <p>750.05</p>
          </td>
          <td class="text-center">
            <p>29.530</p>
          </td>
          <td class="text-center">
            <p>14.504</p>
          </td>
          <td class="text-center">
            <p>2088.540</p>
          </td>
          <td class="text-center">
            <p>10197.162</p>
          </td>
          <td class="text-center">
            <p>401.463</p>
          </td>
          <td class="text-center">
            <p>0.987</p>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <p>1 kg/cm<sup>2</sup></p>
          </th>
          <td class="text-center">
            <p>98066.50</p>
          </td>
          <td class="text-center">
            <p>0.981</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>735.56</p>
          </td>
          <td class="text-center">
            <p>28.959</p>
          </td>
          <td class="text-center">
            <p>14.223</p>
          </td>
          <td class="text-center">
            <p>2048.158</p>
          </td>
          <td class="text-center">
            <p>10000</p>
          </td>
          <td class="text-center">
            <p>393.701</p>
          </td>
          <td class="text-center">
            <p>0.968</p>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <p>1 mm Hg</p>
          </th>
          <td class="text-center">
            <p>133.322</p>
          </td>
          <td class="text-center">
            <p>1.333</p>
          </td>
          <td class="text-center">
            <p>1.360</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>0.0394</p>
          </td>
          <td class="text-center">
            <p>0.0193</p>
          </td>
          <td class="text-center">
            <p>2.784</p>
          </td>
          <td class="text-center">
            <p>13.595</p>
          </td>
          <td class="text-center">
            <p>0.5352</p>
          </td>
          <td class="text-center">
            <p>0.00132</p>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <p>1 in Hg</p>
          </th>
          <td class="text-center">
            <p>3386.389</p>
          </td>
          <td class="text-center">
            <p>0.0339</p>
          </td>
          <td class="text-center">
            <p>0.0345</p>
          </td>
          <td class="text-center">
            <p>25.40</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>0.4912</p>
          </td>
          <td class="text-center">
            <p>70.7261</p>
          </td>
          <td class="text-center">
            <p>345.316</p>
          </td>
          <td class="text-center">
            <p>13.595</p>
          </td>
          <td class="text-center">
            <p>0.0334</p>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <p>1 psi</p>
          </th>
          <td class="text-center">
            <p>6894.757</p>
          </td>
          <td class="text-center">
            <p>0.0690</p>
          </td>
          <td class="text-center">
            <p>0.0703</p>
          </td>
          <td class="text-center">
            <p>51.72</p>
          </td>
          <td class="text-center">
            <p>2.0360</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>143.9998</p>
          </td>
          <td class="text-center">
            <p>703.0696</p>
          </td>
          <td class="text-center">
            <p>27.680</p>
          </td>
          <td class="text-center">
            <p>0.0681</p>
          </td>
        </tr>
        <tr>
          <th scope="row">1 psf</th>
          <td class="text-center">
            <p>47.880</p>
          </td>
          <td class="text-center">
            <p>0.00048</p>
          </td>
          <td class="text-center">
            <p>0.00049</p>
          </td>
          <td class="text-center">
            <p>0.359</p>
          </td>
          <td class="text-center">
            <p>0.0141</p>
          </td>
          <td class="text-center">
            <p>0.00694</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>4.882</p>
          </td>
          <td class="text-center">
            <p>0.192</p>
          </td>
          <td class="text-center">
            <p>0.00047</p>
          </td>
        </tr>
        <tr>
          <th scope="row">1 mm H<sub>2</sub>O</th>
          <td class="text-center">
            <p>9.807</p>
          </td>
          <td class="text-center">
            <p>0.00010</p>
          </td>
          <td class="text-center">
            <p>0.00010</p>
          </td>
          <td class="text-center">
            <p>0.0736</p>
          </td>
          <td class="text-center">
            <p>0.0029</p>
          </td>
          <td class="text-center">
            <p>0.00142</p>
          </td>
          <td class="text-center">
            <p>0.2048</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>0.0394</p>
          </td>
          <td class="text-center">
            <p>0.00010</p>
          </td>
        </tr>
        <tr>
          <th scope="row">1 in H<sub>2</sub>O</th>
          <td class="text-center">
            <p>249.089</p>
          </td>
          <td class="text-center">
            <p>0.00249</p>
          </td>
          <td class="text-center">
            <p>0.00254</p>
          </td>
          <td class="text-center">
            <p>1.868</p>
          </td>
          <td class="text-center">
            <p>0.0736</p>
          </td>
          <td class="text-center">
            <p>0.0361</p>
          </td>
          <td class="text-center">
            <p>5.2023</p>
          </td>
          <td class="text-center">
            <p>25.4000</p>
          </td>
          <td class="text-center">1</td>
          <td class="text-center">
            <p>0.00246</p>
          </td>
        </tr>
        <tr>
          <th scope="row">1 atm</th>
          <td class="text-center">
            <p>101325.0</p>
          </td>
          <td class="text-center">
            <p>1.0133</p>
          </td>
          <td class="text-center">
            <p>1.0332</p>
          </td>
          <td class="text-center">
            <p>760</p>
          </td>
          <td class="text-center">
            <p>29.921</p>
          </td>
          <td class="text-center">
            <p>14.696</p>
          </td>
          <td class="text-center">
            <p>2116.213</p>
          </td>
          <td class="text-center">
            <p>10332.275</p>
          </td>
          <td class="text-center">
            <p>406.783</p>
          </td>
          <td class="text-center">1</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "pressureunit",
  data() {
    return {
      pressure: {value: null, unit: 1},
      Pascal: {value: null},
      Bar: {value: null},
      KilogramPerSquareCentimeter: {value: null},
      MillimetersOfMercury: {value: null},
      InchesOfMercury: {value: null},
      PoundPerSquareInch: {value: null},
      PoundPerSquareFoot: {value: null},
      MillimetersOfWaterColumnAt4C: {value: null},
      InchesOfWaterColumnAt4C: {value: null},
      AtmosphericPressure: {value: null},
      pa: {value: null},
      torr: {value: null},
      atm: {value: null},
      mbar: {value: null},
      lbIn: {value: null},
      lbFt: {value: null},
      kg: {value: null},
      mm: {value: null},
      inHg: {value: null},
      h2o: {value: null},
      um: {value: null},
    }
  },
  computed: {
    disabledNew() {
      return null == this.pressure.value || "" == this.pressure.value;
    },
    pressureUnits() {
      return [
        { value: 1, text: "Pa" },
        { value: 1e5, text: "bar" },
        { value: 98066.5, text: "kg/cm^2" },
        { value: 133.322, text: "mm Hg" },
        { value: 3386.38864, text: "in Hg" },
        { value: 6894.75729, text: "psi (lb/in^2)" },
        { value: 47.88025898, text: "psf (lb/ft^2)" },
        { value: 9.80665, text: "mm H20 at 4C" },
        { value: 249.08891, text: "in H2O at 4C" },
        { value: 101325, text: "atm" },
      ];
    },
  },

  methods: {
    calculateNew() {
      (this.Pascal.value = this.pressure.value * this.pressure.unit),
        (this.Bar.value = 1e-5 * this.Pascal.value),
        (this.KilogramPerSquareCentimeter.value = this.Pascal.value / 98066.5),
        (this.MillimetersOfMercury.value = 0.0075006375541921 * this.Pascal.value),
        (this.InchesOfMercury.value = 0.0002952998 * this.Pascal.value),
        (this.PoundPerSquareInch.value = 0.0001450377 * this.Pascal.value),
        (this.PoundPerSquareFoot.value = this.Pascal.value / 47.88025898),
        (this.MillimetersOfWaterColumnAt4C.value = 0.101971621 * this.Pascal.value),
        (this.InchesOfWaterColumnAt4C.value = 0.0040146308 * this.Pascal.value),
        (this.AtmosphericPressure.value = this.Pascal.value / 101325);
    },
    resetNew() {
      (this.pressure.value = null),
        (this.Pascal.value = null),
        (this.Bar.value = null),
        (this.KilogramPerSquareCentimeter.value = null),
        (this.MillimetersOfMercury.value = null),
        (this.InchesOfMercury.value = null),
        (this.PoundPerSquareInch.value = null),
        (this.PoundPerSquareFoot.value = null),
        (this.MillimetersOfWaterColumnAt4C.value = null),
        (this.InchesOfWaterColumnAt4C.value = null),
        (this.AtmosphericPressure.value = null);
    },
    formatOutput(e) {
      return isNaN(e) || "" == e || null == e ? e : e.toFixed(3);
    },
    checkValue(e) {
      return null == e || "" == e;
    },
  },
}
</script>

<style scoped>
table, th, td {
  border: 1px solid;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
  padding: 10px;
}
tr:nth-child(even) {background-color: #f2f2f2;}

</style>
