<template>
  <div class="px-lg-5 py-2 py-md-5">
    <div class="position-relative m-5">
      <div class="progress">
        <div
          class="progress-bar bg-primary"
          role="progressbar"
          :style="`width: ${progressValue}%`"
          :aria-valuenow="progressValue"
          aria-valuemin="0" aria-valuemax="100"
        ></div>
      </div>
      <div
        class="custom__progress position-absolute top-0 start-0 translate-middle"
        :class="{
            'custom__progress--active' : progressValue===0,
            'bg-primary' : progressValue > 1,
          }"
      >
        <i class="bi bi-cart4"></i>
      </div>
      <div
        class="custom__progress position-absolute top-0 start-33 translate-middle"
        :class="{
            'custom__progress--active' : progressValue===33,
            'bg-primary' : progressValue > 33,
          }"
      >
        <i class="bi bi-card-list"></i>
      </div>
      <div
        class="custom__progress position-absolute top-0 start-66 translate-middle"
        :class="{
            'custom__progress--active' : progressValue===66,
            'bg-primary' : progressValue > 66,
          }"
      >
        <i class="bi bi-card-checklist"></i>
      </div>
      <div
        class="custom__progress position-absolute top-0 start-100 translate-middle"
        :class="{
            'custom__progress--active' : progressValue===100,
          }"
      >
        <i class="bi bi-credit-card"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['progressValue'],
};
</script>
