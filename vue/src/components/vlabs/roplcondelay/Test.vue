<template>
  <div class="antialiased text-gray-700 ">
    <div class="flex w-full justify-center items-center" id="app">
      <div class="w-full max-w-xl">
        <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
          <div v-if="index < count">
            <p class="text-2xl font-bold">
              {{ questions[index]['question'] }}
            </p>
            <label
              :for="key"
              class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
              v-for="answer,key in questions[index]['answers']"
              :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''},
                        {'bg-red-200' : selectedAnswer == key},
                        {'bg-green-200' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}"
            >
              <input
                type="radio"
                :id="key"
                class="hidden"
                :value="key"
                @change="answered($event)"
                v-model="selectedAnswer"
                :disabled="selectedAnswer != ''"
              />
              {{ answer }}
            </label>
            <div class="mt-6 flow-root">
              <button
                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                v-show="selectedAnswer != '' && index < count-1"
                @click="nextQuestion"
              >
                Next &gt;
              </button>
              <button
                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                v-show="selectedAnswer != '' && index == count-1"
                @click="showResults"
              >
                Finalizează
              </button>
            </div>
          </div>
          <div v-else>
            <h2 class="font-bold text-3xl">Results</h2>
            <div class="flex justify-start space-x-4 mt-6">
              <p>
                Răspunsuri corecte:
                <span class="text-2xl text-green-700 font-bold"
                >{{ correctAnswer }}</span
                >
              </p>
              <p>
                Răspunsuri greșite:
                <span class="text-2xl text-red-700 font-bold"
                >{{ wrongAnswer }}</span
                >
              </p>
            </div>
            <div class="mt-6 flow-root">
              <button
                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                @click="resetQuiz"
              >
                Încearcă din nou
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      index: 0,
      selectedAnswer: '',
      correctAnswer: 0,
      wrongAnswer: 0,
      count: 3,
      questions: [
        {
          question: "Temporizatoarele sunt __________?",
          answers: {a: 'Folosit pentru a întârzia o acțiune',
            b: 'Folosite pentru a rula o operațiune pentru o perioadă de timp predeterminată',
            c: 'Folosite pentru a înregistra timpul total acumulat al evenimentelor continue sau intermediare',
            d: 'Toate de mai sus'},
          correctAnswer: 'd'
        },
        {
          question: "________ sunt folosite atunci când o acțiune urmează să înceapă la un timp specificat după ce intrarea devine adevărată.",
          answers: {a: 'Temporizatoare cu întârziere la oprire',
            b: 'Temporizatoare cu întârziere la pornire',
          },
          correctAnswer: 'b'
        },
        {
          question: "Valoarea acumulată a temporizatorului 12, în fișierul de temporizator implicit 4, este adresată ca ________ .\n",
          answers: {a: 'T4:9.ACC',
            b: 'T4:9/ACC',
            c: 'T9:4/ACC',
            d: 'T9:4.ACC',
          },
          correctAnswer: 'd'
        },
      ]
    }
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value
      if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
        this.correctAnswer++
      else
        this.wrongAnswer++
    },
    nextQuestion() {
      this.index++
      this.selectedAnswer = ''
    },
    showResults() {
      this.index++
    },
    resetQuiz() {
      this.index = 0
      this.selectedAnswer = ''
      this.correctAnswer = 0
      this.wrongAnswer = 0
    }
  }
}
</script>

<style scoped>

</style>
