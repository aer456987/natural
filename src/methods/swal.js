import Swal from 'sweetalert2';

export function swalFn(title, icon, toast = false, posi = 'center') {
  const txt = {
    position: posi,
    title,
    icon,
    timer: 1500,
    showConfirmButton: false,
    timerProgressBar: true,
    toast,
  };
  Swal.fire(txt);
}

export function errorSwalFn(title, text, toast = false, posi = 'center') {
  const txt = {
    position: posi,
    title,
    text,
    icon: 'error',
    timer: 1500,
    showConfirmButton: false,
    timerProgressBar: true,
    toast,
  };
  Swal.fire(txt);
}

export function checkLoginErrorSwalFn(title, icon) {
  const txt = {
    title,
    text: '即將於 3 秒後引導至登入畫面',
    icon,
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
  };
  Swal.fire(txt);
}

export function passwordMassageSwalFn() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-secondary text-primary shadow-sm px-2',
    },
    buttonsStyling: false,
  });

  const txt = {
    position: 'top-center',
    title: '忘記密碼了嗎？',
    text: '再想一下說不定就會想起來囉！',
    icon: 'question',
    timer: 5000,
    showConfirmButton: true,
    confirmButtonText: '我再想想',
    closeOnClickOutside: true,
  };
  swalWithBootstrapButtons.fire(txt);
}

export function delSwalFn(data, methods, action) {
  const { title, id } = data;
  let newTitle = title;

  const variable = {
    id,
    action,
  };

  if (title === undefined) {
    newTitle = id;
  }

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-light border-gray me-2 px-2',
      cancelButton: 'btn btn-danger px-2',
    },
    buttonsStyling: false,
  });

  const txt = {
    title: `確定要刪除 [${newTitle}] 嗎？`,
    text: '請注意，刪除後將無法復原！',
    icon: 'warning',
    showConfirmButton: true,
    confirmButtonText: '確定刪除',
    showCancelButton: true,
    cancelButtonText: '取消',
  };

  swalWithBootstrapButtons.fire(txt)
    .then((result) => {
      if (result.isConfirmed) {
        methods(variable);
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}

// 雙層確認視窗裡的第二層
export function secondCheckdelSwalFn(action, methods) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-light border-gray me-2 px-2',
      cancelButton: 'btn btn-danger px-2',
    },
    buttonsStyling: false,
  });

  const secondCheckTxt = {
    title: '真的要刪除全部訂單嗎？(2/2)',
    text: '請注意，刪除動作執行後，資料將無法復原！',
    icon: 'info',
    showConfirmButton: true,
    confirmButtonText: '確定刪除',
    showCancelButton: true,
    cancelButtonText: '取消',
  };

  swalWithBootstrapButtons.fire(secondCheckTxt)
    .then((result) => {
      if (result.isConfirmed) {
        methods(action);
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}

export function doubleCheckdelSwalFn(action, methods) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-light border-gray me-2 px-2',
      cancelButton: 'btn btn-danger px-2',
    },
    buttonsStyling: false,
  });

  const firstCheckTxt = {
    title: '確定要刪除全部訂單嗎？(1/2)',
    text: '請注意，刪除後將無法復原！',
    icon: 'warning',
    showConfirmButton: true,
    confirmButtonText: '確定刪除',
    showCancelButton: true,
    cancelButtonText: '取消',
  };

  swalWithBootstrapButtons.fire(firstCheckTxt)
    .then((result) => {
      if (result.isConfirmed) {
        secondCheckdelSwalFn(action, methods);
      } else {
        swalFn('已取消操作', 'error');
      }
    });
}
