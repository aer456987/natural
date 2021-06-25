<template>
  <!-- 訂單 Modal -->
  <section
    class="modal fade"
    id="orderFirstModal"
    tabindex="-1"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    ref="modal"
  >
    <section class="modal-dialog modal-dialog-centered">
      <main class="modal-content">
        <div class="modal-header bg-warning text-brown-500">
          <h5
            class="modal-title"
            id="orderModalLabel"
          >修改訂單</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-md-5">
          <div class="row">

            <div class="col-12">
              <h1 class="h4 text-center my-2">訂購人資訊</h1>
              <table class="table border rounded shadow-sm">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      姓名
                    </th>
                    <td class="px-2">
                      {{ tempOrder.user.name }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      電話
                    </th>
                    <td class="px-2">
                      {{ tempOrder.user.tel }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      Email
                    </th>
                    <td class="px-2">
                      {{ tempOrder.user.email }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      地址
                    </th>
                    <td class="px-2">
                      {{ tempOrder.user.address }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-12 p-2">
              <h1 class="h4 text-center my-2">訂單資訊</h1>
              <table class="table border rounded shadow-sm">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      訂單編號
                    </th>
                    <td class="px-2">
                      {{ tempOrder.id }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      訂單成立時間
                    </th>
                    <td class="px-2">
                      {{ $filters.date(tempOrder.create_at) }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      訂單總金額
                    </th>
                    <td class="px-2">
                      $ {{ tempOrder.total }} 元
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      付款狀態
                    </th>
                    <td
                      class="px-2"
                      :class="{
                        'text-warning' : tempOrder.is_paid,
                        'text-gray' : !tempOrder.is_paid
                      }"
                    >
                      <span class="form-check">
                        <input type="checkbox"
                          id="enabled_status"
                          name="付款狀態"
                          value="付款狀態"
                          class="form-check-input me-1"
                          v-model="tempOrder.is_paid"
                        >
                        <label for="enabled_status">
                          {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                        </label>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      付款時間
                    </th>
                    <td class="px-2">
                      {{ $filters.date(tempOrder.paid_date) }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2"
                      width="25%"
                    >
                      處理進度
                    </th>
                    <td class="px-2">
                      <!-- :class="{
                        'text-warning' : tempOrder.is_paid,
                        'text-gray' : !tempOrder.is_paid
                      }" -->
                      <span class="text-success">處理中</span>
                      <span class="text-warning">已出貨</span>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

            <div class="col-12 p-2 text-center">
              <h1 class="h4 text-center my-2">購買明細</h1>
              <table class="table border rounded shadow-sm">
                <thead class="border-bottom">
                  <th
                    scope="row"
                    class="py-1"
                  >
                    品名
                  </th>

                  <th
                    scope="row"
                    class="py-1"
                  >
                    數量
                  </th>

                  <th
                    scope="row"
                    class="px-2 py-1"
                  >
                    單位
                  </th>
                </thead>
                <tbody>
                  <template
                    v-for="item in tempOrder.products"
                    :key="item.product_id"
                  >
                    <tr>
                      <td class="text-center">
                        {{ item.product.title }}
                      </td>

                      <td class="text-center">
                        {{ item.product.num }}
                      </td>

                      <td class="text-center">
                        {{ item.product.unit }}
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="$emit('modalUpdateOrderPaid', tempOrder)"
            class="btn btn-warning text-brown-500"
          >變更付款狀態</button>
          <button
            type="button"
            class="btn btn-outline-brown"
            data-bs-dismiss="modal"
          >關閉</button>
        </div>
      </main>
    </section>
  </section>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  name: 'DashboarOrderModal',
  props: ['modalOrder'],
  data() {
    return {
      orderModal: '',
      tempOrder: {
        create_at: Number,
        id: '',
        is_paid: Boolean,
        paid_date: Number,
        products: {},
        total: Number,
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
      },
    };
  },
  watch: {
    modalOrder() {
      this.tempOrder = this.modalOrder;
    },
  },
  emits: ['modalUpdateOrderPaid'],
  methods: {
    openOrderModal() {
      this.orderModal.show();
    },
    hideOderModal() {
      this.orderModal.hide();
    },
  },
  mounted() {
    this.orderModal = new Modal(this.$refs.modal);
  },
};
</script>
