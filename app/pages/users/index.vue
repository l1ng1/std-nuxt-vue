<template>
    
    <div v-if="isLoading">Загрузка</div>

    <div v-else class="flex flex-col items-center gap-y-4">
        <div class="cursor-pointer" v-for="user in users" :key="user.id">
            <NuxtLink :to="`/users/${user.id}`">
                {{ user.name }}
            </NuxtLink>
        </div>

    </div>
</template>


<script>
import { useUserStore } from '@/stores/user';

export default {
    data() {
        return{
            users:[],
            err:null,
            store:null,
            isLoading:false,
        }
    },
    mounted(){
        this.store = useUserStore();
        this.$watch(
        () => useUserStore().loading,
        (newVal) => {
            this.isLoading = newVal
        });
        this.store.fetchUsers()
        .then(()=>{
            this.users = this.store.users;
            console.log(this.users);
        })
    },
}
</script>