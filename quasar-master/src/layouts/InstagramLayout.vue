<template>
  <q-layout padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-xs flex-flex-center">
        <q-avatar size="150px">
          <q-img
            src="https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp" />
        </q-avatar>
      </div>
      <div class="col-grow column justify-between">
        <div class="row justify-between items-center">
          <span class="text-h4">instagram_id</span>
          <div class="q-gutter-x-sm">
            <q-btn>프로필 편집</q-btn>
            <q-btn>설정</q-btn>
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 999</span>
          <span>팔로워 666</span>
          <span>팔로우 333</span>
        </div>
        <div>
          <div>사용자 이름</div>
          <div>안녕하세요 계정 소개입니다</div>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll">
        <article class="flex column items-center" v-for="n in 5" :key="n">
          <q-avatar size="70px">
            <q-img
              src="https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp" />
          </q-avatar>
          <div>제목</div>
        </article>
      </div>
    </section>
    <q-tabs no-caps class="shadow-2 q-my-lg">
      <q-route-tab icon="mail" to="/instagram" exact label="게시글" />
      <q-route-tab icon="mail" to="/instagram/saved" exact label="저장됨" />
      <q-route-tab icon="mail" to="/instagram/tagged" exact label="태그됨" />
    </q-tabs>
    <router-view></router-view>
  </q-layout>
</template>