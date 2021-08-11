<template>
  <section
    class="modal fade m-0"
    id="productModal"
    tabindex="-1"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    ref="modal"
  >
    <section class="modal-dialog modal-dialog-centered width-xl">
      <main class="modal-content">
        <div class="modal-header bg-warning text-brown-500">
          <h3
            class="h5 modal-title"
            id="productModalLabel"
          >
            {{ modalIsNew ? '新增產品' : '編輯產品' }}
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <Form
          ref="productForm"
          v-slot="{ errors }"
          @submit="$emit('modalUpdateProduct', tempProduct)"
        >
          <section class="modal-body">
            <div
              class="btn-group d-block text-center mb-2"
              role="group"
              aria-label="編輯表單切換"
            >
              <input
                type="radio"
                class="btn-check"
                name="產品資訊切換功能"
                id="productMessage"
                autocomplete="off"
                :checked="!isShow"
                @click="isShow=false"
              >
              <label
                class="btn btn-outline-brown-500"
                for="productMessage"
              >
                編輯資訊
              </label>

              <input
                type="radio"
                class="btn-check"
                name="產品資訊切換功能"
                id="productImg"
                autocomplete="off"
                @click="isShow=true"
              >
              <label
                class="btn btn-outline-brown-500"
                for="productImg"
              >
                編輯圖片
              </label>
            </div>

            <div class="row">
              <div
                class="col-12"
                :class="{ 'd-none' : isShow }"
              >
                <div
                  class="row"
                  @change="checkInputValue"
                >

                  <div class="col-12">
                    <label
                      for="modalName"
                      class="form-label p-1 m-0"
                    >
                      品名<span class="text-danger fw-bold">*</span>
                    </label>
                    <Field
                      type="text"
                      name="品名"
                      placeholder="請輸入品名"
                      id="modalName"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['品名'] }"
                      rules="required"
                      v-model="tempProduct.title" />
                    <ErrorMessage
                      name="品名"
                      class="invalid-feedback mb-1" />
                  </div>

                  <div class="col-12 col-md-6">
                    <label
                      for="modalCategory"
                      class="form-label p-1 m-0"
                    >
                      產品分類<span class="text-danger fw-bold">*</span>
                    </label>
                    <Field
                      as="select"
                      name="產品分類"
                      id="modalCategory"
                      class="form-select mb-2"
                      :class="{ 'is-invalid': errors['產品分類'] }"
                      rules="required"
                      v-model="tempProduct.category"
                    >
                      <option value="" selected disabled>請選擇分類</option>
                      <option value="募款專案">募款專案</option>
                      <option value="公益活動">公益活動</option>
                      <option value="講座">講座</option>
                      <option value="有機食品">有機食品</option>
                      <option value="環保商品">環保商品</option>
                    </Field>
                    <ErrorMessage
                      name="產品分類"
                      class="invalid-feedback mb-1" />
                  </div>

                  <div class="col-12 col-md-6">
                    <label
                      for="modalUnit"
                      class="form-label p-1 m-0"
                    >
                      單位<span class="text-danger fw-bold">*</span>
                    </label>
                    <Field
                      type="text"
                      name="單位"
                      placeholder="請輸入單位"
                      id="modalUnit"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['單位'] }"
                      rules="required"
                      v-model="tempProduct.unit" />
                    <ErrorMessage
                      name="單位"
                      class="invalid-feedback mb-1" />
                  </div>

                  <div class="col-12 col-md-6">
                    <label
                      for="modalOriginPrice"
                      class="form-label p-1 m-0"
                    >
                      原價<span class="text-danger fw-bold">*</span>
                    </label>
                    <Field
                      type="number"
                      min="1"
                      name="原價"
                      id="modalOriginPrice"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['原價'] }"
                      rules="required|numeric"
                      v-model.number="tempProduct.origin_price" />
                    <ErrorMessage
                      name="原價"
                      class="invalid-feedback mb-1" />
                  </div>

                  <div class="col-12 col-md-6">
                    <label
                      for="modalPrice"
                      class="form-label p-1 m-0"
                    >
                      售價<span class="text-danger fw-bold">*</span>
                    </label>
                    <Field
                      type="number"
                      min="1"
                      name="售價"
                      id="modalPrice"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['售價'] }"
                      rules="required|numeric"
                      v-model.number="tempProduct.price" />
                    <ErrorMessage
                      name="售價"
                      class="invalid-feedback mb-1" />
                  </div>

                  <div class="col-12 col-md-6">
                    <label
                      for="modalDescription"
                      class="form-label p-1 m-0"
                    >
                      產品重點描述
                    </label>
                    <textarea
                      id="modalDescription"
                      rows="4"
                      class="form-control mb-2"
                      placeholder="請輸入產品描述"
                      v-model="tempProduct.description"
                    ></textarea>
                  </div>

                  <div class="col-12 col-md-6">
                    <label
                      for="modalContentSupplement"
                      class="form-label p-1 m-0"
                    >
                      次要文案內容
                    </label>
                    <textarea
                      id="modalContentSupplement"
                      rows="4"
                      class="form-control mb-2"
                      placeholder="請輸入次要文案內容"
                      v-model="tempProduct.content_supplement"
                    ></textarea>
                  </div>

                  <div class="col-12">
                    <label
                      for="modalContent"
                      class="form-label p-1 m-0"
                    >
                      主要文案內容
                    </label>
                    <textarea
                      id="modalContent"
                      rows="5"
                      class="form-control mb-2"
                      placeholder="請輸入主要文案內容"
                      v-model="tempProduct.content"
                    ></textarea>
                  </div>

                  <p class="text-danger text-end fw-bold">
                    * 為必填項目
                  </p>

                </div>
              </div>

              <div
                class="col-12"
                :class="{ 'd-none' : !isShow }"
              >
                <DashboardRenderImgs
                  ref="renderImg"
                  :product-main-img="tempProduct.imageUrl"
                  :product-imgs="tempProduct.imagesUrl"
                  @updata-img-datas="updateImgs" />
              </div>
            </div>

            <div
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
                是否上架商品
              </label>
            </div>
          </section>

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

      </main>
    </section>
  </section>
