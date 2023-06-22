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
    <p class="font-bold">Temporizator cu întârziere la deschidere:</p>
    <ul>
      <li>● Utilizați această instrucțiune pentru a programa o întârziere după ce instrucțiunile devin adevărate.</li>
      <li>● Pornit – temporizatoarele de întârziere sunt utilizate atunci când o acțiune urmează să înceapă la o oră specificată după ce intrarea devine adevărată.
        De exemplu, un anumit pas în producție este să înceapă 45
        secunde după primirea unui semnal de la un întrerupător. Întârzierea de 45 de secunde reprezintă valoarea temporizării de întârziere la pornire presetată.

      </li>
    </ul>
    <p class="font-bold">Temporizator cu întârziere la închidere:</p>
    <ul>
      <li>● Instrucțiunile temporizatorului cu întârziere la închidere sunt utilizate pentru a programa o întârziere care să înceapă după ce introducerea treptei devine falsă.</li>
      <li>● De exemplu, când este prevăzut un ventilator de răcire extern pe un motor, ventilatorul trebuie să funcționeze tot timpul cât
        motorul merge
        și, de asemenea, pentru un anumit timp (să zicem 10 minute) după ce motorul este oprit. Acesta este un temporizator cu întârziere la închidere de zece minute.
        Perioada de timp de zece minute începe imediat ce motorul este oprit.
      </li>
    </ul>
    <p class="font-bold">Temporizator retentiv:</p>
    <ul>
      <li>● Temporizatorul remanent este un temporizator care reține valoarea acumulată în caz de pierdere de putere,
        schimbare a modului procesorului sau starea treptei care trece de la adevărat la fals (tranziție de stare a treptei).
      </li>
      <li>● Temporizatorul de retenție poate fi utilizat pentru a urmări timpul de funcționare al unui motor în scopul întreținerii acestuia.
        De fiecare dată când motorul este oprit, temporizatorul își va aminti timpul de funcționare scurs al motorului.
        Data viitoare când motorul este pornit, timpul va crește de acolo. Acest cronometru poate fi resetat folosind o instrucțiune de resetare.
      </li>
    </ul>
    <p class="font-bold">Resetare:</p>
    <ul>
      <li>● Această instrucțiune este folosită pentru a reseta valoarea acumulată a contorului sau cronometrului.</li>
      <li>● Este folosit pentru a reseta la zero valoarea acumulată a unui temporizator de reținere.</li>
    </ul>
    <p class="font-bold">Instrucțiunea temporizatorului de întârziere la pornire:</p>
    <img class="ml-96 mb-4" src="../../../views/images/plc2.gif">
    <p>Figura de mai sus este folosită pentru a explica instrucțiunile temporizatorului cu întârziere la pornire.</p>
    <p>Aici, T4:2 reprezintă fișierul temporizator 4, elementul temporizator 2, valoarea presetată este 50,
      valoarea acumulată este 0 și baza temporizatorului este de 1 secundă. Modulul de intrare este în slotul 1 și modulul de ieșire este în slotul 2.</p>
    <ul>
      <li>● Atâta timp cât instrucțiunea I:1/0 este adevărată, temporizatorul de întârziere la pornire T4:2 va crește la fiecare secundă către
        valoare prestabilită de 20 de secunde.
        Valoarea acumulată afișează numărul curent de secunde care au trecut. Când valoarea acumulată este egală cu
        valoarea prestabilită,
        bitul terminat al cronometrului va fi activat sau setat. Deci, când bitul cronometrului terminat este activat, treapta 003,
        instrucțiunea T4:3/DN devine adevărată și
        continuitatea logică este trecută și ieșirea O:2/2 este alimentată.
      </li>
      <li>● Atâta timp cât I:1/4 este adevărat, instrucțiunea temporizatorului este activată. Prin urmare, treapta 000 devine adevărată și continuitatea logică
        este trecută și ieșirea O:2/0 este alimentată.
        Notă: un temporizator cu întârziere la pornire nu este de natură retentivă, deci orice pierdere a continuității instrucțiunii temporizatorului de pe treaptă
        000 va face ca temporizatorul să se reseteze la o valoare acumulată de 0.
      </li>
      <li>● Când cronometrul este cronometrat, adică treapta 000 este adevărată și valoarea acumulată este mai mică decât valoarea prestabilită,
        cronometrarea temporizatorului
        bit(TT) este adevărată. Deci, treapta 002 devine adevărată, adică instrucțiunea T4:2/TT este adevărată și instrucțiunea de ieșire O:2/1 este
        alimentată.
        Notă: Atâta timp cât treapta 000 este adevărată, adică instrucțiunea I:1/0 este adevărată, instrucțiunea temporizatorului este considerată
        activată. Bitul de activare va fi adevărat atunci când bitul de temporizare al temporizatorului este adevărat.
        Bitul de activare al temporizatorului va fi setat prin trecerea de la bitul de temporizare la bitul de cronometru terminat.
        Bitul de activare al temporizatorului este setat atâta timp cât există continuitate logică prin toate instrucțiunile de intrare la temporizator
        instrucție,
        indiferent de relația dintre valoarea prestabilită și valoarea acumulată. Când treapta devine falsă, bitul de activare este resetat.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Teorie"
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
