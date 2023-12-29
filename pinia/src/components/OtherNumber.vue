<template>
  <p>이건 OtherNumber 컴포넌트에서 불러온 Number 입니다. {{ number }}</p>
</template>

<script setup>
import { toRef } from "vue";
import { useNumberStore } from '@/stores/number';

const numberStore = useNumberStore();

const number = toRef(numberStore, 'number');
</script>
