<template>
    <div ref="modal" class="modal">
        <button @click="()=>{close()}" class="close">X</button>
        <slot name="special"></slot>
    </div>
</template>


<script>
export default {
    data() {
        return{
        }
    },
    mounted() {
        this.$refs.modal.classList.add('modal-on');
    },
    methods:{
        close(){
            this.$refs.modal.classList.add('modal-off');
            setTimeout(() => {
                this.$emit('close') 
            }, 500);
    
            
        }
    }
}
</script>

<style scoped>
.close{
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.modal{
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 300px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.5s;
    transform: translateY(500px);
    border-radius: 4px;
}
.modal-on{
    transform: translateY(0);
    opacity: 1;
}

.modal-off{
    transform: translateY(-300px);
    opacity: 0;
}
</style>