<template>
  <!-- Container -->
  <div class="flex flex-col items-center justify-center mt-16">
    <div class="flex flex-col">
      <!-- Navbar -->
      <nav
        class="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10"
      >
        <!-- Logo Container -->
        <div class="flex items-center">
          <!-- Logo -->
          <a class="cursor-pointer">
            <h3 class="text-2xl font-medium text-blue-500">
              <img class="h-10 object-cover" src="@/assets/logo-nav-bar.svg" alt="Logo" />
            </h3>
          </a>
        </div>

        <!-- Links Section -->
        <div class="items-center hidden space-x-12 lg:flex">
          <router-link
            class="nav-link flex text-gray-600 cursor-pointer transition-colors duration-300"
            to="/"
          >
            Accueil
          </router-link>

          <router-link
            class="nav-link flex text-gray-600 cursor-pointer transition-colors duration-300"
            to="/category"
          >
            Catégories
          </router-link>
          <router-link
            class="nav-link flex text-gray-600 cursor-pointer transition-colors duration-300"
            to="/favorite"
          >
            Favoris
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;900&family=Permanent+Marker&display=swap');

.nav-link {
  background-image: url(https://global-uploads.webflow.com/625aea37d2019e1dd7782064/626293a2c28ce140ff9cc1ea_Vector%201.svg);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 10em;
  font-weight: 700;
  display: inline-block;
  font-family: 'Permanent Marker', cursive;
}
.nav-link:hover {
  background-image: inherit;
}
</style>
