
  $(document).ready(function()
  {
    const updateMenuContent = () =>
    {
      const menuElement = document.querySelector('.menu-17');
      if (!menuElement) return false;



      const shoppingCartHTML = `
        <a class="navbar-brand shopping-cart-navbar d-flex align-items-center" href="/shopping-cart" platformvisible="web">
          <div style="position: relative;">
            <span class="shoppping-cart-number" style="background: #FFFFFF; color: #000000; right: -5px">0</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M15.495 12h.01M8.495 12h.008" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <span style="font-size: 16px; margin-left: 5px; color: #FFFFFF; font-weight: 500;">Giỏ hàng</span>
        </a>
      `;



      menuElement.querySelector('.navbar-brand.shopping-cart-navbar').innerHTML = shoppingCartHTML;



      return true;
    };



    const intervalId = setInterval(() =>
    {
      if (updateMenuContent())
      {
        clearInterval(intervalId);
      }
    }, 1000);
  });
 