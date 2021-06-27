<template>
  <div class="input-group">
    <input
      type="file"
      placeholder="請輸入圖片連結"
      class="form-control"
      id="file"
      ref="fileInput"
    />
    <span
      class="input-group-text btn btn-outline-brown"
      @click="upload"
    >
      {{ isUpload ? '檔案上傳中' : '上傳圖片' }}
    </span>
  </div>
  <p class="m-0">圖片上傳中</p>

  <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data"
    method="post">
    <input type="file" name="file-to-upload">
    <input type="submit" value="Upload">
  </form>
</template>

<script>
export default {
  data() {
    return {
      uploadImgUrl: '',
      isUpload: false,
    };
  },
  methods: {
    upload() {
      this.isUpload = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      const file = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      console.log('正要上傳中');

      this.$http.post(url, formData) // 帶入路徑和資料
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)上傳檔案 res', res);
            this.isUpload = false;
            // this.getOrders();
            // swalFn(res.data.message, 'success');
            // https://storage.googleapis.com/vue-course-api.apps…N1%2F6xzv4pUojaaSwsAV9v9XjmSpY6qXySFZxt4zUQ%3D%3D
            this.$refs.fileInput = '';
          } else {
            console.log('(錯誤-後台)上傳檔案 res', res);
            // swalFn(res.data.message, 'error');
            // this.isUpload = false;
          }
        })
        .catch((err) => {
          console.log('(錯誤-後台)上傳檔案 err', err);
          // this.isUpload = false;
        });
    },
  },
  mounted() {},
};
</script>
