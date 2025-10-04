<template>
    <div class="grid grid-cols-1 mb-10">
        <div class="flex flex-col items-center md:flex-row md:items-center justify-center">
  
            <img src="@/assets/logo/logo.svg" alt="Logo" class="h-40 w-auto mb-4" />
            <h1 class="text-6xl font-sis text-white p-4"> Hi<br /> Squeaky<br /> Things, </h1>
        </div>
        <div class="flex flex-col items-center">
            <h2 class="text-xl md:text-2xl font-thin text-white text-center p-4">⚡ <router-link
                    to="/product" class="underline decoration-dotted"><span class="font-light">alternative
                        instruments</span></router-link>
                open <router-link to="/research" class="underline decoration-dotted">research</router-link>
                <span class="font-bold"> lab</span>⚡
            
            </h2>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start gap-4">
        
    <div class="w-5/6 bg-gradient-to-b from-purple-400 via-purple-400 to-purple-500 rounded-md text-center p-4">
            <h1 class="text-xl text-white font-medium mb-2">💡 Research</h1>
            <div class="text-left mb-3 text-gray-200">We are researching new ways to create musical instruments to redefine the future of music.</div>
        </div>
        <div class="w-5/6 bg-gradient-to-b from-purple-400 via-purple-400  to-purple-500  rounded-md text-center p-4">
               <h1 class="text-xl text-white font-medium mb-2">🎛️ Products</h1>
               <div class="text-left mb-3 text-gray-200">Our products are open-source software & hardware pieces designed to revolutionize your music creation experience.</div>
            </div>
        <div class="w-5/6 bg-gradient-to-b from-purple-400 via-purple-400  to-purple-500  rounded-md   text-center p-4">
            <h1 class="text-xl text-white font-medium mb-2">🔈 Music</h1>
            <div class="text-left mb-3 text-gray-200">We craft original music by blending our custom-built open software, unique open hardware instruments, and cutting-edge research.</div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { PrimeIcons } from '@primevue/core/api';

</script>