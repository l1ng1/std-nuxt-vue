<template>
    <p>task ID: {{ id }}</p>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
    mounted(){
    }
}
</script>