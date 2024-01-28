<template>
  <section class="q-mt-xl">
    <div class="row q-col-gutter-md">
      <div v-for="n in 18" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <q-card class="my-card">
          <q-img
            src="https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp" />
          <div class="absolute-bottom text-center text-subtitle2">Title</div>
        </q-card>
      </div>
    </div>
  </section>
</template>
