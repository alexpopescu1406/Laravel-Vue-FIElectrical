<template>
<div class="container">
  <div class="font-bold text-2xl text-start text-decoration-underline">Introduction</div>
  <p>In the ward-leonard method, the speed control of D.C. motor can be obtained by varying the applied voltage to the armature.
    In this method M is the main D.C. motor whose speed is to be controlled, and G is a separately excited D.C. generator which is driven by a 3-phase induction motor.
    The combination of ac driving motor and the dc generator is called the motor-generator set.</p>

  <div class="font-bold text-2xl text-start text-decoration-underline">Speed control by varying armature resistance</div>
  <p>The speed of a D.C. motor is directly proportional to the back e.m.f and inversely to the net flux per pole Ф,If brush contact drop is neglected i.e</p>

  <p class="text-center font-bold">N = (V-IaRa)/kФ</p>
  <p>Where,</p>
<ul>
  <li>N = Speed in rpm</li>
  <li>V = voltage applied across armature circuits</li>
  <li>Ra = armature resistance, this includes the series field and interpole winding resistance if in circuit.</li>
  <li>Ia = armature current,</li>
  <li>K = a constant</li>
</ul>


  <p>Thus, the speed of a D.C motor may be varied by either of the following adjustments:</p>
<ul>
  <li>1. Changing the flux per pole Ф, by varying the field current,</li>
  <li>2. Changing external resistance in the armature circuit,</li>
  <li>3. Changing the applied voltage V.( Ward-Leonard speed control method )</li>
</ul>
  <div class="font-bold text-2xl text-start text-decoration-underline">Ward-Leonard System:</div>
  <img class="ml-72" src="../../../views/images/ward.jpg">
</div>
</template>

<script>
export default {
  name: "Theory"
}
</script>

<style scoped>
p {
  text-align: start;
  font-size: large;
}
ul {
  text-align: start;
  font-size: large;
}
</style>
