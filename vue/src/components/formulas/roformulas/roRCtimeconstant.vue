<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-8">
      <div id="rc-time-constant-calculator">
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label mb-4">Rezistența (R) :</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="resistance.value" :disabled="resistance.disabled" type="number" class="form-control text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="resistance.unit" @change="resistance.disabled ? convert('resistance', resistance.value)
                      : null" class="form-control">
                <option v-for="unit in ohmUnits" :key="unit.text" :value="unit.text" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label mb-4">Capacitanță (C):</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="capacitance.value" :disabled="capacitance.disabled" type="number" class="form-control text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="capacitance.unit" @change="capacitance.disabled ? convert('capacitance', capacitance.value)
                       : null" class="form-control">
                <option v-for="unit in faradUnits" :key="unit.text" :value="unit.text" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <label class="control-label mb-4">Constanta de timp:</label>
            </div>
            <div class="col-sm-6 col-xs-12">
              <input v-model="timeConstant.value" :disabled="timeConstant.disabled" type="number" class="form-control text-center" />
            </div>
            <div class="col-sm-2">
              <select v-model="timeConstant.unit" @change="timeConstant.disabled ? convert('time', timeConstant.value)
                      : null" class="form-control">
                <option v-for="unit in timeUnits" :key="unit.text" :value="unit.text" v-text="unit.text"></option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4 col-xs-12"></div>
            <div class="col-sm-6 col-xs-12">
              <button :disabled="disabled" @click="calculate" class="btn btn-primary mb-4">
                Calculează
              </button>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>

  <div class="container">
    <p class="text-xl">
      Rata de încărcare și descărcare a unei rețele RC sunt caracterizate de constanta de timp τ ,
      care este calculată folosind ecuația:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula" />
    </div>
    <p class="text-xl">
      Unde:
    </p>
      <ul class="text-xl">
        <li>τ este constanta de timp în s</li>
        <li>R este rezistența în Ω</li>
        <li>C este capacitanța în F</li>
      </ul>
    <p class="text-xl">
      Tensiunea pe condensator pe măsură ce se încarcă în timp este dată de ecuația:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula2" />
    </div>
    <p class="text-xl">
      Unde:
    </p>
    <ul class="text-xl">
      <li>V<sub>C</sub> este tensiunea pe condensator în V</li>
      <li>V<sub>S</sub> este tensiunea sursei în V</li>
      <li>t este timpul de la închiderea comutatorului în s</li>
      <li>τ este constanta RC în s</li>
    </ul>
    <p class="text-xl">
      Folosind această ecuație, putem construi următorul tabel pentru a vedea cum se modifică tensiunea pe condensator în timp.
    </p>
    <p class="text-md text-center italic"> <b>Tabel 1.</b> Valori de încărcare a tensiunii pentru o rețea din seria RC.
    </p>
      <table class="mb-4" align="center" border="1" cellpadding="1" cellspacing="1" style="width:500px">
        <thead>
        <tr>
          <th scope="col">Rația (t/RC)</th>
          <th scope="col">1</th>
          <th scope="col">2</th>
          <th scope="col">3</th>
          <th scope="col">4</th>
          <th scope="col">5</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="text-center">V<sub>c</sub> (% din V<sub>s</sub>)</td>
          <td class="text-center">63.21</td>
          <td class="text-center">86.47</td>
          <td class="text-center">95.02</td>
          <td class="text-center">98.17</td>
          <td class="text-center">99.33</td>
        </tr>
        </tbody>
      </table>
    <p class="text-xl">
      După o constantă de timp, condensatorul s-a încărcat la 63,21% din ceea ce va fi valoarea sa finală, complet încărcată.
      După o perioadă de timp egală cu cinci constante de timp, condensatorul ar trebui să fie încărcat la peste 99%.
      Putem vedea cum tensiunea condensatorului crește cu timpul în Figura 2.
    </p>
    <img class="h-[500px] pl-72 d-flex justify-content-center align-items-center text-center"
         src="https://www.allaboutcircuits.com/uploads/articles/RC-circuit-charging-curve_1.jpg">
    <p class="text-md italic text-center">
      <b>Figura 2.</b> Încărcarea tensiunii condensatorului în timp într-un circuit de rețea RC în serie.
    </p>
    <p class="text-xl">
      Ca un ghid general, trei constante de timp (95%) sunt adesea considerate încărcate. Cu toate acestea, pentru circuitele de înaltă precizie,
      cum ar fi convertoarele analog-digitale (CAD) cu mulți biți de rezoluție, perioada de încărcare trebuie
      să crească pentru a elimina această eroare de încărcare „timp de stabilire” din a afecta acuratețea.
    </p>
    <p class="text-3xl font-extrabold">
      Caracteristicile de descărcare ale unui circuit RC în serie
    </p>
    <img class="pl-72 d-flex justify-content-center text-center align-items-center mb-4"
         src="https://www.allaboutcircuits.com/uploads/articles/Figure_3._A_series_RC_network_discharging_circuit_@300x-100_.jpg">
    <p class="text-md italic text-center"><b>Figura 3.</b> Un circuit de descărcare a rețelei RC în serie</p>
    <p class="text-xl">
      La descărcarea acestei rețele RC în serie, constanta de timp este aceeași, dar ecuația de descărcare exponențială este dată de:
    </p>
    <div class="d-flex text-2xl mb-4 mt-4 justify-content-center align-items-center">
      <vue-mathjax :formula="formula3" />
    </div>
    <p class="text-xl">
      Unde:<br>
      V<sub>C0</sub>
      este tensiunea inițială a condensatorului la momentul = 0 înainte de a închide comutatorul.<br>
      Următorul tabel oferă procentele de descărcare în timp pentru circuitul serie RC.
    </p>
    <table class="mb-4" align="center" border="1" cellpadding="1" cellspacing="1" style="width:500px">
      <thead>
      <tr>
        <th scope="col">Rația (t/RC)</th>
        <th scope="col">1</th>
        <th scope="col">2</th>
        <th scope="col">3</th>
        <th scope="col">4</th>
        <th scope="col">5</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-center">V<sub>c</sub> (% din V<sub>s</sub>)</td>
        <td class="text-center">36.79</td>
        <td class="text-center">13.53</td>
        <td class="text-center">4.98</td>
        <td class="text-center">1.83</td>
        <td class="text-center">0.67</td>
      </tr>
      </tbody>
    </table>
    <p class="text-xl">Putem vedea cum tensiunea condensatorului scade cu timpul în Figura 4.
    </p>
    <img class="pl-72 h-[500px] d-flex justify-content-center text-center align-items-center mb-4"
        src="https://www.allaboutcircuits.com/uploads/articles/RC-circuit-discharge-curve.jpg">
    <p class="text-md text-center italic"> <b>Tabel 4.</b>Tensiunea condensatorului se descarcă în timp într-un circuit RC în serie.</p>
  </div>
