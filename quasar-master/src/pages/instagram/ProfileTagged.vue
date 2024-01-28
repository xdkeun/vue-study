<template>
  <section class="q-mt-xl">
    <div class="row q-col-gutter-md">
      <div v-for="n in 18" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit culpa voluptates, nostrum aliquid dolorum
            neque
            reiciendis asperiores assumenda hic reprehenderit ratione, dignissimos, doloremque quos voluptas illo
            voluptatibus
            expedita cumque accusantium.
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>