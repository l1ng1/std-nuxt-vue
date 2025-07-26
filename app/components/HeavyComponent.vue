<template>
  <div class="heavy-component">
    <h2>Это тяжёлый компонент</h2>
    <div v-for="item in 500" :key="item">
      Элемент {{ item }} / 500
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    mounted(){
        const start = Date.now()
        while (Date.now() - start < 500) {}
        console.log('Тяжёлый компонент загружен!')
    }
}
    



</script>

<style>
.heavy-component {
  background: linear-gradient(90deg, #f00, #0f0, #00f);
  padding: 2rem;
}
</style>