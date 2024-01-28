<template>
  <q-page class="flex flex-center">
    <q-card flat :style="{ minWidth: '400px' }">
      <q-card-section>
        <div class="text-h6 text-weight-bold">로그인</div>
        <div class="text-grey text-sub-title2">감사합니다</div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <div class="q-gutter-y-lg">
            <q-input filled label="이메일" hint="이메일을 입력하세요"></q-input>
            <q-input filled label="비밀번호" type="password" hint="영문 대/소문자 포함 8자 이상"></q-input>
          </div>
          <q-btn class="full-width q-mt-lg" unelevated color="primary" size="lg" label="로그인"></q-btn>
          <q-btn class="full-width q-mt-md" flat label="회원가입" to="/auth/sign-up"></q-btn>
          <q-btn class="full-width q-mt-xs" flat label="대시보드" to="/"></q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>