<template>
  <div
    class="modal fade m-0"
    id="productModal"
    tabindex="-1"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    ref="modal"
  >
    <main class="modal-dialog modal-dialog-centered width-md">
      <section class="modal-content mx-auto">
        <div class="modal-header bg-warning text-brown-500">
          <h3
            class="modal-title h5"
            id="staticBackdropLabel"
          >
            {{ isNewCoupon ? '新增優惠券' : '修改優惠券' }}
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <Form
          ref="couponForm"
          v-slot="{ errors }"
          @submit="$emit('modalUpdateCoupon', tempCouponData)"
        >
          <div
            v-if="tempCouponData"
            class="modal-body"
          >

            <div
              class="row"
              @change="checkInputValue"
            >
              <div class="col-12">
                <label
                  for="modalTitle"
                  class="form-label p-1 m-0"
                >
                  優惠券名稱 <span class="text-danger fw-bold">*</span>
                </label>
                <Field
                  type="text"
                  name="優惠券名稱"
                  placeholder="請輸入優惠券名稱"
                  id="modalTitle"
                  class="form-control mb-2"
                  :class="{ 'is-invalid': errors['優惠券名稱'] }"
                  rules="required"
                  v-model="tempCouponData.title" />
                <ErrorMessage
                  name="優惠券名稱"
                  class="invalid-feedback mb-1" />
              </div>

              <div class="col-12">
                <label
                  for="modalCode"
                  class="form-label p-1 m-0"
                >
                  優惠碼<span class="text-danger fw-bold">*</span>
                </label>

                <Field
                  type="text"
                  name="優惠碼"
                  placeholder="請輸入優惠碼"
                  id="modalCode"
                  class="form-control mb-2"
                  :class="{ 'is-invalid': errors['優惠碼'] }"
                  rules="required"
                  v-model="tempCouponData.code" />
                <ErrorMessage
                  name="優惠碼"
                  class="invalid-feedback mb-1" />
              </div>

              <div class="col-12">
                <label
                  for="modalPercent"
                  class="form-label p-1 m-0"
                >
                  折扣 % 數<span class="text-danger fw-bold">*</span>
                </label>

                <Field
                  type="number"
                  min="1"
                  max="99"
                  name="折扣 % 數"
                  id="modalPercent"
                  class="form-control mb-2"
                  :class="{ 'is-invalid': errors['折扣 % 數'] }"
                  rules="required|numeric|numeric"
                  v-model.number="tempCouponData.percent" />
                <ErrorMessage
                  name="折扣 % 數"
                  class="invalid-feedback mb-1" />
              </div>

              <div class="col-12">
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
              </div>

              <p class="text-danger text-end fw-bold mt-1">
                * 為必填項目
              </p>

              <div
                class="col-12 form-check
                  d-flex justify-content-end align-items-center mb-0"
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
                  是否啟用
                </label>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-brown-500"
              data-bs-dismiss="modal"
            >
              關閉
            </button>
            <button
              type="submit"
              class="btn btn-warning text-brown-500"
              :disabled="newBtnStatus"
            >
              {{ modalIsNew ? '確定新增' : '儲存變更' }}
            </button>
          </div>
        </Form>

      </section>
    </main>
  </div>
</template>

<script>
import { swalFn } from '@/methods/swal';
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      couponModal: '',
      newBtnStatus: Boolean,
      tempCouponData: {
        title: '',
        code: '',
        percent: 1,
        due_date: Math.floor(Date.now() / 1000),
        is_enabled: 1,
      },
      isNewCoupon: true,
      tempDueDate: 0,
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
    resetForm() {
      this.$refs.couponForm.resetForm();
    },
    checkInputValue() {
      const { title, code, percent } = this.tempCouponData;

      if (this.tempCouponData.percent === 0) {
        swalFn('折扣數不可小於 1', 'error');
      }

      if (
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
