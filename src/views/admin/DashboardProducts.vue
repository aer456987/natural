<template>
  <section class="container pageContent">
    <h2></h2>
    <table class="table table-hover text-center">
      <thead class="table-dark">
        <tr>
          <th width="8%">分類</th>
          <th width="12%">圖片</th>
          <th width="13%">產品ID</th>
          <th width="12%">品名</th>
          <th width="10%">描述</th>
          <th width="10%">說明</th>
          <th width="7%">原價</th>
          <th width="7%">售價</th>
          <th width="7%">狀態</th>
          <th width="7%">操作</th>
          <th width="7%">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in datas.products"
          :key="product.id">
          <td>{{ product.category }}</td>
          <td>
            <img
              :src="product.imageUrl"
              alt="product.title"
              class="w-100">
          </td>
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.content }}</td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.is_enabled }}</td>
          <td>修改</td>
          <td>刪除</td>
          <!-- {{ product }} -->
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// import swal from 'sweetalert';

export default {
  data() {
    return {
      datas: {
        pagination: {},
        products: {},
      },
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/products`; // ?page=:page

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)取得產品', res);
            this.datas.pagination = res.data.pagination;
            this.datas.products = res.data.products;
            console.log(this.datas);
          } else {
            console.log('(錯誤-後台)取得產品', res);
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)取得產品');
          console.dir(err);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
