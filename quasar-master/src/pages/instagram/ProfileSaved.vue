<template>
  <section class="q-mt-xl">
    <div class="row q-col-gutter-md">
      <div v-for="n in 18" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora ipsa blanditiis eligendi repellendus
            hic unde
            tenetur excepturi cupiditate, placeat labore quasi facere et! Doloribus obcaecati amet quae itaque provident?
          </q-card-section>
          <q-separator dark />
          <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </section>
</template>