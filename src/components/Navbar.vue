<template>
  <div>
    <div class="navbar dark:bg-base-200 shadow-md">
      <div class="navbar-start">
        <div class="dropdown dropdown-start">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-white dark:bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/products/">Products</router-link>
            </li>
            <li>
              <router-link to="/cart">Cart</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end mr-2">
          <div tabindex="0" role="button" class="btn btn-ghost px-2">
            Theme
            <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
            <li>
              <input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default"
                value="default" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="light"
                value="light" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dark" value="dark" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine"
                value="valentine" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="cupcake"
                value="cupcake" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="coffee"
                value="coffee" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
