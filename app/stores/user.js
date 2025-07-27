import { defineStore } from "pinia";

export const useUserStore = defineStore('user',{
    state:()=>({
        users:[],
        loading:false,
        error:null,
    }),
    actions:{
        async fetchUsers(){
          
            this.loading = true;
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                this.users = await res.json();
            } catch(err){
                this.error = err
            } finally {
                this.loading = false
            }
        },
        getUserById(id){
            if(!this.users.length){
                
                return null;
            } 
            for(let x of this.users){
                console.log(x)
                if(x.id == id){
                    return x;
                }
            }
        }
    }
})