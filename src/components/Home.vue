<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <h2 class="title">Todo <span class="text-grey">(3)</span></h2>
                <card></card>
            </div>
            <div class="column">
                <h2 class="title">Upcoming <span class="text-grey">(3)</span></h2>
                <card></card>
            </div>
            <div class="column">
                <h2 class="title">Not Scheduled <span class="text-grey">(3)</span></h2>
                <card></card>
            </div>
        </div>
    </section>
</template>

<script>
import Card from './partials/Card.vue';

export default {
    components:{
        Card
    },

    name: 'Home',
    mounted() {
        console.log("Home page")
    },
}
</script>