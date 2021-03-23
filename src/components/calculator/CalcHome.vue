<template>
  <div class="calculator">
    <div class="previous-result">{{ displayPreviousOperand }}</div>
    <div class="result">{{ currentOperand }}</div>
    <NumPad @expressionInput="Calculate" class="numpad" />
  </div>
</template>

<script>
import NumPad from "./NumPad.vue";

export default {
  name: "CalcHome",
  components: {
    NumPad
  },

  data() {
    return {
      currentOperand: "0",
      previousOperand: "0",
      displayPreviousOperand: "",
      operations: ["+", "-", "*", "/", "%"],
      operation: null,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      period: ".",
      result: 0
    };
  },

  methods: {
    Calculate(event) {
      const value = event.target.value;
      if (this.numbers.includes(parseInt(value))) {
        this.AppendNumber(value);
        return;
      } else if (this.operations.includes(value)) {
        // console.log(value);
        this.AppendOperation(value);
        return;
      }
      switch (value) {
        case ".":
          if (!this.currentOperand.includes(".")) {
            this.currentOperand = this.currentOperand + ".";
          }
          break;

        case "+/-":
          this.currentOperand = this.currentOperand * -1;
          break;

        case "=":
          switch (this.displayPreviousOperand.slice(-1)) {
            case "+":
              this.currentOperand =
                parseFloat(this.previousOperand) +
                parseFloat(this.currentOperand);
              this.currentOperand = this.currentOperand.toString();
              this.previousOperand = "0";
              this.displayPreviousOperand = "";
              break;

            case "-":
              this.currentOperand =
                parseFloat(this.previousOperand) -
                parseFloat(this.currentOperand);
              this.currentOperand = this.currentOperand.toString();
              this.previousOperand = "0";
              this.displayPreviousOperand = "";
              break;

            case "*":
              this.currentOperand =
                parseFloat(this.previousOperand) *
                parseFloat(this.currentOperand);
              this.currentOperand = this.currentOperand.toString();
              this.previousOperand = "0";
              this.displayPreviousOperand = "";
              break;

            case "/":
              if (this.currentOperand === "0") break;
              this.currentOperand =
                parseFloat(this.previousOperand) /
                parseFloat(this.currentOperand);
              this.currentOperand = this.currentOperand.toString();
              this.previousOperand = "0";
              this.displayPreviousOperand = "";
              break;
          }
          break;

        case "del":
          if (this.currentOperand !== "0") {
            if (this.currentOperand.length === 1) {
              this.currentOperand = "0";
              break;
            }
            this.currentOperand = this.currentOperand.slice(0, -1);
          }
          break;

        case "AC":
          this.currentOperand = "0";
          this.previousOperand = "0";
          this.displayPreviousOperand = "";
          break;

        default:
          break;
      }
    },

    AppendOperation(value) {
      if (this.previousOperand === "0") {
        this.previousOperand = this.currentOperand;
        this.currentOperand = "0";
        this.displayPreviousOperand = this.previousOperand + value;
      } else {
        if (value === "%") {
          this.previousOperand =
            (parseFloat(this.previousOperand) *
              parseFloat(this.currentOperand)) /
            100;
          this.currentOperand = "0";
          this.displayPreviousOperand = this.previousOperand + value;
          return;
        }
        switch (this.displayPreviousOperand.slice(-1)) {
          case "+":
            this.previousOperand =
              parseFloat(this.previousOperand) +
              parseFloat(this.currentOperand);
            this.currentOperand = "0";
            this.displayPreviousOperand = this.previousOperand + value;
            break;

          case "-":
            this.previousOperand =
              parseFloat(this.previousOperand) -
              parseFloat(this.currentOperand);
            this.currentOperand = "0";
            this.displayPreviousOperand = this.previousOperand + value;
            break;

          case "*":
            this.previousOperand =
              parseFloat(this.previousOperand) *
              parseFloat(this.currentOperand);
            this.currentOperand = "0";
            this.displayPreviousOperand = this.previousOperand + value;
            break;

          case "/":
            if (this.currentOperand === "0") break;
            this.previousOperand =
              parseFloat(this.previousOperand) /
              parseFloat(this.currentOperand);
            this.currentOperand = "0";
            this.displayPreviousOperand = this.previousOperand + value;
            break;
        }
      }
    },

    AppendNumber(value) {
      if (this.currentOperand === "0") {
        this.currentOperand = value;
        return;
      }
      this.currentOperand += value;
    }
  }
};
</script>

<style>
.calculator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  border: rgba(0, 0, 0, 0.8) 1px solid;
  border-radius: 10px;
  overflow: hidden;
}

.previous-result {
  color: rgb(128, 128, 128);
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  font-size: 22px;
  text-align: right;
  min-height: 48px;
}

.result {
  background-color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 30px;
  text-align: right;
}

.numpad {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  background-color: rgba(58, 113, 158, 0.8);
  padding: 10px;
  width: 100%;
}
</style>
