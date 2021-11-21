import Swal from "sweetalert2";


export const TostMessage = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: 'white',
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
