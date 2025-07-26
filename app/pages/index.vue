
<template>
    <div>
        <NuxtLink to="/counter">colunter</NuxtLink>
        <NuxtLink to="/todolist">todo List</NuxtLink>
        <ModalVue v-if="isOpen" @close="isOpen = false">
            <p>lol</p>
            <template #special>
                <p>lol2</p>
            </template>
        </ModalVue>
    </div>
</template>

<script>
import ModalVue from '../components/Modal.vue';
export default {
    data() {
        return {
           isOpen: true,
        }
    },
    components:{
        ModalVue,
    },
    
}
</script>

<style scoped>

</style>

