<template>
  <div
    class="flex h-screen min-h-full items-center justify-center bg-yellow py-12 px-8 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-xs space-y-8">
      <div>
        <header class="flex flex-row items-center justify-between pb-4">
          <img class="w-3/4" src="../assets/logo_lg.png" alt="Workflow" />
          <a class="cursor-pointer pt-1 text-zinc-900"> 登出 </a>
        </header>
        <div class="relative flex flex-col">
          <label class="text-sm" for="nickname"></label>
          <input
            type="text"
            id="nickname"
            class="mb-3 h-12 rounded-lg border-none text-sm hover:border-solid"
            placeholder="新增待辦事項"
            required
          />
          <button
            class="absolute right-1 top-1 w-10 rounded-lg bg-zinc-800 shadow-md transition duration-150 ease-in-out hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <!-- Tab拆分成component -->
        <div class="max-h-12 rounded-t-lg bg-white py-3">
          <ul class="flex justify-around border-b text-center">
            <li class="w-full">
              <a class="block cursor-pointer border-black hover:border-b-2"
                >全部</a
              >
            </li>
            <li class="w-full">
              <a class="block cursor-pointer border-black hover:border-b-2"
                >待完成</a
              >
            </li>
            <li class="w-full">
              <a class="block cursor-pointer border-black hover:border-b-2"
                >已完成</a
              >
            </li>
          </ul>
        </div>
        <!-- List拆分成component -->
        <div>
          <ul>
            <li class="relative flex items-center gap-4 bg-white px-2 py-2">
              <input type="checkbox" class="peer rounded" />
              <span class="peer-checked:line-through">還書</span>
              <div class="absolute right-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500 hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </li>
            <li class="relative flex items-center gap-4 bg-white px-2 py-2">
              <input type="checkbox" class="peer rounded" />
              <span class="peer-checked:line-through">還書</span>
              <div class="absolute right-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500 hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <!-- footer 拆分成component -->
        <footer
          class="flex justify-between rounded-b-lg bg-white py-6 px-2 text-sm"
        >
          <a href="#">？個待完成項目</a>
          <a href="#" class="text-gray-500 hover:text-gray-900"
            >清除已完成項目</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>
