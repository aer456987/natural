<template>
  <ul
    class="row list-unstyled height_xl overflow-auto"
    @change="$emit('updataImgDatas', tempMainImg, tempImgs)"
  >
    <li class="col-6 col-md-3">
      <label
        for="modalImg"
        class="form-label p-1 m-0"
      >主要圖片</label>
      <input
        type="text"
        id="modalImg"
        name="主要圖片網址"
        class="form-control mb-2"
        placeholder="請輸入主圖網址"
        v-model="tempMainImg"
      />
      <img
        :src="tempMainImg"
        alt="主要圖片"
        class="w-100"
      />
    </li>

    <template v-if="tempImgs">
      <li
        v-for="(img, key) in tempImgs"
        :key="`多圖_${key+1}`"
        class="col-6 col-md-3"
      >

      <label
        :for="`moreImg_${key+1}`"
        class="form-label p-1 m-0"
      >{{ `圖片${key+1}` }}</label>
      <input
        type="text"
        :id="`moreImg_${key+1}`"
        :name="`圖片網址_${key+1}`"
        class="form-control mb-2"
        placeholder="請輸入圖片網址"
        v-model="tempImgs[key]"
      />

      <span class="position-relative">
        <i
          class="bi bi-x-lg fs-6
            btn btn-dark rounded-0
            p-1 position-absolute end-0"
          @click="tempImgs.splice(key, 1)"
        ></i>

        <img
          :src="img"
          :alt="`圖片_${key+1}`"
          class="w-100 mb-2"
        />
      </span>

      </li>
    </template>
  </ul>

  <div class="row">
    <span class="col-6 mb-1">
      <UpdateFile></UpdateFile>
    </span>

<!-- this.tempProduct.imagesUrl.push('123'); -->
    <span class="col-6 mb-1">
      <button
        class="btn btn-brown w-100"
        @click="tempImgs.push('')"
        >
      <!-- , tempMainImg, tempImgs -->
        新增圖片
      </button>
    </span>
  </div>

</template>

<script>
import UpdateFile from '@/components/UpdateFile.vue';

export default {
  name: 'DashboarRenderImgs',
  data() {
    return {
      tempMainImg: '',
      tempImgs: [],
    };
  },
  props: ['productMainImg', 'productImgs'],
  components: { UpdateFile },
  watch: {
    productMainImg() {
      this.tempMainImg = this.productMainImg;
    },
    productImgs() {
      this.tempImgs = this.productImgs;
    },
  },
  emits: ['updataImgDatas'],
  methods: {
  },
  mounted() {
  },
};
</script>
