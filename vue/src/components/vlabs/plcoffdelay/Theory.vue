<template>
  <div class="container">
    <p class="font-bold  text-2xl text-decoration-underline">Introduction</p>
    <p class="font-bold">TIMERS</p>
    <p>All PLC’s have timer instructions. Timers are output instructions that are internal to the programmable logic
      controller.
      Timers provide timed control of the devices that they activate or de-activate.</p>

    <p class="font-bold">Basic functions of timer:</p>
    <ul>
      <li>● Timers are used to delay an action.</li>
      <li>● Timers are used to run an operation for a predetermined period of time.</li>
      <li>● Timers are also used to record the total accumulated time of continuous or intermediate events.</li>
    </ul>
    <p class="font-bold">Timer’s instructions</p>
    <p>Timers consists of following parts: timer address, preset value, timer base, and accumulated value.</p>
    <img class="ml-72" src="../../../views/images/plc1.gif">
    <p>In the above figure , term instruction name is, timer on delay ( TON ), timer base is 1.0 seconds, timer address
      is T4:0, accumulated value of zero(0) and a preset value of 200.
      Each timer instruction has three very useful status bits. These bits are timer enable (E N), timer timing (TT),
      and timer done(DN).</p>
    <p>There are 3 types of timers: On- delay timer, Off-delay timer, and retentive timer.</p>
    <p class="font-bold">Off- delay timer:</p>
    <ul>
      <li>● Off- delay timer instructions is used to program a time delay to begin after rung input goes false.</li>
      <li>● As an example, when an external cooling fan on a motor is provided, the fan has to run all the time the
        motor is running
        and also for certain time (say 10min) after the motor is turned off. This is a ten minute off- delay timer. The
        ten-minute timing period begins as soon as the motor is turned off.
      </li>
    </ul>
    <p class="font-bold">Reset:</p>
    <ul>
      <li>● This instruction is used to reset the accumulated value of counter or timer.</li>
      <li>● It is used to reset a retentive timer’s accumulated value to zero.</li>
    </ul>
    <p class="font-bold">The off-delay timer instruction:</p>
    <img class="ml-96 mb-4" src="../../../views/images/plcoff/plc2.gif">
    <p>The above figure is used to explain the off-delay timer instruction. Here, T4:2 represents timer file 4, timer element 2,
      preset value is 200, accumulated value is 0 and timer base is 1 second. Input module is in slot 1 and output module is in slot 2.</p>
    <p>As an example, consider an external cooling fan on a motor which has to run all the time when the motor is running and also for 200 seconds
      after the motor is turned off.
      For this purpose, we use 200- second off-delay timer. The 200-second timing cycle begins when the motor is turned off.</p>
    <ul>
      <li>● When the instruction I:1/0 is true, the motor is turned on i.e instruction O:2/0 becomes true. In other words, rung 000 becomes true.
        When the instruction I:1/0 is true, rung 001 becomes true, which will make the off-delay timer T4:2 enable. So as long as the instruction I:1/0
        is true, the timer enable bit, EN, is true and hence, rung 002 become true, which inturn makes the output instruction O:2/1 true. The done bit is
        set as long as the rung 001 is true i.e the done bit is set when the enable bit is set. So the rung 004 is true. Hence, the external cooling fan
        is energized i.e instruction O:2/3 is true. So at this point, both motor and external cooling fan are energized.
      </li>
      <li>● When the motor is turned off, i.e the instruction I:1/0 becomes false, the output instruction O:2/0( motor) becomes
        false and motor is turned off. When rung 001 transitions from true to false, the TOF( off-delay timer) instruction begins timing.
        The done bit and the external cooling fan( O:2/3) will still remains on, or true, for the preset value of 200 seconds. The time period between the point
        when the rung becomes false and the point when the 200 seconds preset time expires for T4:2 is called delay after the input goes false, or the off-delay.
        The timers done bit and its associated output stay true until the off-delay of 200- seconds expires. The time expires when the accumulated value reaches the
        preset value. When the input instruction I:1/0 goes from true to false, the timer enable bit (EN) is reset and timer timing bit(TT) is set. The timer will
        start timing at this point. The timer timing bit(EN) becomes true whenever the rung transitions from true to false and the accumulated value is less than
        the preset value.
        Note: The timer done bit, bit 13, is set when the rung 000 becomes true. It will remain set through the true to false transition and until the accumulated
        value is equal to the preset value. This bit is commonly used to control the other logic when an output needs to be turned-on or turned-off after its rung
        has been off for the preset time interval.
      </li>
    </ul>
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
