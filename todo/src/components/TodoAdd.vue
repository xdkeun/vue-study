<template>
  <div>
    <input type="text" placeholder="할 일을 추가하세요" v-model="addContent">
    <button @click="addTask">ADD</button>
  </div>
  <p v-if="warning">할 일을 입력하고 추가하세요</p>

  <!-- props를 써먹습니다 -->
  <p>{{ props.propsValue }}, {{ props.secondPropsValue }}</p>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from "axios"

const addContent = ref("");
const warning = ref(false);
const addTask = async () => {
  if (addContent.value.length === 0) {
    warning.value = true;
    return
  }
  warning.value = false;
  try {
    await axios.post('http://localhost:4000/todos', {
      content: addContent.value,
    });
  } catch (error) {
    console.error('Add Error:', error);
  }
};

// addContent 값이 변경될 때마다 로직을 수행
watch(addContent, (newValue, oldValue) => {
  console.log('addContent 의 값이', oldValue, '에서', newValue, '로 변했습니다');
});

//props를 받아옵니다
import { defineProps } from 'vue';
const props = defineProps(["propsValue", "secondPropsValue"])
</script>
