
<template>
    <div>
        <NuxtLink to="/counter">colunter</NuxtLink>
        <NuxtLink to="/todolist">todo List</NuxtLink>
        <ModalVue v-if="isOpen" @close="isOpen = false">
            <template #header>
                <p>ТЕСТОВЫЙ ЗАГОЛОВОК</p>
            </template>
            <p>текст из сообщения</p>
        </ModalVue>
        <button @click="showHeafy = !showHeafy">Начать загрузку</button>
        <HeavyComponentVue v-if="showHeafy"></HeavyComponentVue>
    </div>
</template>

<script>
import ModalVue from '../components/Modal.vue';

export default {
    data() {
        return {
           isOpen: true,
           showHeafy:false,
           isLoading:false,
        }
    },
    components:{
        ModalVue,
        HeavyComponentVue: () => import('../components/HeavyComponent.vue'),
    },
    
}
</script>

<style scoped>

</style>

