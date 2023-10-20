<template>
  <aside
    id="sidebar"
    class="fixed top-0 left-0 z-20 lg:flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 transition-width"
    aria-label="Sidebar"
  >
    <div
      class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div
          class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
        >
          <ul class="pb-2 space-y-2">
            <li v-for="(item, index) in menu" :key="index" @click="onClickMenu(item)">
              <template v-if="!item.type">
                <button
                  type="button"
                  class="flex items-center w-full p-2 text-base text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  :class="{ 'bg-secondary-accent text-secondary': item.active }"
                  :aria-controls="item.children ? `dropdown-layouts-${index}` : null"
                  :data-collapse-toggle="item.children ? `dropdown-layouts-${index}` : null"
                  @click="router.push(item.link)"
                >
                  <div v-html="item.icon"></div>

                  <span
                    class="flex-1 ml-3 text-left text-gray-900 hover:text-secondary whitespace-nowrap"
                    :class="{ 'text-secondary': item.active }"
                    sidebar-toggle-item
                    >{{ item.name }}</span
                  >

                  <svg
                    v-if="item.children"
                    sidebar-toggle-item
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  @click="onClickMenu(item)"
                  :id="`dropdown-layouts-${index}`"
                  class="py-2 space-y-2"
                  :class="{ hidden: !item.active }"
                  v-if="item.children"
                >
                  <li
                    v-for="(childItem, childIndex) in item.children"
                    :key="childIndex + ' ' + index"
                  >
                    <a
                      href="#"
                      class="flex items-center p-2 text-base text-gray-900 hover:text-secondary transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      >{{ childItem?.name }}
                    </a>
                  </li>
                </ul>
              </template>
              <template v-else>
                <hr />
              </template>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800"
        sidebar-bottom-menu
      >
        <a
          href="#"
          class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          data-tooltip-target="tooltip-settings"
          class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <div
          id="tooltip-settings"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings page
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="h-5 w-5 rounded-full mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 3900 3900"
          >
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path
              d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
              stroke="#fff"
              stroke-width="300"
            />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path
                        id="a"
                        d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                      />
                      <use xlink:href="#a" y="420" />
                      <use xlink:href="#a" y="840" />
                      <use xlink:href="#a" y="1260" />
                    </g>
                    <use xlink:href="#a" y="1680" />
                  </g>
                  <use xlink:href="#b" x="247" y="210" />
                </g>
                <use xlink:href="#c" x="494" />
              </g>
              <use xlink:href="#d" x="988" />
              <use xlink:href="#c" x="1976" />
              <use xlink:href="#e" x="2470" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </aside>

  <div
    class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90"
    id="sidebarBackdrop"
  ></div>
</template>

<script setup lang="ts">
// Vue
import { reactive } from 'vue'

// Router
import { useRouter } from 'vue-router'

const router = useRouter()

interface MenuItem {
  name: string
  icon: string
  link: string
  active: boolean
  type: string
  children: MenuItem[] | null
}

const menu: MenuItem[] = reactive([
  {
    name: 'Dashboard',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>`,
    link: '/dashboard',
    active: true,
    type: '',
    children: null
  },
  {
    name: 'Penjualan',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/> </svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: [
      {
        icon: '',
        type: '',
        name: 'Pembayaran',
        link: '/pembayaran',
        active: false,
        children: null
      },
      {
        icon: '',
        type: '',
        name: 'Piutang',
        link: '/piutang',
        active: false,
        children: null
      },
      {
        icon: '',
        type: '',
        name: 'Retur',
        link: '/retur',
        active: false,
        children: null
      },
      {
        icon: '',
        type: '',
        name: 'Laporan',
        link: '/laporan',
        active: false,
        children: null
      }
    ]
  },
  {
    name: 'Pelayanan',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`,
    link: '/pelayanan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'Rekam Medis',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'Promo',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'Pembelian',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'Penyimpanan',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'Kepegawaian',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'divider',
    icon: `divider`,
    link: 'divider',
    active: false,
    type: 'divider',
    children: null
  },
  {
    name: 'Tagihan',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'Reservasi',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  },
  {
    name: 'Aplikasi & Bisnis',
    icon: `<svg class="w-7 h-6 transition duration-75 group-hover:text-secondary dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z"/></svg>`,
    link: '/penjualan',
    active: false,
    type: '',
    children: null
  }
])

const onClickMenu = (item: any) => {
  menu.forEach((menu: any) => {
    if (menu.name !== item.name) {
      menu.active = false
    }
  })

  item.active = !item.active
}
</script>
