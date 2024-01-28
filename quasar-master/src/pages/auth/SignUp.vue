<template>
  <q-page>
    <div class="row window-height">
      <div class="col" :class="leftColStyle">
        <q-img
          src="https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp"
          class="window-height" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6 text-weight-bold">회원가입</div>
            <div class="text-grey text-sub-title2">감사합니다</div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-y-lg">
                <q-input filled label="이메일" hint="이메일을 입력하세요"></q-input>
                <q-input filled label="비밀번호" type="password" hint="영문 대/소문자 포함 8자 이상"></q-input>
                <q-input filled label="나이" prefix="만 나이" suffix="세" input-class="text-right"></q-input>
                <q-input filled label="카드" mask="#### - #### - #### - ####" fill-mask="#" unmasked-value></q-input>
              </div>
              <q-btn class="full-width q-mt-lg" unelevated color="primary" size="lg" label="회원가입"></q-btn>
              <q-btn class="full-width q-mt-md" flat label="로그인" to="/auth/sign-in"></q-btn>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed } from 'vue';
import { useQuasar } from "quasar"
export default {
  setup() {
    const $q = useQuasar()
    const leftColStyle = computed(() => ({ hidden: $q.screen.lt.md }));
    return {
      leftColStyle,
    };
  },
};
</script>
