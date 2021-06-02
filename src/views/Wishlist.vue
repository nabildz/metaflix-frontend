<template>
  <div class="">
    <div class="mx-auto py-4 px-4 max-w-7xl lg:py-6">
      <div class="space-y-12">
        <h2 class="text-lg font-medium tracking-tight sm:text-3xl">
          🌠 Wishlist
        </h2>

        <ul
          class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-6 lg:gap-y-10 lg:space-y-0"
        >
          <li v-for="movie in movies" :key="movie.key" class="transform hover:scale-95 transition-transform duration-1000 ease-out">
            <div
              class="bg-white shadow rounded-xl p-6 space-y-2 grid grid-cols-3 gap-3 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 "
            >
              <div
                class="h-0 aspect-w-3 aspect-h-4 sm:aspect-w-3 sm:aspect-h-4  mr-2"
              >
                <img
                  class="object-cover shadow-lg rounded-lg transform hover:scale-125 transition-transform duration-1000 ease-out "
                  :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path"
                  alt=""
                />
              </div>
              <div class="mt-3 sm:mt-0 col-span-2">
                <div class="space-y-4">
                  <div
                    class="text-lg sm:text-2xl leading-6 font-medium space-y-2 sm:space-y-1"
                  >
                    <h3>{{ movie.title }}</h3>
                    <p class="font-bold text-xl">
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-base font-medium 
                        "

                          :class="{
                      'bg-red-100 text-red-800': movie.vote_average <= 2.5,
                      'bg-yellow-100 text-yellow-800': movie.vote_average > 5.0 && movie.vote_average < 7.5,
                      'bg-green-100 text-green-800': movie.vote_average >= 7.5 && movie.vote_average <= 10,
                    }"
                      >
                        {{ movie.vote_average }}
                      </span>
                    </p>
                  </div>
                  <div class="text-xs">
                    <p class="text-gray-500 max-h-12 truncate">
                        {{ movie.overview }}
                    </p>
                  </div>

                
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
// import { debounce } from "lodash";

export default {
  name: "Watched",
  data() {
    return {
      isLoading: false,
      searchQuery: null,
      movies: [],
    };
  },
  beforeMount() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      this.isLoading = !this.isLoading;
      fetch("http://movie-app-backend.test/api/movies/wishlist", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => (this.movies = data.data))
        .then((data) => (this.isLoading = !this.isLoading));
    },
  },
};
</script>
