<template>
  <div>
    <p>Number: {{ number }}</p>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <div>
      <span>한번에 더하기</span>
      <input type="number" placeholder="몇 더할래?" v-model="customNumber">
      <button @click="customPlus">+</button>
    </div>
  </div>
  <OtherNumber />
</template>

<script setup>
import { ref } from "vue";
import { useNumberStore } from '@/stores/number';
import OtherNumber from "@/components/OtherNumber"
const numberStore = useNumberStore();

const number = ref(numberStore.number);
const customNumber = ref(0)

const plus = () => {
  numberStore.plus();
  number.value = numberStore.number;
};

const minus = () => {
  numberStore.minus();
  number.value = numberStore.number;
};

const customPlus = () => {
  numberStore.customPlus(customNumber.value);
  number.value = numberStore.number;
  customNumber.value = 0;

}
</script>

