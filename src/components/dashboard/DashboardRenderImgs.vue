<template>
  <Form
    ref="productImgsForm"
    v-slot="{ errors }"
  >
    <ul
      class="row list-unstyled height-xl overflow-auto"
      @change="$emit('updataImgDatas', tempMainImg, tempImgs)"
    >
      <li class="col-6 col-md-3">
        <label
          for="modalImg"
          class="form-label p-1 m-0"
        >
          主要圖片<span class="text-danger fw-bold">*</span>
        </label>
        <Field
          type="text"
          name="主要圖片網址"
          placeholder="請輸入主圖網址"
          id="modalImg"
          class="form-control mb-2"
          :class="{ 'is-invalid': errors['主要圖片網址'] }"
          rules="required"
          v-model="tempMainImg" />
        <ErrorMessage
          name="主要圖片網址"
          class="invalid-feedback mb-1" />
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
          >
            {{ `圖片${key+1}` }}
          </label>
          <Field
            type="text"
            :name="`圖片網址_${key+1}`"
            placeholder="請輸入圖片網址"
            :id="`moreImg_${key+1}`"
            class="form-control mb-2"
            :class="{ 'is-invalid': errors[`圖片網址_${key+1}`] }"
            rules="min:1"
            v-model="tempImgs[key]" />
          <ErrorMessage
            :name="`圖片網址_${key+1}`"
            class="invalid-feedback mb-1" />

          <div class="position-relative">
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
          </div>

        </li>
      </template>
    </ul>
  </Form>

  <div class="row">
    <div class="col-6 mb-1">
      <DashboardUpdateFile @upload-img-file="uploadNewImg" />
    </div>

    <div class="col-6 mb-1">
      <button
        type="button"
        class="btn btn-brown w-100"
        :class="{
          'disabled' : tempMainImg === '' || tempImgs[tempImgs.length - 1] === ''
        }"
        @click="tempImgs.push('')"
        >
        新增圖片
      </button>
    </div>
  </div>
</template>

<script>
import DashboardUpdateFile from '@/components/dashboard/DashboardUpdateFile.vue';

export default {
  data() {
    return {
      tempMainImg: '',
      tempImgs: [],
    };
  },
  props: ['productMainImg', 'productImgs'],
  components: { DashboardUpdateFile },
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
    uploadNewImg(uploadImg) {
      if (this.tempMainImg === '') {
        this.tempMainImg = uploadImg;
      } else if (this.tempImgs[this.tempImgs.length - 1] === '') {
        this.tempImgs[this.tempImgs.length - 1] = uploadImg;
      } else {
        this.tempImgs.push(uploadImg);
      }
      this.$emit('updataImgDatas', this.tempMainImg, this.tempImgs);
    },
    resetForm() {
      this.$refs.productImgsForm.resetForm();
    },
  },
};
</script>
