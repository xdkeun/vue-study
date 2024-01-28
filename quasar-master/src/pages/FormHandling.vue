<template>
  <q-page class="q-pa-xl">
    <q-form class="q-gutter-y-md">
      <q-input outlined v-model="form.title" label="제목" :rules="[(value) => !!value || '필수항목입니다']" />
      <q-input outlined v-model="form.content" label="내용" type="textarea" counter
        :rules="[value => value.length <= 50 || '최대 50자 이내로 입력하세요']" />
      <q-select outlined v-model="form.tags" :options="tagOptions" label="태그" multiple />
      <div class="flex justify-end q-gutter-x-md">
        <q-btn label="Submit" type="submit" />
        <q-btn label="Reset" type="reset" />
      </div>
    </q-form>
  </q-page>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const form = ref({
      title: '',
      content: '',
      tags: []
    });
    const tagOptions = ref([{ label: '구글', value: 'google' }, { label: '페이스북', value: 'facebook' },])
    return {
      form,
      tagOptions
    };
  },
};
</script>
