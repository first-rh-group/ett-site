"use strict";

window.addEventListener('load', function () {
  geradorShares();
  /*
  const cookiesString = document.cookie
  const cookies = cookiesString.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split('=')
      acc[name] = value
      return acc
  }, {})
  if (cookies.fakeNews) {
      if (document.querySelector(`div[data-fake-news]`)) {
          document.querySelector(`div[data-fake-news]`).classList.remove('show')
      }
  } else {
      document.querySelector(`div[data-fake-news]`).classList.add('show')
      if (document.querySelector(`div[data-fake-news]`)) {
          document.querySelector(`div[data-fake-news]`).addEventListener('click', () => {
              document.querySelector(`div[data-fake-news]`).classList.remove('show')
          }, {once:true})            
      }
      let expirationTime = new Date().getTime() + 600000
      let expires = new Date(expirationTime).toUTCString()
      document.cookie = `fakeNews=show;expires=${expires};path=/`;
  }
  */
  // document.querySelector(`div[data-fake-news]`).classList.add('show')
  // if (document.querySelector(`div[data-fake-news]`)) {
  //     document.querySelector(`div[data-fake-news]`).addEventListener('click', () => {
  //         document.querySelector(`div[data-fake-news]`).classList.remove('show')
  //     }, {once:true})            
  // }
});