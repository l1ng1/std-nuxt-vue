
<template>
    <div>
        <h1>Привет, мир!</h1>
        <p>Это пример файла Vue на Options API.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Добро пожаловать в Vue Options API!'
        }
    },
    methods: {
        greet() {
            alert(this.message);
        }
    },
    mounted() {
        this.greet();
    }
}
</script>

<style scoped>
h1 {
    color: #42b983;
}
</style>