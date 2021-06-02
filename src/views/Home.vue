<template>
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
-->
<div class="">
  <div class="mx-auto py-4 px-4 max-w-7xl lg:py-6">
    <div class="space-y-12">
      <h2 class="text-xl font-medium tracking-tight sm:text-3xl">New Movies</h2>

      <ul class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
        <li>
          <div class="bg-white shadow rounded-xl p-6 space-y-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img class="object-cover shadow-lg rounded-lg" src="https://image.tmdb.org/t/p/w500//6wxfWZxQcuv2QgxIQKj0eYTdKTv.jpg" alt="">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg sm:text-2xl leading-6 font-medium space-y-2 sm:space-y-1">
                  <h3>The Unholy</h3>
                  <p class="font-bold text-xl">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-base font-medium bg-green-100 text-green-800">
  8.2
</span></p>
                </div>
                <div class="text-xs">
                  <p class="text-gray-500 justfiy">Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.</p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- More people... -->
      </ul>
    </div>
  </div>
</div>

</template>