</template>

<script>
import { swalFn } from '@/methods/swal';
import Modal from 'bootstrap/js/dist/modal';
import DashboardRenderImgs from '@/components/dashboard/DashboardRenderImgs.vue';

export default {
  props: ['modalProduct', 'modalIsNew', 'modalBtnStatus'],
  data() {
    return {
      modal: '',
      newBtnStatus: Boolean,
      tempProduct: {
        title: '',
        category: '',
        unit: '',
        origin_price: 1,
        price: 1,
        imageUrl: '',
      },
      isShow: false,
    };
  },
  watch: {
    modalProduct() {
      this.tempProduct = this.modalProduct;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    },
    modalBtnStatus() {
      this.newBtnStatus = this.modalBtnStatus;
    },
  },
  components: { DashboardRenderImgs },
  emits: ['modalUpdateProduct'],
  methods: {
    openModal() {
      this.isShow = false;
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    resetForm() {
      this.$refs.productForm.resetForm();
      this.$refs.renderImg.resetForm();
    },
    updateImgs(newMainImg, newImgs) {
      this.tempProduct.imageUrl = newMainImg;
      this.tempProduct.imagesUrl = newImgs;
      this.checkInputValue();
    },
    checkInputValue() {
      const {
        title, category, unit, price, imageUrl,
      } = this.tempProduct;

      if (
        this.tempProduct.origin_price === 0
        || price === 0
      ) {
        swalFn('價格不可小於 1', 'error');
      }

      if (
        title === ''
        || category === ''
        || unit === ''
        || this.tempProduct.origin_price === ''
        || this.tempProduct.origin_price === 0
        || price === ''
        || price === 0
        || imageUrl === ''
      ) {
        this.newBtnStatus = true;
      } else {
        this.newBtnStatus = false;
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
