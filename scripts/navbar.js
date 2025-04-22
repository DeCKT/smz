const navMenu = document.querySelector('#nav-menu');
const navMenuOpener = document.querySelector('#nav-menu-opener');
const navMenuCloser = document.querySelector('#nav-menu-closer')
const cartOpener = document.querySelector('#cart-opener');
const cartCloser = document.querySelector('#cart-closer')
const cartContainer = document.querySelector('#cart-container');

function openMenu() {
  if (cartContainer.classList.contains('cart-open')) {
    closeCart()
  }
  navMenu.classList.add('menu-open')
}

function closeMenu() {
  navMenu.classList.remove('menu-open')
}

function openCart() {
  if (navMenu.classList.contains('menu-open')) {
    closeMenu()
  }
  cartContainer.classList.add('cart-open')
  
}

function closeCart() {
  cartContainer.classList.remove('cart-open')
}

navMenuOpener.addEventListener('click', openMenu)
navMenuCloser.addEventListener('click', closeMenu)

cartOpener.addEventListener('click', openCart)
cartCloser.addEventListener('click', closeCart)