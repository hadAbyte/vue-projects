<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questionsAnswered.length }} questions
        answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, index) in questions"
      :key="question.q"
      v-show="questionsAnswered === index"
    >
      <div class="question">{{ question.q }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="answer in question.answers"
          :key="answer.text"
          @click.prevent="answerSelected(answer.is_correct)"
        >
          {{ answer.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  emits: ["question-answered"],
  props: {
    questions: {
      type: Array,
      required: true,
    },
    questionsAnswered: {
      type: Number,
      required: true,
    },
  },
  methods: {
    answerSelected(is_correct) {
      this.$emit("question-answered", is_correct);
    },
  },
};
</script>
