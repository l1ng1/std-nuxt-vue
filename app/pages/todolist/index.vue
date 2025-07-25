<template>
    <input class="m-2 border-black border-solid border" type="text" v-model="text">
    <button @click="addTask">Add Task</button>
    <div class="flex-col justify-items-center w-72 rounded bg-green-300 m-2">
        <div class="item m-2" v-for="(item, index) in list" :key="index">
            <NuxtLink :to="`/todolist/${item.id}`">
                <span>{{ item.text }}</span>
            </NuxtLink>
            
            

        </div>
    </div>
</template>


<script setup>
import {reactive ,ref} from 'vue';
const text = ref('');
const list  = reactive([]);


const addTask = () =>{
    if(text.value.trim() === '') return;
    let item = {
        text: text.value,
        id:list.length,
    }
    list.push(item);
    text.value = '';
}



</script>