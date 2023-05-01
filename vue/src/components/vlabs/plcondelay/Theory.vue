<template>
<div class="container">
  <p class="font-bold  text-2xl text-decoration-underline">Introduction</p>
  <p class="font-bold">TIMERS</p>
  <p>All PLC’s have timer instructions. Timers are output instructions that are internal to the programmable logic controller.
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
  <p>In the above figure , term instruction name is, timer on delay ( TON ), timer base is 1.0 seconds, timer address is T4:0, accumulated value of zero(0) and a preset value of 200.
    Each timer instruction has three very useful status bits. These bits are timer enable (E N), timer timing (TT), and timer done(DN).</p>
  <p>There are 3 types of timers: On- delay timer, Off-delay timer, and retentive timer.</p>
  <p class="font-bold">On delay timer:</p>
  <ul>
    <li>● Use this instruction to program a time delay after instructions become true.</li>
  <li>● On – delay timers are used when an action is to begin a specified time after the input becomes true. For example, a certain step in the manufacturing is to begin 45
    seconds after a signal is received from a limit switch. The 45- seconds delay is the on-delay timers preset value.</li>
  </ul>
  <p class="font-bold">Off- delay timer:</p>
  <ul>
    <li>● Off- delay timer instructions is used to program a time delay to begin after rung input goes false.</li>
  <li>● As an example, when an external cooling fan on a motor is provided, the fan has to run all the time the motor is running
    and also for certain time (say 10min) after the motor is turned off. This is a ten minute off- delay timer. The ten-minute timing period begins as soon as the motor is turned off.</li>
  </ul>
    <p class="font-bold">Retentive timer:</p>
  <ul>
    <li>● Retentive timer is a timer which retains the accumulated value in case of power loss, change of processor mode or rung state going from true to false (rung state transition).</li>
  <li>● Retentive timer can be used to track the running time of a motor for its maintenance purpose. Each time the motor is turned off,
    the timer will remember the motor’s elapsed running time. The next time the motor is turned on, the time will increase from there. This timer can be reset by using a reset instruction.</li>
  </ul>
    <p class="font-bold">Reset:</p>
  <ul>
    <li>● This instruction is used to reset the accumulated value of counter or timer.</li>
    <li>● It is used to reset a retentive timer’s accumulated value to zero.</li>
  </ul>
  <p class="font-bold">The on-delay timer instruction:</p>
  <img class="ml-96 mb-4" src="../../../views/images/plc2.gif">
  <p>The above figure is used to explain the on-delay timer instruction.</p>
  <p>Here, T4:2 represents timer file 4, timer element 2, preset value is 50, accumulated value is 0 and timer base is 1 second. Input module is in slot 1 and output module is in slot 2.</p>
    <ul>
      <li>● As long as the instruction I:1/0 is true, the on-delay timer T4:2 will increment every one second toward its preset value of 50 seconds.
        The accumulated value displays the current number of seconds that passed. When the accumulated value is equal to the preset value,
        the timer’s done bit will get energized or set. So when the timer’s done bit gets energized, the rung 003, instruction T4:3/DN becomes
        true and logical continuity is passed and the output O:2/2 gets energized.</li>
    <li>● As long as the I:1/4 is true, the timer instruction is enabled. Hence, rung 000 becomes true and logical continuity is passed and the output O:2/0 is energized.
    Note: An on-delay timer is not retentive in nature.so any loss of continuity to the timer instruction on rung 000 will cause the timer to reset itself to an accumulated value of 0.</li>
    <li>● When the timer is timing i.e rung 000 is true and accumulated value is less than preset value, timer timing bit(TT) is true. So the rung 002 becomes true i.e instruction T4:2/TT is true and output instruction O:2/1 is energized.
    Note: As long as the rung 000 is true i.e instruction I:1/0 is true, the timer instruction is considered enabled. The enable bit will be true when the timer timing bit is true.
      Timer enable bit will be set through the transition from the timer-timing bit to the timer-done bit.
      Timer enable bit is set as long as there is logical continuity through all input instructions to the timer instruction,
      no matter the relationship between the preset value and accumulated value. When the rung goes false, the enable bit is reset.</li>
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
