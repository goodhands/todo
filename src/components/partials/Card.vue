<template>
    <router-link to="/">
        <div class="card bg-todo">            
            <h2 class="title is-5 text-white is-marginless">Create my encoding prototype</h2>
            <span>Deadline: 20/09/19</span>
        </div>
    </router-link>
</template>

<script>
import axios from "axios";

export default {
    props:{
        color:{
            type: String,
            default: 'bg-todo'
        },

        category:{
            type: String,
            // required: true,
            default: 'todo'
        }
    },

    data() {
        return {
            users: []
        }
    },

    mounted() {
        axios.post('http://localhost:3000/users')
        .then((result) => {
            this.users = result.data
        })
    },
}
</script>