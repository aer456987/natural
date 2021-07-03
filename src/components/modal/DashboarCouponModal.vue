<template>
  <!-- 商品 Modal -->
  <section
    class="modal fade m-0"
    id="productModal"
    tabindex="-1"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    ref="modal"
  >
    <section class="modal-dialog modal-dialog-centered">
      <main class="modal-content coupon_width mx-auto">
        <div class="modal-header bg-warning text-brown-500">
          <h5
            class="modal-title"
            id="staticBackdropLabel"
          >
            {{ isNewCoupon ? '新增優惠券' : '修改優惠券' }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <section
          v-if="tempCouponData"
          class="modal-body"
        >
          <form
            class="row"
            @change="checkInputValue"
          >
            <span class="col-12">
              <label
                for="modalTitle"
                class="form-label p-1 m-0"
              >
                優惠券名稱<span class="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                id="modalTitle"
                name="優惠券名稱"
                class="form-control mb-2"
                placeholder="請輸入優惠券名稱"
                v-model="tempCouponData.title"
              >
            </span>

            <span class="col-12">
              <label
                for="modalCode"
                class="form-label p-1 m-0"
              >
                優惠碼<span class="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                id="modalCode"
                name="優惠碼"
                class="form-control mb-2"
                placeholder="請輸入優惠碼"
                v-model="tempCouponData.code"
              >
            </span>

            <span class="col-12">
              <label
                for="modalPercent"
                class="form-label p-1 m-0"
              >
                折扣 % 數<span class="text-danger fw-bold">*</span>
              </label>
              <input
                type="number"
                id="modalPercent"
                min='1'
                name="折扣 % 數"
                class="form-control mb-2"
                placeholder="請輸入折扣 % 數"
                v-model.number="tempCouponData.percent"
              >
            </span>

            <span class="col-12">
              <label
                for="modalDueDate"
                class="form-label p-1 m-0"
              >
                到期日<span class="text-danger fw-bold">*</span>
              </label>
              <input
                type="date"
                id="modalDueDate"
                name="到期日"
                class="form-control mb-2"
                placeholder="請輸入到期日"
                v-model="tempDueDate"
              >
            </span>

            <span
              class="col-12 form-check
                d-flex justify-content-end align-items-center"
            >
              <input type="checkbox"
                id="enabledStatus"
                name="啟用狀態"
                value="啟用狀態"
                class="form-check-input m-2 me-1"
                :true-value="1"
                :false-value="0"
                v-model="tempCouponData.is_enabled"
              >
              <label for="enabledStatus">
                是否啟用<span class="text-danger fw-bold">*</span>
              </label>
            </span>

            <span class="text-danger text-end fw-bold mt-1">
              * 為必填項目
            </span>

          </form>
        </section>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-brown"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-warning text-brown-500"
            :disabled="newBtnStatus"
            @click="$emit('modalUpdateCoupon', tempCouponData)"
          >
            {{ modalIsNew ? '確定新增' : '儲存變更' }}
          </button>
        </div>
      </main>
    </section>
  </section>
</template>

<style lang="sass">
.coupon_width
  max-width: 600px
</style>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  name: 'DashboarCouponModal',
  data() {
    return {
      couponModal: '',
      newBtnStatus: Boolean, // true 禁用; false 啟用
      tempCouponData: {},
      isNewCoupon: true,
      tempDueDate: Number,
    };
  },
  props: ['modalCoupon', 'modalIsNew', 'modalBtnStatus'],
  watch: {
    modalCoupon() {
      this.tempCouponData = this.modalCoupon;
      const isoDate = new Date(this.modalCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.tempDueDate] = isoDate;
    },
    modalIsNew() {
      this.isNewCoupon = this.modalIsNew;
    },
    tempDueDate() {
      const newDate = Math.floor(new Date(this.tempDueDate) / 1000);
      this.tempCouponData.due_date = newDate;
    },
    modalBtnStatus() {
      this.newBtnStatus = this.modalBtnStatus;
    },
  },
  emits: ['modalUpdateCoupon'],
  methods: {
    openCouponModal() {
      this.couponModal.show();
    },
    hideCouponModal() {
      this.couponModal.hide();
    },
    checkInputValue() { // 驗證欄位是否為空
      const {
        title, code, percent,
      } = this.tempCouponData;

      if (
        title === undefined
        || code === undefined
        || percent === undefined
        || Number.isNaN(this.tempCouponData.due_date)
      ) {
        this.newBtnStatus = true;
      } else if (
        title === ''
        || code === ''
        || percent === ''
        || Number.isNaN(this.tempCouponData.due_date)
      ) {
        this.newBtnStatus = true;
      } else {
        this.newBtnStatus = false;
      }
    },
  },
  mounted() {
    this.couponModal = new Modal(this.$refs.modal);
  },
};
</script>
