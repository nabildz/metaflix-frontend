<template>
  <div class="">
    <div class="mx-auto py-4 px-4 max-w-7xl lg:py-6">
      <div class="space-y-12">
        <h2 class="text-lg font-medium tracking-tight sm:text-3xl">
          👀 What you've watched so far
        </h2>

        <svg
          v-if="isLoading"
          class="animate-spin h-8 w-8 sm:w-12 sm:h-12 text-nice-red-500 self-center m-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <ul
          v-else
          class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-6 lg:gap-y-10 lg:space-y-0"
        >
          <li v-for="(movie, index) in movies" :key="movie.id">
            <div
              class="bg-white shadow rounded-xl p-5 space-y-0 grid grid-cols-3 gap-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"
            >
              <div
                class="h-0 aspect-w-3 aspect-h-4 sm:aspect-w-3 sm:aspect-h-4 mr-1"
              >
                <img
                  class="object-cover rounded-lg transform scale-125 transition-transform duration-1000 ease-out -translate-x-1 shadow-lg"
                  :src="'https://image.tmdb.org/t/p/w500/' + movie.image_url"
                  alt=""
                />
              </div>
              <div class="my-8 col-span-2">
                <div class="space-y-5">
                  <div
                    class="text-lg sm:text-xl leading-6 font-medium space-y-2 sm:space-y-3"
                  >
                    <h3 class="truncate tracking-wide">
                      {{ movie.title }}
                      <span
                        class="tracking-wider text-gray-500 text-base font-medium"
                        >({{ movie.release_date.substr(0, 4) }})</span
                      >
                    </h3>

                    <p class="font-bold text-xl">
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-lg font-medium"
                        :class="{
                          'bg-red-100 text-red-800':
                            movie.tmbd_vote_average <= 2.5,
                          'bg-yellow-100 text-yellow-800':
                            movie.tmbd_vote_average > 5.0 &&
                            movie.tmbd_vote_average < 7.5,
                          'bg-green-100 text-green-800':
                            movie.tmbd_vote_average >= 7.5 &&
                            movie.tmbd_vote_average <= 10,
                        }"
                      >
                        {{ movie.tmbd_vote_average }}
                      </span>
                    </p>
                  </div>
                  <div class="text-base">
                    <p class="text-gray-400 truncate">
                      {{ movie.overview }}
                    </p>
                  </div>
                </div>

                <span class="grid grid-cols-2 gap-2 mt-5 mb-4">
                  <a
                    @click="rate(movie, 'yay', index)"
                    class="col-span-1 relative w-full inline-flex items-center px-4 py-2 sm:py-5 rounded-l-md bg-white text-lg sm:text-xl font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none"
                    :class="{
                      'border border-green-600': movie.rating == 'yay',
                    }"
                  >
                    <span class="sr-only"></span>

                    <span class="text-lg mr-5"> 👍 </span>

                    Yay
                  </a>
                  <a
                    @click="rate(movie, 'nay', index)"
                    class="col-span-1 -ml-px relative w-full inline-flex items-center px-4 py-2 sm:py-5 bg-white text-lg sm:text-xl font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                    :class="{ 'border border-red-600': movie.rating == 'nay' }"
                  >
                    <span class="sr-only">Previous</span>

                    <span class="text-lg mr-5"> 👎 </span>

                    Nay
                  </a>
                </span>

                <span
                  @click="remove(movie, index)"
                  class="text-sm text-gray-200 m-auto hover:text-nice-red-500"
                  ><u> I lied i never watched this </u>
                </span>
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
import { useToast } from "vue-toastification";

const toast = useToast();

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
    this.isLoading = !this.isLoading;
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.isLoading = true;

      fetch("http://movie-app-backend.test/api/movies/watched", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => (this.movies = data.data))
        .then(() => (this.isLoading = false));
    },
    async rate(movie, rating, key) {
      if (movie.rating != rating) {
        this.movies[key].rating = rating;

        fetch("http://movie-app-backend.test/api/movies/", {
          method: "PUT",
          body: JSON.stringify({
            rating: rating,
            id: movie.id,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            toast(data.message, {
              toastClassName: "tw-success",
            });
          });
      }
    },
    remove(movie, key) {
      fetch("http://movie-app-backend.test/api/movies/", {
        method: "DELETE",
        body: JSON.stringify({
          id: movie.id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
         
          toast(data.message, {
            toastClassName: "tw-success",
          });
        }).then(() => ( this.getMovies()));
    },
  },
};
</script>
