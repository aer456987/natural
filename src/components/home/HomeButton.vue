<template>
<div class="buttons">
  <button class="blob-btn py-2 w-100">
    {{ buttomText }}
    <span class="blob-btn__inner">
      <span class="blob-btn__blobs">
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

<style lang="scss">
$blob_cyan: #D5D83C; // #0fe0f5;
$blob_cyan_dark: #777918;
$blob_dark: #09694C; // #222;
$borderW: 6px;

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
$openSans: 'Open Sans', Helvetica, Arial, sans-serif;
.buttons {
  text-align: center;
}

.blob-btn {
  $numOfBlobs: 4;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: $blob_cyan_dark;
  background-color: transparent; // transparent
  outline: none;
  cursor: pointer;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: solid 3px $blob_cyan; // $borderW
    border-radius: 4px;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 20px;
    top: $borderW*1.5;
    border: solid 1px rgba($blob_cyan_dark, .3); // $borderW
    border-radius: 4px;
    transition: all 0.3s 0.2s;
    z-index: -2;
  }

  &:hover {
    color: $blob_dark;

    &:after {
      left: 0;
      top: 0;
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
    height: 100%;
    filter: url('#goo');
  }

  &__blob {
    position: absolute;
    width: 100% / $numOfBlobs;
    height: 100%;
    top: $borderW;
    border-radius: 100%;
    background: $blob_cyan;
    transform: translate3d(0,150%,0) scale(1.7);
    transition: transform 0.45s;

    @supports(filter: url('#goo')) {
      transform: translate3d(0,150%,0) scale(1.4);
    }

    @for $i from 1 through $numOfBlobs {
      &:nth-child(#{$i}) {
        left: ($i - 1) * (120% / $numOfBlobs);
        transition-delay: ($i - 1) * 0.08s;
      }
    }

    .blob-btn:hover & {
      transform: translateZ(0) scale(1.7);

      @supports(filter: url('#goo')) {
        transform: translateZ(0) scale(1.4);
      }
    }
  }
}
</style>

<script>
export default {
  name: 'HomeButton',
  props: ['buttomText'],
};
</script>
