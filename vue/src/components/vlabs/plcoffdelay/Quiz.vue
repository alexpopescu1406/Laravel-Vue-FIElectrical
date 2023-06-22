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
          question: "__________ instruction is used to program a time delay to begin after rung input goes false.",
          answers: {a: 'On-delay timer',
                    b: 'Off-delay timer',
                    },
          correctAnswer: 'b'
        },
        {
          question: "In timer element, word 0 is for ________",
          answers: {a: 'Preset value',
                    b: 'Accumulated value',
                    c: 'Status bits',
                    },
          correctAnswer: 'c'
        },
        {
          question: "In PLC series, timer can be assigned for any unused file from 9 to 255",
          answers: {a: 'True',
                    b: 'False',
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
