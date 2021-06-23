<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="container pageContent py-5">
    <h1 class="text-center fw-bold m-0 pb-5">訂單管理</h1>
    <div class="row justify-content-between pb-2">
      <span class="col-md-4 col-lg-2 pb-1">
        <select class="form-select" id="paySelect">
          <option selected disabled>選擇付款狀態</option>
          <option value="全部">全部</option>
          <option value="已付款">已付款</option>
          <option value="未付款">未付款</option>
        </select>
      </span>
      <span class="col-lg-2 text-end pb-1">
        <button class="btn btn-outline-brown">
          新增訂單
        </button>
      </span>
    </div>

    <table
      class="table table-hover rounded overflow-hidden shadow-sm
        text-break text-center"
    >
      <thead class="table-dark align-middle">
        <tr>
          <td width="11%">建立時間</td>
          <td width="13%">訂單編號</td>
          <td width="10%">訂購人</td>
          <td width="10%">電話</td>
          <td width="13%">收件地址</td>
          <td width="15%">訂單內容</td>
          <td width="7%">總金額</td>
          <td width="7%">狀態</td>
          <td width="9%">操作</td>
          <td width="5%">刪除</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in orders"
          :key="order.id"
        >

          <td data-title="建立時間">
            {{ $filters.date(order.create_at) }}
          </td>

          <td
            data-title="訂單編號"
            class="text-warning"
          >
            {{ order.id }}
          </td>

          <td data-title="訂購人">
            {{ order.user.name }}
          </td>

          <td data-title="電話">
            {{ order.user.tel }}
          </td>

          <td data-title="收件地址">
            {{ order.user.address }}
          </td>

          <td data-title="訂單內容">
            <p
              v-for="item in order.products"
              :key="item.id"
              class="m-0"
            >
              {{ `${item.product.title}, x ${item.qty}` }}
            </p>
          </td>

          <td data-title="總金額">
            {{ order.total }}
          </td>

          <td
            data-title="付款狀態"
            :title="`付款日期： ${ $filters.date(order.paid_date) }`"
            :class="{ 'text-gray' : !order.is_paid }"
          >
            {{ order.is_paid ? '已付款' : '未付款' }}
          </td>

          <td data-title="操作">
            <button class="btn btn-outline-brown p-1">
              修改
            </button>
          </td>

          <td data-title="刪除">
            <i
              class="bi bi-trash-fill btn btn-outline-danger"
              @click="delOrderFn(order, 'one')"
            ></i>
          </td>
          <!-- {{ order }} -->
        </tr>
      </tbody>
    </table>
    <Pagination
      :pagination-page="ordersPagination"
      @get-data="getOrders"
    ></Pagination>
  </section>
</template>

<script>
import { swalFn, delSwalFn } from '@/methods/swal'; // , delSwalFn
import Pagination from '@/components/DashboarPagination.vue';

export default {
  name: 'DashboardOrders',
  data() {
    return {
      loadingStatus: false,
      select: '',
      ordersPagination: {},
      orders: {},
    };
  },
  components: { Pagination },
  methods: {
    getOrders(page = 1) { // 取得訂單
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/orders?page=${page}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)取得訂單 res', res);
            this.orders = res.data.orders;
            this.ordersPagination = res.data.pagination;
            this.loadingStatus = false;
            console.log('(成功-後台)取得訂單 vue', this.ordersPagination, this.orders);
          } else {
            console.log('(錯誤-後台)取得訂單 res', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)取得訂單 err');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    delOrder(id, action) {
      let url = '';
      this.loadingStatus = true;

      if (action === 'all') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/order/all`;
        console.log('刪除全部', url);
      } else if (action === 'one') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/order/${id}`;
      }

      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-後台)取得訂單 res', res);
            swalFn(res.data.message, 'success');
            this.getOrders();
          } else {
            console.log('(錯誤-後台)取得訂單 res', res);
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-後台)刪除訂單 err');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    delOrderFn(data, action) {
      const { id } = data;
      delSwalFn(id, id, this.delOrder, action);
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
