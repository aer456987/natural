<template>
  <!-- 進度條 -->
  <div class="px-lg-5 py-5">
    <div class="position-relative m-5">
      <div class="progress">
        <div
          class="progress-bar bg-primary"
          role="progressbar"
          :style="`width: ${progress}%`"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div
        class="
          position-absolute
          top-0
          start-0
          translate-middle
          progress_style
        "
        :class="{ 'progress_active' : progress===0, 'bg-primary' : progress > 1 }"
      >
        <i class="bi bi-cart4"></i>
      </div>
      <div
        class="
          position-absolute
          top-0
          start-33
          translate-middle
          progress_style
        "
        :class="{ 'progress_active' : progress===33, 'bg-primary' : progress > 33 }"
      >
        <i class="bi bi-card-list"></i>
      </div>
      <div
        class="
          position-absolute
          top-0
          start-66
          translate-middle
          progress_style
        "
        :class="{ 'progress_active' : progress===66, 'bg-primary' : progress > 66 }"
      >
        <i class="bi bi-card-checklist"></i>
      </div>
      <div
        class="
          position-absolute
          top-0
          start-100
          translate-middle
          progress_style
        "
        :class="{ 'progress_active' : progress===100 }"
      >
        <i class="bi bi-credit-card"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['progress'],
};
</script>
