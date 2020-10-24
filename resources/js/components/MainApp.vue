<template>
<div class="grid grid-cols-12 gap-4">
    <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-2">
        <SlideBar></SlideBar>
    </div>
    <div class="col-span-6 sm:col-span-8 md:col-span-9 lg:col-span-9 xl:col-span-10">
        <router-view></router-view>
        {{__('welcome')}}
    </div>
</div>
</template>

<script>
import SlideBar from "./admin-panil/static/SlideBar"
export default {
    components: {
        SlideBar
    }
}
</script>
