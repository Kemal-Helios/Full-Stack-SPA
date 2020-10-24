<template>
<div class="h-screen w-screen bg-gray-100 flex items-center absolute inset-0">
    <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 mx-auto">
        <div class="max-w-lg px-1">
            <img :src="'/images/not-found.png'" />
        </div>
        <div class="max-w-md px-1">
            <p class="text-2xl md:text-3xl font-light leading-normal">
                Sorry we couldn't find this page.
            </p>
            <p class="mb-8">
                But dont worry, you can find plenty of other things on our
                home page.
            </p>
            <router-link to="/" class="px-4 inline py-2 text-sm font-bold leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
                Back to Home Page
            </router-link>
        </div>
    </div>
</div>
</template>
