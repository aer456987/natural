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
      <main class="modal-content width_xl">
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
              class="btn btn-outline-brown"
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
              class="btn btn-outline-brown"
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
              <Form
                v-slot="{ errors }"
                class="row"
                @change="checkUserDatas"
              >

                <span class="col-12">
                  <label
                    for="modalName"
                    class="form-label p-1 m-0"
                  >
                    品名<span class="text-danger fw-bold">*</span>
                  </label>

                  <Field
                    type="text"
                    name="品名"
                    id="modalName"
                    placeholder="請輸入品名"
                    class="form-control mb-2"
                    :class="{ 'is-invalid': errors['品名'] }"
                    rules="required"
                    v-model="tempProduct.title"
                  ></Field>
                  <error-message
                    name="品名"
                    class="invalid-feedback mb-1"
                  ></error-message>
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalCategory"
                    class="form-label p-1 m-0"
                  >
                    產品分類<span class="text-danger fw-bold">*</span>
                  </label>

                  <Field
                    as="select"
                    name="分類"
                    id="modalCategory"
                    placeholder="請選擇分類"
                    class="form-select mb-2"
                    :class="{ 'is-invalid': errors['分類'] }"
                    rules="required"
                    v-model="tempProduct.category"
                  >
                    <option value="請選擇分類" selected disabled>請選擇分類</option>
                    <option value="募款專案">募款專案</option>
                    <option value="公益活動">公益活動</option>
                    <option value="講座">講座</option>
                    <option value="有機食品">有機食品</option>
                    <option value="周邊商品">周邊商品</option>
                  </Field>
                  <error-message
                    name="分類"
                    class="invalid-feedback mb-1"
                  ></error-message>
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalUnit"
                    class="form-label p-1 m-0"
                  >
                    單位<span class="text-danger fw-bold">*</span>
                  </label>

                  <Field
                    type="text"
                    name="單位"
                    id="modalUnit"
                    placeholder="請輸入單位"
                    class="form-control mb-2"
                    :class="{ 'is-invalid': errors['單位'] }"
                    rules="required"
                    v-model="tempProduct.unit"
                  ></Field>
                  <error-message
                    name="單位"
                    class="invalid-feedback mb-1"
                  ></error-message>
                </span>

                <span class="col-12 col-md-6">
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
                    placeholder="請輸入原價"
                    class="form-control mb-2"
                    :class="{ 'is-invalid': errors['原價'] }"
                    rules="required|numeric"
                    v-model.number="tempProduct.origin_price"
                  ></Field>
                  <error-message
                    name="原價"
                    class="invalid-feedback mb-1"
                  ></error-message>
                </span>

                <span class="col-12 col-md-6">
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
                    placeholder="請輸入售價"
                    class="form-control mb-2"
                    :class="{ 'is-invalid': errors['售價'] }"
                    rules="required|numeric"
                    v-model.number="tempProduct.price"
                  ></Field>
                  <error-message
                    name="售價"
                    class="invalid-feedback mb-1"
                  ></error-message>
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalDescription"
                    class="form-label p-1 m-0"
                  >
                    產品描述
                  </label>

                  <Field
                    as="textarea"
                    rows="5"
                    name="產品描述"
                    id="modalDescription"
                    placeholder="請輸入產品描述"
                    class="form-control mb-2"
                    :class="{ 'is-invalid': errors['產品描述'] }"
                    v-model="tempProduct.description"
                  ></Field>
                </span>

                <span class="col-12 col-md-6">
                  <label
                    for="modalContent"
                    class="form-label p-1 m-0"
                  >
                    說明內容
                  </label>

                  <Field
                    as="textarea"
                    rows="5"
                    name="說明內容"
                    id="modalContent"
                    placeholder="請輸入說明內容"
                    class="form-control mb-2"
                    :class="{ 'is-invalid': errors['說明內容'] }"
                    v-model="tempProduct.content"
                  ></Field>
                </span>

                <p class="text-danger text-end fw-bold">
                  * 為必填項目
                </p>

              </Form>
            </div>

            <div
              class="col-12"
              :class="{ 'd-none' : !isShow }"
            >
              <RanderImgs
                :product-main-img="tempProduct.imageUrl"
                :product-imgs="tempProduct.imagesUrl"
                @updata-img-datas="updateImgs"
              ></RanderImgs>
            </div>
          </div>

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
              是否上架商品
            </label>
          </span>
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
            :disabled="btnStatus"
            @click="$emit('modalUpdateProduct', tempProduct)"
          >
            {{ modalIsNew ? '確定新增' : '儲存變更' }}
          </button>
        </div>

      </main>
    </section>
  </section>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import RanderImgs from '@/components/DashboarRenderImgs.vue';

export default {
  name: 'DashboarProductModal',
  props: ['modalProduct', 'modalIsNew'],
  data() {
    return {
      modal: '',
      tempProduct: {},
      btnStatus: true, // true 禁用; false 啟用
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
  },
  components: { RanderImgs },
  emits: ['modalUpdateProduct'],
  methods: {
    openModal() {
      this.isShow = false;
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    updateImgs(newMainImg, newImgs) { // 將 RanderImgs 回傳的資料儲存起來
      this.tempProduct.imageUrl = newMainImg;
      this.tempProduct.imagesUrl = newImgs;
    },
    checkUserDatas() { // 驗證欄位是否為空
      // console.log(this.tempProduct);
      const {
        category, price, title, unit,
      } = this.tempProduct;
      console.log(category, this.tempProduct.origin_price, price, title, unit);

      if (
        title === undefined
        || category === '請選擇分類'
        || unit === undefined
        || this.tempProduct.origin_price === undefined
        || price === undefined
      ) {
        this.btnStatus = true;
      } else {
        this.btnStatus = false;
      }

      console.log(this.btnStatus);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
