export const toggleNav = () => {
  document.querySelector(".sidebar").classList.toggle("translate-x-full");
  document.querySelector(".bg-navbar").classList.toggle("translate-x-full");
};

export const toggleCart = () => {
  document.querySelector(".cart-sidebar").classList.toggle("translate-x-full");
  document.querySelector(".bg-cart-sidebar").classList.toggle("translate-x-full");
};
