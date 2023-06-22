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
              Finish
            </button>
          </div>
        </div>
        <div v-else>
          <h2 class="font-bold text-3xl">Results</h2>
          <div class="flex justify-start space-x-4 mt-6">
            <p>
              Correct Answers:
              <span class="text-2xl text-green-700 font-bold"
              >{{ correctAnswer }}</span
              >
            </p>
            <p>
              Wrong Answers:
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
              Try again
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
          question: "Instrucțiunea __________ este utilizată pentru a programa o întârziere care să înceapă după ce treapta de intrare devine falsă.",
          answers: {a: 'Temporizare cu întârziere la deschidere/pornire',
                    b: 'Temporizare cu întârziere la închidere/oprire',
                    },
          correctAnswer: 'b'
        },
        {
          question: "Care dintre următoarele nu este o aplicație a instrucțiunii de temporizare cu întârziere la oprire?",
          answers: {a: 'Declanșarea alarmei',
                    b: 'Oprirea unui ventilator de răcire',
                    c: 'Închiderea ușii unui lift',
                    },
          correctAnswer: 'a'
        },
        {
          question: "În PLC, cronometrul poate fi alocat oricărui fișier neutilizat de la 9 la 255",
          answers: {a: 'Adevărat',
                    b: 'Fals',
          },
          correctAnswer: 'a'
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
