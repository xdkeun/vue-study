<template>
  <div>
    <article v-for="todo in props.todos" :key="todo.id">
      <input type="text" :value="todo.content" :readonly="!isEditable(todo)" @input="updateContent(todo)" />
      <button @click="updateTodo(todo)">{{ updateText(todo) }}</button>
      <button @click="deleteTodo(todo.id)">삭제</button>
    </article>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const updates = ref([]); // 각 할일의 수정 상태 배열, 배열로 관리하는 이유는 100개의 할일이 존재하는 경우 하나만 수정해도 모든 할일이 수정 상태로 변경되는 것 방지
const emit = defineEmits(["update-todo", "delete-todo"]);

const updateContent = (todo) => {
  // input 이벤트가 발생할 때마다 todo.content를 업데이트, update시 변경된 값을 전달하기 위함
  todo.content = event.target.value;
};

const updateTodo = (todo) => {
  const index = updates.value.findIndex((item) => item.id === todo.id);
  if (index !== -1) {
    // 수정 상태 토글
    updates.value[index].editable = !updates.value[index].editable;
  } else {
    // 배열에 없으면 추가
    updates.value.push({ id: todo.id, editable: true });
  }

  // 수정 중이면서 다른 할일들은 readonly 상태로 변경
  updates.value.forEach((item) => {
    if (item.id !== todo.id && item.editable) {
      item.editable = false;
    }
  });

  // 수정 중인 상태로 업데이트
  emit('update-todo', { id: todo.id, content: todo.content });
};

// 수정 가능한지 여부를 반환하는 함수
const isEditable = (todo) => {
  const updateInfo = updates.value.find((item) => item.id === todo.id);
  return updateInfo ? updateInfo.editable : false;
};

// 수정 버튼 텍스트를 반환하는 함수
const updateText = (todo) => {
  return isEditable(todo) ? "수정 중" : "수정";
};

const deleteTodo = (id) => {
  // 삭제는 id만 전달
  emit('delete-todo', id);
};

// props 받아오기
import { defineProps } from 'vue';
const props = defineProps(["todos"]);
</script>
