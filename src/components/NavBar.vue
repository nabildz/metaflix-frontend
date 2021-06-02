<template>
  <nav class="bg-gradient-to-b from-white via-white to-gray-50 shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-24">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nice-red-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <svg
              class="h-12 w-auto"
              width="361"
              height="138"
              viewBox="0 0 361 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5022 39.6553L8.26875 43.2809L24.8564 108.401L33.7873 106.127L22.0574 60.077L22.2435 60.0296L41.4157 104.183L51.0907 101.719L46.0792 53.2647L46.2652 53.2173L58.161 99.9181L67.836 97.4536L51.2483 32.333L37.0148 35.9586L41.9079 83.9478L41.7219 83.9952L22.5022 39.6553Z"
                fill="#E11D48"
              />
              <path
                d="M81.179 36.7609L99.1863 33.857L97.658 24.3794L69.2253 28.9645L79.9238 95.3074L108.356 90.7224L106.828 81.2448L88.8207 84.1487L85.6876 64.7197L99.9987 62.4119L98.4704 52.9343L84.1593 55.2421L81.179 36.7609Z"
                fill="#E11D48"
              />
              <path
                d="M112.074 32.1873L123.073 31.2404L128.014 88.6281L138.535 87.7223L133.594 30.3346L144.594 29.3877L143.77 19.823L111.25 22.6227L112.074 32.1873Z"
                fill="#E11D48"
              />
              <path
                d="M182.412 18.9041L166.956 19.0312L156.757 86.3173L166.453 86.2376L168.177 74.031L181.136 73.9245L183.06 86.101L193.716 86.0134L182.412 18.9041ZM174.158 30.8764L174.35 30.8748L179.621 64.8166L169.446 64.9003L174.158 30.8764Z"
                fill="#E11D48"
              />
              <path
                d="M218.552 29.7706L235.888 30.9445L236.536 21.3664L208.664 19.4792L204.124 86.5257L214.66 87.2391L216.535 59.5584L230.135 60.4794L230.784 50.9013L217.183 49.9804L218.552 29.7706Z"
                fill="#E11D48"
              />
              <path
                d="M241.628 89.4932L269.302 93.3097L270.614 83.7997L253.401 81.4258L261.27 24.3659L250.809 22.9232L241.628 89.4932Z"
                fill="#E11D48"
              />
              <path
                d="M278.881 95.1844L289.243 97.2169L302.178 31.2735L291.816 29.2409L278.881 95.1844Z"
                fill="#E11D48"
              />
              <path
                d="M343.864 41.3023L329.736 63.1852L329.55 63.1361L328.273 37.1786L317.692 34.3804L320.02 68.7582L299.768 99.1503L309.327 101.679L324.479 78.1795L324.665 78.2286L326.126 106.121L336.891 108.969L334.312 72.5382L353.331 43.8059L343.864 41.3023Z"
                fill="#E11D48"
              />
            </svg>
          </div>
          <div class="hidden sm:ml-16 sm:flex sm:space-x-8">
            <!-- Current: "border-nice-red-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a
              href="#"
              class="border-nice-red-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              MOVIES
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              WATCHED
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              WISHLIST
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

