![benner](https://i.imgur.com/LOebNpr.jpg)

# **Natural 環保資訊整合平台**
> Natural 環保資訊整合平台完整整合了台灣現有的環境保育及野生動物保育活動、募資專案、多項認證有機農產品及環保用品，讓你快速獲取想要的資訊，並可線上透過 Natural 環保資訊整合平台輕鬆捐款、預約活動或是購買商品。

Demo： [https://aer456987.github.io/natural/#/](https://aer456987.github.io/natural/#/)

<br>

## **設計理念**
環境保育和野生動物保育議題在社會上一直都處於弱勢，相關資訊因為太過分散而不利於使用者搜尋，導致無法提升曝光度，獲得的關注度與資源遠不及社會弱勢團體。

因此建立了 Natural 環保資訊整合平台來整合所有關於環境保育、動物保育的公益活動、募款專案、相關講座的資訊，讓有意願為環境盡一份心力的民眾可以簡單且清楚的找到自己需要的資訊，也能直接透過這個平台線上預約有興趣的活動或贊助喜歡的機構，不必再額外連結至各家單位，藉此增加民眾的參與意願。

另外平台上也有了許多有機農產品和環保用品可供挑選，讓購買者吃得安心又能支持為環境盡一份心力的廠商。

### **顏色設定**
**前台**：<br>
<img src="https://i.imgur.com/d9SWVCg.jpg" alt="前台色碼設定"><br>
綠色屬於生意盎然的顏色，所以前台色系使用樹葉的綠色，讓每個進入網站的人彷彿像走進大自然一樣舒適放鬆，也有期許民眾對環境的關注度可以如樹林般生生不息的含意。

**後台**：<br>
<img src="https://i.imgur.com/ZOeNMeu.jpg" alt="後台色碼設定"><br>
後台的使用者必定是團隊的成員，所以後台使用樹幹的咖啡色為主色，象徵團隊成員如同大樹的根基，唯有根基穩定，團隊才會強大，也才能維持起前台的所有運作。

而後台的輔色是屬於陽光的黃色，意味著希望成員們的熱情能如太陽般綻放，照亮每個需要被關注的環保團體，並能利用這份熱情讓民眾更加提升對環境保育及動物保育的重視。


<br><hr>

## **專案說明**
* 使用 Vue.js 和 Vue CLI 進行開發
* 使用 Vue Router 路由設定
* 使用 Vue Axios 串接後台 API 資料
* 使用 props、emit、Mitt 進行元件間資料的傳遞
* 使用 Bootstrap 5 結合 SCSS 切版及樣式管理
* 撰寫 meta 優化 SEO 搜尋
* 使用 ESlint Airbnb 控管程式碼品質
* 使用 Git 版本控制

<br>

### **前台**
* 首頁、品牌介紹、常見問答
* 商品頁：
  * 商品分類、收藏、單項商品細節
* 購物車：
  * 修改商品數量、刪除，優惠券
* 訂單頁：
  * 表單驗證
  * 依商品種類顯示 / 隱藏部分欄位或選項
* 結帳頁：
  * 依付款方式顯示 / 隱藏付款功能

### **後台**
* 管理者登入畫面
* 商品管理：
  * 新增、修改、刪除商品，商品圖片新增、刪除、修改
  * 篩選、搜尋
* 訂單管理
  * 修改、刪除
  * 搜尋
* 優惠券管理
  * 新增、修改、刪除
  * 搜尋

<br><hr>

## **使用技術**
* Vue3
* Vue Cli
* Vue Router
* Vue Axios
* Vee Validate
* mitt
* Aos
* Swiper
* SweetAlert 2
* vue-countTo
* Bootstrap 5
* Font Awesome
* Bootstrap icons

<br><hr>

## **前台頁面**
<br>

### **首頁**

![首頁](https://i.imgur.com/0BTcRHk.jpeg)

<br>

### **商品頁**

![商品頁](https://i.imgur.com/IfTxgSY.jpeg)

<br>

### **商品詳細頁**

![產品詳細頁](https://i.imgur.com/oGEzQu8.jpeg)

<br>

### **收藏清單**

![收藏清單](https://i.imgur.com/IC7vA5w.jpeg)

* 即時更新收藏狀態

<br>

### **訂單填寫**

![訂單填寫](https://i.imgur.com/aPTUmtV.jpeg)

1. 訂單內容如果只有無須出貨的商品，如捐款、參加講座，僅能使用信用卡、ATM 匯款。
2. 訂單內容如果含有需要出貨的商品，可以使用貨到付款，並需要選擇寄送方式、寄送地址。

<br>

### **付款頁面**

![付款頁面](https://i.imgur.com/4LkFEvB.jpeg)

1. 選擇信用卡、ATM 匯款可直接前往付款頁面進行線上付款。
2. 選擇貨到付款不需要先付款。

<br><br>

## **後台頁面**

### **登入頁**

![登入頁](https://i.imgur.com/WhuJ5kr.jpeg)

<br>

### **商品管理頁**

![商品管理頁](https://i.imgur.com/e4B7K5z.jpeg)
![商品搜尋功能](https://i.imgur.com/5IR1RB7.jpeg)

* 可同時使用篩選及搜尋功能尋找特定商品。

![商品編輯視窗](https://i.imgur.com/twCQu6C.jpeg)

* 可從本地端上傳商品圖片，也可使用網址新增商品圖片。

<br>

### **訂單管理頁**

![訂單管理頁](https://i.imgur.com/7U7im4W.jpeg)

**紅框** ( 付款方式為信用卡或 ATM 匯款 )

1. 需完成付款後，處理進度才會轉為「處理中」。
2. 已完成付款，可開始出貨。
3. 已出貨。

**藍框** ( 付款方式為貨到付款 )
1. 無需事先完成付款即可開始出貨。
2. 已出貨。

![訂單編輯視窗](https://i.imgur.com/uz9fhI9.jpeg)

* 可編輯訂單付款狀態及出貨狀態

<br>

### **優惠券管理頁**

![優惠券管理頁](https://i.imgur.com/r1A7BOK.jpeg)
![優惠券編輯視窗](https://i.imgur.com/4QsdmcR.jpeg)

<br><hr>

更多資訊歡迎前往 [Natural 環保資訊整合平台](https://aer456987.github.io/natural/#/
) 進一步了解。
