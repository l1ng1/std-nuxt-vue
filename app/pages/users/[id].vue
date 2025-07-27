<template>
    
    <div class="" v-if="user != null">
        {{ user.name }}
    </div>

</template>


<script>
import { useUserStore } from '@/stores/user';

export default {
    data() {
        return{
            user:null,
            store:null,
            id:this.$route.params.id,
        }
    },
    mounted(){
        console.log(this.id)
        this.store = useUserStore();
        this.store.fetchUsers()
        .then(()=>{
            this.user = this.store.getUserById(this.id)
        })
    },
}
</script>