</template>

<script>
export default {
  name: "RCtimeconstant",
  data() {
    return {
      capacitance: {value: null, unit: "F", disabled: !1},
      resistance: {value: null, unit: "Ω", disabled: !1},
      timeConstant: {value: null, unit: "s", disabled: !1},
      showAdditionalResults: !1,
      formula: '$$\\tau = R · C$$',
      formula2: '$$V_C = V_S · (1 - e^{(\\frac{-t}{\\tau})})$$',
      formula3: '$$V_C = V_{C0} · (e^{(\\frac{-t}{\\tau})})$$',
    }
  },
  computed: {
    ohmUnits() {
      return [
        { value: 0.001, text: "mΩ" },
        { value: 1, text: "Ω" },
        { value: 1e3, text: "kΩ" },
        { value: 1e6, text: "MΩ" },
        { value: 1e9, text: "GΩ" },
      ];
    },
    faradUnits() {
      return [
        { value: 1e-12, text: "pF" },
        { value: 1e-9, text: "nF" },
        { value: 1e-6, text: "µF" },
        { value: 0.001, text: "mF" },
        { value: 1, text: "F" },
      ];
    },
    timeUnits() {
      return [
        { value: 1e-12, text: "ps" },
        { value: 1e-9, text: "ns" },
        { value: 1e-6, text: "us" },
        { value: 0.001, text: "ms" },
        { value: 1, text: "s" },
      ];
    },
    disabled() {
      var e = this.checkValue(this.capacitance.value) ? 1 : 0;
      return (e = this.checkValue(this.resistance.value) ? e + 1 : e), (e = this.checkValue(this.timeConstant.value) ? e + 1 : e) > 1;
    },
  },
  watch: {
    capacitance: {
      handler(e) {
        this.checkValue(e.value) && !this.capacitance.disabled
          ? ((this.resistance.disabled = !1), (this.timeConstant.disabled = !1), (this.capacitance.disabled = !1))
          : this.checkValue(this.resistance.value) && !this.checkValue(this.timeConstant.value)
            ? (this.resistance.disabled = !0)
            : this.checkValue(this.timeConstant.value) && !this.checkValue(this.resistance.value) && (this.timeConstant.disabled = !0);
      },
      deep: !0,
      nextTick: !0,
    },
    resistance: {
      handler(e) {
        this.checkValue(e.value) && !this.resistance.disabled
          ? ((this.capacitance.disabled = !1), (this.timeConstant.disabled = !1), (this.resistance.disabled = !1))
          : this.checkValue(this.capacitance.value) && !this.checkValue(this.timeConstant.value)
            ? (this.capacitance.disabled = !0)
            : this.checkValue(this.timeConstant.value) && !this.checkValue(this.capacitance.value) && (this.timeConstant.disabled = !0);
      },
      deep: !0,
      nextTick: !0,
    },
    timeConstant: {
      handler(e) {
        this.checkValue(e.value) && !this.timeConstant.disabled
          ? ((this.capacitance.disabled = !1), (this.resistance.disabled = !1), (this.timeConstant.disabled = !1))
          : this.checkValue(this.capacitance.value) && !this.checkValue(this.resistance.value)
            ? (this.capacitance.disabled = !0)
            : this.checkValue(this.resistance.value) && !this.checkValue(this.capacitance.value) && (this.resistance.disabled = !0);
      },
      deep: !0,
      nextTick: !0,
    },
  },
  methods: {
    calculate() {
      var e,
        t,
        n,
        r,
        i,
        a,
        o = this;
      this.timeConstant.disabled
        ? ((r = this.ohmUnits.filter(function (e) {
          return e.text == o.resistance.unit;
        })[0]),
          (i = this.faradUnits.filter(function (e) {
            return e.text == o.capacitance.unit;
          })[0]),
          (a = this.timeUnits.filter(function (e) {
            return e.text == o.timeConstant.unit;
          })[0]),
          (e = this.capacitance.value * i.value),
          (n = (t = this.resistance.value * r.value) * e),
          (this.timeConstant.value = this.roundTo(n / a.value, 3).toFixed(3)))
        : this.capacitance.disabled
          ? ((r = this.ohmUnits.filter(function (e) {
            return e.text == o.resistance.unit;
          })[0]),
            (i = this.faradUnits.filter(function (e) {
              return e.text == o.capacitance.unit;
            })[0]),
            (a = this.timeUnits.filter(function (e) {
              return e.text == o.timeConstant.unit;
            })[0]),
            (t = this.resistance.value * r.value),
            (e = (n = this.timeConstant.value * a.value) / t),
            (this.capacitance.value = this.roundTo(e / i.value, 3).toFixed(3)))
          : this.resistance.disabled &&
          ((r = this.ohmUnits.filter(function (e) {
            return e.text == o.resistance.unit;
          })[0]),
            (i = this.faradUnits.filter(function (e) {
              return e.text == o.capacitance.unit;
            })[0]),
            (a = this.timeUnits.filter(function (e) {
              return e.text == o.timeConstant.unit;
            })[0]),
            (e = this.capacitance.value * i.value),
            (t = (n = this.timeConstant.value * a.value) / e),
            (this.resistance.value = this.roundTo(t / r.value, 3).toFixed(3)));
    },
    convert(e) {
      switch (e) {
        case "time":
          (this.timeConstant.value = null), this.calculate();
          break;
        case "resistance":
          (this.resistance.value = null), this.calculate();
          break;
        case "capacitance":
          (this.capacitance.value = null), this.calculate();
      }
    },
    roundTo(e, t) {
      void 0 === t && (t = 0);
      var n = Math.pow(10, t);
      return (e = parseFloat((e * n).toFixed(11))), Math.round(e) / n;
    },
    checkValue(e) {
      return null == e || "" == e;
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
  border: 1px solid;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
  padding: 10px;
}
tr:nth-child(even) {background-color: #f2f2f2;}
</style>
