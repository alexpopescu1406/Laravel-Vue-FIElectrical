<template>
  <div class="container">
    <p class="font-bold  text-2xl text-decoration-underline">Introducere</p>
    <p class="font-bold">TIMERE</p>
    <p>Toate PLC-urile au instrucțiuni de temporizare.
      Temporizatoarele oferă control temporizat al dispozitivelor pe care le activează sau le dezactivează.</p>

    <p class="font-bold">Funcțiile de bază ale instrucțiunilor de temporizare:</p>
    <ul>
      <li>● Temporizatoarele sunt folosite pentru a întârzia o acțiune.</li>
      <li>● Temporizatoarele sunt folosite pentru a rula o operațiune pentru o perioadă de timp predeterminată.</li>
      <li>● Temporizatoarele sunt, de asemenea, folosite pentru a înregistra timpul total acumulat al evenimentelor continue sau intermediare.</li>
    </ul>
    <p class="font-bold">Instrucțiunile temporizatoarelor</p>
    <p>Temporizatoarele conțin următoarele părți: adresa temporizatorului, valoarea presetată, baza temporizatorului și valoarea acumulată.</p>
    <img class="ml-72" src="../../../views/images/plc1.gif">
    <p>În figura de mai sus, termenul numele instrucțiunii este temporizator la întârziere (TON), baza temporizatorului este de 1,0 secunde, adresa temporizatorului
      este T4:0, valoarea acumulată de zero (0) și o valoare prestabilită de 200.
      Fiecare instrucțiune de cronometru are trei biți de stare foarte utili. Acești biți sunt: activarea temporizatorului (EN), sincronizarea temporizatorului (TT),
      și cronometrul gata (DN).</p>
    <p>Există 3 tipuri de temporizatoare: temporizator cu întârziere la deschidere, temporizator cu întârziere la închidere și temporizator retentiv.</p>
    <p class="font-bold">Temporizator cu întârziere la închidere:</p>
    <ul>
      <li>● Instrucțiunile temporizatorului cu întârziere la închidere sunt utilizate pentru a programa o întârziere care să înceapă după ce introducerea treptei devine falsă.</li>
      <li>● De exemplu, când este prevăzut un ventilator de răcire extern pe un motor, ventilatorul trebuie să funcționeze tot timpul cât
        motorul merge
        și, de asemenea, pentru un anumit timp (să zicem 10 minute) după ce motorul este oprit. Acesta este un temporizator cu întârziere la închidere de zece minute.
        Perioada de timp de zece minute începe imediat ce motorul este oprit.
      </li>
    </ul>
    <p class="font-bold">Resetare:</p>
    <ul>
      <li>● Această instrucțiune este folosită pentru a reseta valoarea acumulată a contorului sau cronometrului.</li>
      <li>● Este folosit pentru a reseta la zero valoarea acumulată a unui temporizator de reținere.</li>
    </ul>
    <p class="font-bold">Instrucțiunile temporizării cu întârziere la închidere:</p>
    <img class="ml-96 mb-4" src="../../../views/images/plcoff/plc2.gif">
    <p>Figura de mai sus este folosită pentru a explica instrucțiunile temporizatorului cu întârziere la închidere. Aici, T4:2 reprezintă fișierul temporizator 4,
      elementul temporizator 2, valoarea presetată este 200,
      valoarea acumulată este 0 și baza temporizatorului este de 1 secundă. Modulul de intrare este în slotul 1 și modulul de ieșire este în slotul 2.</p>
    <p>De exemplu, considerăm un ventilator de răcire extern pe un motor care trebuie să funcționeze tot timpul atunci când motorul funcționează și,
      de asemenea, timp de 200 de secunde după ce motorul este oprit. În acest scop, folosim un temporizator cu întârziere la oprire de 200 de secunde.
      Ciclul de temporizare
      de 200 de secunde începe când oprim motorul.</p>
    <ul>
      <li>● Când instrucțiunea I:1/0 este adevărată, motorul este pornit, adică instrucțiunea O:2/0 devine adevărată.
        Când instrucțiunea I:1/0 este adevărată, treapta 001 devine adevărată, ceea ce va activa temporizatorul cu întârziere la oprire T4:2. Deci,
        atâta timp cât instrucțiunea I:1/0 este adevărată, bitul de activare al temporizatorului, EN, este adevărat și, prin urmare, treapta 002 devine adevărată,
        ceea ce face ca instrucțiunea de ieșire O:2/1 să fie adevărată. Bitul "terminat" este setat atâta timp cât treapta 001 este adevărată.
        Deci, în acest moment, atât motorul, cât și ventilatorul extern de răcire sunt alimentate.
      </li>
      <li>● Când motorul este oprit, adică instrucțiunea I:1/0 devine falsă, instrucțiunea de ieșire O:2/0(motor) devine
        falsă. Când treapta 001 trece de la adevărat la fals, instrucțiunea TOF (temporizator cu întârziere la oprire) începe temporizarea.
        Bit-ul terminat și ventilatorul extern de răcire (O:2/3) vor rămâne în continuare aprinse, pentru valoarea presetată de 200 de secunde.
        Perioada de timp dintre punctul
        în care treapta devine falsă și punctul în care expiră timpul prestabilit de 200 de secunde pentru T4:2 se numește întârziere după ce intrarea devine falsă sau
        întârziere la oprire.
        Bitul de temporizare terminat și ieșirea asociată acestuia rămân valabile până când expiră întârzierea la oprire de 200 de secunde. Timpul expiră când valoarea
        acumulată atinge valoarea prestabilită. Când instrucțiunea de intrare I:1/0 trece de la adevărat la fals, bitul de activare a temporizatorului (EN) este resetat și bitul de
        temporizare a temporizatorului (TT) este setat. Cronometrul va
        începe cronometrarea în acest moment. Bitul de sincronizare a temporizatorului (EN) devine adevărat ori de câte ori treapta trece de la adevărat la fals
        și valoarea acumulată este mai mică decât valoarea prestabilită.
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
