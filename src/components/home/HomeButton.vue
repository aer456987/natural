<template>
  <!-- 首頁按鈕 -->
  <div class="buttons bounce_animetion_slow">
    <button class="blob-btn w-100">
      <router-link
        :to="linkPath"
        class="d-block py-2"
      >
        {{ buttomText }}
      </router-link>
      <span class="blob-btn__inner">
        <span class="blob-btn__blobs">
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
        </span>
      </span>
    </button>
  </div>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    class="d-none"
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur
          in="SourceGraphic"
          result="blur"
          stdDeviation="10"
        ></feGaussianBlur>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"
        ></feColorMatrix>
        <feBlend
          in2="goo"
          in="SourceGraphic"
          result="mix"
        ></feBlend>
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'HomeButton',
  props: ['buttomText', 'linkPath'],
};
</script>

<style lang="scss">
$blob_primary: #1d7e63; // #0fe0f5; #589985
$blob_secondary: #d5d83c;
$blob_light: white;
$blob_dark: red;

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.buttons {
  text-align: center;
}

.blob-btn {
  $numOfBlobs: 5;
  position: relative;
  border: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 900;
  background-color: $blob_primary; // transparent
  outline: none;
  cursor: pointer;
  z-index: 1;

  a{
    color: $blob_light;
    &:hover{
      color: $blob_primary;
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 15px;
    border: solid 1px rgba($blob_primary, .1); // $ ; $blob_secondary $blob_primary
    border-radius: 4px;
    background: rgba($blob_primary, .1); // $blob_secondary
    transition: all 0.3s 0.2s;
    z-index: -2;
  }

  &:hover {
    color: $blob_primary;

    &:after {
      top: 8px;
      left: 13px;
      border: rgba($blob_secondary, .5);
      background: rgba($blob_secondary, .3);
      transition: all 0.3s;
    }
  }

  &__inner {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: -1;
  }

// additional container created,
// because in FF blobs are breaking overflow:hidden of element with svg gooey filter
  &__blobs {
    position: relative;
    display: block;
    height: 90%;
    filter: url('#goo');
  }

  &__blob {
    position: absolute;
    width: 70%;
    height: 150%;
    top: 6px;
    border-radius: 100%;
    background: $blob_secondary;
    transform: translate3d(0, 100%, 0) scale(1.7);
    transition: transform 0.25s;

    @supports(filter: url('#goo')) {
      transform: translate3d(0, 120%, 0) scale(2);
    }

    @for $i from 1 through $numOfBlobs {
      &:nth-child(#{$i}) {
        left: ($i - 2 ) * (120% / $numOfBlobs);
        transition-delay: ($i - 1) * 0.08s;
      }
    }

    .blob-btn:hover & {
      transform: translateZ(1) scale(3);

      @supports(filter: url('#goo')) {
        transform: translateZ(0) scale(1.4);
      }
    }
  }
}
</style>
