<template>
    <div>
        COUNTER PAGE

        <div class="flex-col">
            <button @click="increment()">+</button>
            <span>count: {{ count }}</span>
            <button @click="decrement()">-</button>
        </div>

        <NuxtLink to="/">Home</NuxtLink>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    }
}
</script>