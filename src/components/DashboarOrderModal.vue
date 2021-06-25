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
                        <input
                          type="checkbox"
                          id="isPaid_status"
                          class="form-check-input me-1"
                          name="付款狀態"
                          value="付款狀態"
                          v-model="tempOrder.is_paid"
                        >
                        <label for="isPaid_status">
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
                      <span
                        v-if="tempOrder.is_paid"
                        class="m-0"
                        :class="{
                          'text-warning' : tempOrder.user.is_consignment,
                          'text-success' : !tempOrder.user.is_consignment,
                        }"
                      >
                        {{ tempOrder.user.is_consignment ? '已出貨' : '處理中' }}
                      </span>
                      <span
                        v-else
                        class="text-gray"
                      >
                        訂單成立
                      </span>
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

            <span
              v-if="tempOrder.is_paid"
              class="col-12 form-check
                d-flex justify-content-end align-items-center"
            >
              <input
                type="checkbox"
                id="consignment_status"
                class="form-check-input me-1"
                name="處理進度"
                value="處理進度"
                v-model="tempOrder.user.is_consignment"
              >
              <label for="consignment_status">
                商品出貨
              </label>
            </span>

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
          is_consignment: Boolean,
        },
      },
    };
  },
  watch: {
    modalOrder() {
      this.tempOrder = this.modalOrder;
    },
    tempOrder() {
      if (!this.tempOrder.is_paid) {
        console.log('修改付款狀態');
        this.tempOrder.user.is_consignment = false;
      }
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
