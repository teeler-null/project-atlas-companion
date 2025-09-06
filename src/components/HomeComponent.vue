<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<!-- Tyler Feature -->
<template>
    <div class="grid h-screen place-items-center">
        <span class="bg-blue-100 text-blue-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">This is our home page!</span>
    </div>
</template>
<!-- End of Feature -->