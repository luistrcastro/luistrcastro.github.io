<template>
  <div>
    <button class="numpad-item clickable" value="AC" @click="expressionInput">AC</button>
    <button class="numpad-item clickable" value="del" @click="expressionInput">del</button>
    <button class="numpad-item clickable" value="%" @click="expressionInput">%</button>
    <button class="numpad-item clickable" value="/" @click="expressionInput">/</button>
    <button class="numpad-item clickable" value="7" @click="expressionInput">7</button>
    <button class="numpad-item clickable" value="8" @click="expressionInput">8</button>
    <button class="numpad-item clickable" value="9" @click="expressionInput">9</button>
    <button class="numpad-item clickable" value="*" @click="expressionInput">*</button>
    <button class="numpad-item clickable" value="4" @click="expressionInput">4</button>
    <button class="numpad-item clickable" value="5" @click="expressionInput">5</button>
    <button class="numpad-item clickable" value="6" @click="expressionInput">6</button>
    <button class="numpad-item clickable" value="-" @click="expressionInput">-</button>
    <button class="numpad-item clickable" value="1" @click="expressionInput">1</button>
    <button class="numpad-item clickable" value="2" @click="expressionInput">2</button>
    <button class="numpad-item clickable" value="3" @click="expressionInput">3</button>
    <button class="numpad-item clickable" value="+" @click="expressionInput">+</button>
    <button class="numpad-item clickable" value="+/-" @click="expressionInput">+/-</button>
    <button class="numpad-item clickable" value="0" @click="expressionInput">0</button>
    <button class="numpad-item clickable" value="." @click="expressionInput">.</button>
    <button class="numpad-item clickable" value="=" @click="expressionInput">=</button>
  </div>
</template>

<script>
export default {
  name: "NumPad",

  methods: {
    expressionInput(e) {
      this.$emit("expressionInput", e);
    }
  }
};
</script>

<style scoped>
.numpad-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin: 3px;
  padding-top: 3px;
  height: 63px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.numpad-item:focus {
  outline: 0;
}
</style>
