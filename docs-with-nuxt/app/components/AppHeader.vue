<script lang="ts" setup>
import { HEADER_NAV, SOURCE_CODE_LINK } from '~/constants/nav';

const menuVisible = ref(false);
</script>

<template>
  <header w-full h-20 flex flex-col justify-center items-center fixed z-40 lg:backdrop-blur-xl
    :class="menuVisible ? 'bg-gray-900' : 'bg-transparent'">
    <nav 2xl:w-1280px xl:w="10/12" w="11/12" flex justify-between items-center relative>
      <div cursor-pointer flex items-center op-100>
        <NuxtLink to="/" flex justify-start items-center grow basis-0>
          <Icon mr-2 text-5xl name="app-icon-logo" filled></Icon>
          <span font-bold text-xl 
            :class="menuVisible ? 'text-white' : 'text-current'">Linqet</span>
        </NuxtLink>
      </div>
      <div hidden lg:flex justify-center items-center h-full op-100>
        <NuxtLink lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium
          hover:op-70 transition :to="nav.path" v-for="nav in HEADER_NAV" :key="nav.path">
          {{ nav.label }}
        </NuxtLink>
      </div>
      <div hidden lg:flex op-100>
        <NuxtLink class="main-border-gray rounded-xl button-bg  border-gray-700 pl-6 pr-8 p2 text-sm flex items-center"
          :to="SOURCE_CODE_LINK" target="_blank" aria-label="source code">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-6 h-6 mr-3 fill-white op-90">
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
            </path>
          </svg>
          <span text-white op-90>Source code</span>
        </NuxtLink>
      </div>
      <div @click="menuVisible = !menuVisible" lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600
        rounded-md cursor-pointer op-100>
        <div w-5 h-0.5 mb-1 origin-center transition-all duration-300
          :class="[
            menuVisible ? 'bg-white rotate-45 translate-y-1.5' : 'bg-gray-500'
          ]"></div>
        <div w-5 h-0.5 mb-1 transition-all duration-300
          :class="[
            menuVisible ? 'opacity-0 bg-white' : 'bg-gray-500'
          ]"></div>
        <div w-5 h-0.5 origin-center transition-all duration-300
          :class="[
            menuVisible ? 'bg-white -rotate-45 -translate-y-1.5' : 'bg-gray-500'
          ]"></div>
      </div>
    </nav>
    <div v-if="menuVisible" fixed top-20 left-0 w-full h-screen bg-black bg-opacity-50 z-30
      @click="menuVisible = false">
      <div v-if="menuVisible" @click.stop bg-gray-900 border-t border-gray-700 w-full shadow-lg overflow-hidden>
        <div p-6>
          <nav flex flex-col space-y-4>
            <NuxtLink v-for="nav in HEADER_NAV" :key="nav.path" :to="nav.path"
              @click="menuVisible = false"
              class="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-800">
              {{ nav.label }}
            </NuxtLink>
            <div class="border-t border-gray-700 pt-4 mt-4">
              <NuxtLink :to="SOURCE_CODE_LINK" target="_blank" 
                @click="menuVisible = false"
                class="inline-flex items-center text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-5 h-5 mr-3 fill-current">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                  </path>
                </svg>
                Source code
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.button-bg {
  --tw-bg-opacity: 1;
  background-color: #26272b;
}

.button-bg:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(48, 49, 54);
}

.main-border-gray {
  border-width: 1px;
  border-style: solid;
  border-color: #ffffff26;
}
</style>
