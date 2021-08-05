import swal from 'sweetalert';
// success (成功) ； error (叉叉) ； warning(警告) ； info (說明)

// 一般提示視窗
export function swalFn(title, icon) {
  const txt = {
    title,
    icon,
    timer: 1500,
    button: false,
    closeOnClickOutside: false,
  };
  swal(txt);
}

// 錯誤提示視窗
export function errorSwalFn(title, text) {
  const txt = {
    title,
    icon: 'error',
    timer: 1500,
    text,
    button: false,
    closeOnClickOutside: false,
  };
  swal(txt);
}

// 登入驗證失敗
export function checkLoginErrorSwalFn(title, icon) {
  const txt = {
    title,
    icon,
    timer: 3000,
    text: '即將於 3 秒後引導至登入畫面',
    button: false,
    closeOnClickOutside: false,
  };
  swal(txt);
}

// 密碼提示視窗
export function passwordMassageSwalFn() {
  const txt = {
    title: '忘記密碼了嗎？',
    text: '再想一下說不定就會想起來囉！',
    timer: 5000,
    button: true,
    closeOnClickOutside: true,
  };
  swal(txt);
}

// 刪除商品的確認視窗
export function delSwalFn(data, methods, action) {
  const { title, id } = data;
  let newTitle = title;

  if (title === undefined) {
    newTitle = id;
  }

  const txt = {
    title: `確定要刪除 [${newTitle}] 嗎？`,
    icon: 'warning',
    text: '請注意，刪除後將無法復原！',
    buttons: ['取消', '確定刪除'],
    dangerMode: true,
  };

  const variable = {
    id,
    action,
  };

  swal(txt)
    .then((willDelete) => { // 針對選項執行不同動作
      if (willDelete) {
        methods(variable);
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}

// 第二層確認刪除
export function secondCheckdelSwalFn(action, methods) {
  const secondCheckTxt = {
    title: '真的要刪除全部訂單嗎？(2/2)',
    icon: 'info',
    text: '請注意，刪除動作執行後，資料將無法復原！',
    buttons: ['取消', '確定刪除'],
    dangerMode: true,
  };

  swal(secondCheckTxt)
    .then((secondDelete) => {
      if (secondDelete) {
        methods(action);
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}

// 全部刪除商品的確認視窗
export function doubleCheckdelSwalFn(action, methods) {
  const firstCheckTxt = {
    title: '確定要刪除全部訂單嗎？(1/2)',
    icon: 'warning',
    text: '請注意，刪除後將無法復原！',
    buttons: ['取消', '確定刪除'],
    dangerMode: true,
  };

  swal(firstCheckTxt) // 第一層確認
    .then((firstDelete) => {
      if (firstDelete) {
        secondCheckdelSwalFn(action, methods); // 第二層確認
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}
