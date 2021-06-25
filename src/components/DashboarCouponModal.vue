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
      <div class="modal-content">
        <div class="modal-header">
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
        <div class="modal-body">
          {{ tempCouponData }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-warning text-brown-500"
          >
            <!-- @click="$emit('modalUpdateProduct', tempProduct)" -->
            {{ modalIsNew ? '確定新增' : '儲存變更' }}
          </button>
          <button
            type="button"
            class="btn btn-outline-brown"
            data-bs-dismiss="modal"
          >關閉</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  name: 'DashboarCouponModal',
  data() {
    return {
      couponModal: '',
      tempCouponData: {},
      isNewCoupon: true,
    };
  },
  props: ['modalCoupon', 'modalIsNew'],
  watch: {
    modalCoupon() {
      this.tempCouponData = this.modalCoupon;
    },
    modalIsNew() {
      this.isNewCoupon = this.modalIsNew;
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
  },
  mounted() {
    this.couponModal = new Modal(this.$refs.modal);
  },
};
</script>
