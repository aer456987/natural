import swal from 'sweetalert';
// success (成功) ； error (叉叉) ； warning(警告) ； info (說明)

// 一般提示視窗
export function swalFn(title, icon, timer = 1500, text, button = false) {
  const txt = {
    title,
    icon,
    timer,
    text,
    button,
    closeOnClickOutside: false,
  };
  swal(txt);
}

// 刪除商品的確認視窗
export function delSwalFn(title, id, methods, action) {
  // console.log(data.title, data.id);
  const txt = {
    title: `確定要刪除 [${title}] 嗎？`,
    icon: 'warning',
    text: '請注意，刪除後將無法復原！',
    buttons: ['取消', '確定刪除'],
    dangerMode: true,
  };

  swal(txt)
    .then((willDelete) => { // 針對選項執行不同動作
      if (willDelete) {
        methods(id, action);
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}
