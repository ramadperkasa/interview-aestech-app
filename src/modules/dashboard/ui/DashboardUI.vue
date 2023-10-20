<template>
  <div class="flex flex-col w-full gap-2">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <h1 class="text-black text-2xl font-bold">Daftar Cabang</h1>
        <span class="text-gray-600"
          >Pilih salah satu cabang untuk melihat aktivitas melalui sistem informasi</span
        >
      </div>

      <div class="relative mt-10 lg:w-96">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          name="email"
          id="topbar-search"
          class="bg-gray-50 border hidden lg:block border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary/50 focus:border-secondary/50 w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary/50 dark:focus:border-secondary/50"
          placeholder="Cari Cabang"
        />
      </div>
    </div>

    <div class="w-full grid grid-cols-2 gap-4 mt-5 mb-5">
      <template v-if="!branch.loading">
        <AtomCard
          v-for="(item, index) in branch.data"
          :key="index"
          class="cursor-pointer hover:bg-gray-100"
        >
          <template #image>
            <div class="mr-3">
              <div class="p-3 bg-secondary-accent rounded-lg">
                <svg
                  class="text-secondary mx-auto mb-1 w-7 h-7 dark:text-gray-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                  />
                </svg>
              </div>
            </div>
          </template>
          <div class="flex flex-col">
            <span class="text-lg font-bold">{{ item.name }}</span>
            <span class="text-gray-800">
              {{ item.email }}
            </span>
          </div>
          <template #action>
            <div class="ml-auto">
              <svg
                class="fill-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </div>
          </template>
        </AtomCard>
      </template>
      <template v-else>
        <AtomSkeletonCard v-for="index in 10" :key="index" />
      </template>
    </div>

    <div class="flex w-full justify-center mt-5">
      <AtomPagination :pagination="pagination" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Pinia
import { storeToRefs } from 'pinia'

// Vue
import { reactive } from 'vue'

import { useDashboardStore } from '../store/dashboard.store'

const dashboardStore = useDashboardStore()

const { branch } = storeToRefs(dashboardStore)

const pagination = reactive({
  page: 1,
  perPage: 10,
  total: 50
})

const fetchData = () => {
  dashboardStore.fetchData('branchs', {})
}

fetchData()
</script>
