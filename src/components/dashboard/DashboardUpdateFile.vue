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
    <button
      type="button"
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
    </button>
  </div>
</template>

<script>
import { swalFn, errorSwalFn } from '@/methods/swal';

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

      this.$http.post(url, formData)
        .then((res) => {
          if (res.data.success) {
            this.$emit('uploadImgFile', res.data.imageUrl);
            this.$refs.fileInput.value = '';
            this.isValue = false;
            this.isUpload = false;
            swalFn('圖片上傳成功', 'success');
          } else {
            this.isUpload = false;
            swalFn(res.data.message, 'error');
          }
        })
        .catch(() => {
          errorSwalFn('圖片上傳異常', '請重新操作');
          this.isUpload = false;
        });
    },
  },
  mounted() {},
};
</script>
