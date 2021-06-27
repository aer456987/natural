<template>
  <div class="input-group">
    <input
      type="file"
      placeholder="請輸入圖片連結"
      class="form-control"
      id="file"
      ref="fileInput"
      @change="isValue=true"
    />
    <span
      class="input-group-text btn btn-outline-brown"
      :class="{ 'disabled' : !isValue }"
      @click="upload"
    >
      <span
        v-if="isUpload"
        class="spinner-border spinner-border-sm"
        role="status"
      ></span>
      {{ isUpload ? '檔案上傳中' : '上傳圖片' }}
    </span>
  </div>
</template>

<script>
import { swalFn } from '@/methods/swal';

export default {
  data() {
    return {
      isValue: false,
      isUpload: false,
    };
  },
  emits: ['uploadImgFile'],
  methods: {
    upload() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/upload`;
      const file = this.$refs.fileInput.files[0];
      const formData = new FormData();
      this.isUpload = true;
      formData.append('file-to-upload', file);

      this.$http.post(url, formData) // 帶入路徑和資料
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)上傳檔案 res', res);
            this.$emit('uploadImgFile', res.data.imageUrl);
            this.$refs.fileInput.value = '';
            this.isValue = false;
            this.isUpload = false;
            swalFn('圖片上傳成功', 'success');
          } else {
            console.log('(錯誤-後台)上傳檔案 res', res);
            this.isUpload = false;
            swalFn(res.data.message, 'error');
          }
        })
        .catch((err) => {
          console.log('(錯誤-後台)上傳檔案 err', err);
          this.isUpload = false;
        });
    },
    log() {
      console.dir(this.$refs.fileInput);
    },
  },
  mounted() {},
};
</script>
