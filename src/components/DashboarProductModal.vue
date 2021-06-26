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
      <main class="modal-content">
        <div class="modal-header bg-warning text-brown-500">
          <h5
            class="h5 modal-title"
            id="productModalLabel"
          >
            {{ modalIsNew ? '新增產品' : '編輯產品' }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <section class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <label
                for="modalImg"
                class="form-label p-1 m-0"
              >圖片網址</label>
              <input
                type="text"
                id="modalImg"
                name="圖片網址"
                class="form-control mb-2"
                placeholder="請輸入圖片網址"
                v-model="tempProduct.imageUrl"
              />
              <img
                :src="tempProduct.imageUrl"
                alt="主要圖片"
                class="w-100"
              />
              <!-- {{ tempProduct.imageUrl }} -->
              <!-- {{ modalProduct }} -->
            </div>
            <div class="col-md-8">

              <form class="row">
                <span class="col-12">
                  <label
                    for="modalName"
                    class="form-label p-1 m-0"
                  >品名<span class="text-danger fw-bold">*</span></label>
                  <input
                    type="text"
                    id="modalName"
                    name="品名"
                    class="form-control mb-2"
                    placeholder="請輸入品名"
                    v-model="tempProduct.title"
                  />
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalCategory"
                    class="form-label p-1 m-0"
                  >產品分類<span class="text-danger fw-bold">*</span></label>
                  <select
                    id="modalCategory"
                    class="form-select mb-2"
                    aria-label="modalCategory"
                    v-model="tempProduct.category"
                  >
                    <option selected disabled>請選擇分類</option>
                    <option value="食物">食物</option>
                    <option value="周邊用品">周邊用品</option>
                    <option value="募款專案">募款專案</option>
                  </select>
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalUnit"
                    class="form-label p-1 m-0"
                  >單位<span class="text-danger fw-bold">*</span></label>
                  <input
                    type="text"
                    id="modalUnit"
                    name="單位"
                    class="form-control mb-2"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalOriginPrice"
                    class="form-label p-1 m-0"
                  >原價<span class="text-danger fw-bold">*</span></label>
                  <input
                    type="number"
                    id="modalOriginPrice"
                    min="1"
                    name="原價"
                    class="form-control mb-2"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  >
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalPrice"
                    class="form-label p-1 m-0"
                  >售價<span class="text-danger fw-bold">*</span></label>
                  <input
                    type="number"
                    id="modalPrice"
                    min="1"
                    name="售價"
                    class="form-control mb-2"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  >
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalDescription"
                    class="form-label p-1 m-0"
                  >產品描述</label>
                  <textarea
                    id="modalDescription"
                    rows="3"
                    class="form-control mb-2"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalContent"
                    class="form-label p-1 m-0"
                  >說明內容</label>
                  <textarea
                    id="modalContent"
                    rows="3"
                    class="form-control mb-2"
                    placeholder="請輸入說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </span>

                <span
                  class="col-12 form-check
                    d-flex justify-content-end align-items-center"
                >
                  <input type="checkbox"
                    id="enabled_status"
                    name="啟用狀態"
                    value="啟用狀態"
                    class="form-check-input me-1"
                    v-model="tempProduct.is_enabled"
                  >
                  <label for="enabled_status">
                    是否啟用
                  </label>
                </span>

                <span class="text-danger text-end fw-bold mt-1">
                  * 為必填項目
                </span>
              </form>

            </div>
          </div>
        </section>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-warning text-brown-500"
            @click="$emit('modalUpdateProduct', tempProduct)"
          >
            {{ modalIsNew ? '確定新增' : '儲存變更' }}
          </button>
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
  name: 'DashboarProductModal',
  props: ['modalProduct', 'modalIsNew'],
  data() {
    return {
      modal: '',
      tempProduct: {},
    };
  },
  watch: {
    modalProduct() {
      this.tempProduct = this.modalProduct;
    },
  },
  emits: ['modalUpdateProduct'],
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
