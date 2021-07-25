import swal from 'sweetalert';
// success (成功) ； error (叉叉) ； warning(警告) ； info (說明)

// 一般提示視窗
export function swalFn(title, icon, timer = 1500, text, button = false, close = false) {
  const txt = {
    title,
    icon,
    timer,
    text,
    button,
    closeOnClickOutside: close,
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

// 全部刪除商品的確認視窗
export function doubleCheckdelSwalFn(action, methods) {
  const firstCheckTxt = { // 第一層確認文檔
    title: '確定要刪除全部訂單嗎？(1/2)',
    icon: 'warning',
    text: '請注意，刪除後將無法復原！',
    buttons: ['取消', '確定刪除'],
    dangerMode: true,
  };

  const secondCheckTxt = { // 第二層確認文檔
    title: '真的要刪除全部訂單嗎？(2/2)',
    icon: 'info',
    text: '請注意，刪除動作執行後，資料將無法復原！',
    buttons: ['取消', '確定刪除'],
    dangerMode: true,
  };

  swal(firstCheckTxt) // 第一層確認
    .then((firstDelete) => {
      if (firstDelete) {
        swal(secondCheckTxt) // 第二層確認
          .then((secondDelete) => {
            if (secondDelete) {
              methods(action);
            } else {
              swalFn('已取消操作', 'error');
            }
          });
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}
