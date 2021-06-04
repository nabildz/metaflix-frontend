<template>
  <div class="">
    <div class="mx-auto py-4 px-4 max-w-7xl lg:py-6">
      <div class="space-y-8 sm:space-y-12">
        <h2 class="text-xl font-medium tracking-tight sm:text-3xl">
          ✨ Trending flicks
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
          <li v-for="movie in movies" :key="movie.key">
            <div
              class="bg-white shadow rounded-xl p-5 space-y-0 grid grid-cols-3 gap-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"
            >
              <div
                class="h-0 aspect-w-3 aspect-h-4 sm:aspect-w-3 sm:aspect-h-4 mr-1"
              >
                <img
                  class="object-cover rounded-lg transform scale-125 transition-transform duration-1000 ease-out -translate-x-1 shadow-lg"
                  :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
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
                          'bg-red-100 text-red-800': movie.vote_average <= 2.5,
                          'bg-yellow-100 text-yellow-800':
                            movie.vote_average > 5.0 &&
                            movie.vote_average < 7.5,
                          'bg-green-100 text-green-800':
                            movie.vote_average >= 7.5 &&
                            movie.vote_average <= 10,
                        }"
                      >
                        {{ movie.vote_average }}
                      </span>
                    </p>
                  </div>
                  <div class="text-base">
                    <p class="text-gray-400 truncate">
                      {{ movie.overview }}
                    </p>
                  </div>
                </div>

                <span class="grid grid-cols-2 mt-5">
                  <a
                    @click="add(movie, 'is_watched')"
                    class="col-span-1 relative w-full inline-flex items-center px-4 py-2 sm:py-5 rounded-l-md bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                  >
                    <span class="sr-only"></span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 mr-3 text-green-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    Watched it
                  </a>
                  <a
                    @click="add(movie, 'in_wishlist')"
                    class="col-span-1 -ml-px relative w-full inline-flex items-center px-4 py-2 sm:py-5 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                  >
                    <span class="sr-only">Previous</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 mr-3 text-yellow-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    Add to wishlist
                  </a>
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
  name: "Home",
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
      fetch("https://metaflix.asaas.ly/api/movies", {
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
    async add(movie, status) {
      fetch("https://metaflix.asaas.ly/api/movies", {
        method: "POST",
        body: JSON.stringify({
          title: movie.title,
          tmbd_id: movie.id,
          tmbd_vote_average: movie.vote_average,
          language: movie.original_language,
          image_url: movie.poster_path,
          release_date: movie.release_date,
          status: status,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          console.log(response.status );

          if (response.status == 422) {
            toast("Already added", {
              toastClassName: "tw-danger",
            });
          }else{
          return response.json();


          }

        })
        .then(function (data) {
          
          toast(data.message, {
            toastClassName: "tw-success",
          });
        });
    },
  },
};
</script>
