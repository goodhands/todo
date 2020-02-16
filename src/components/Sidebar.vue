<template>
    <div>
        <h2 class="title is-5 item-between">
            My Tasks 
            <a href="#">+</a>
        </h2>

        <ul class="side-menu">
            <li>
                <router-link to="/todo">Todo</router-link>
            </li>
            <li>
                <router-link to="/todo/upcoming">Upcoming</router-link>
            </li>
            <li>
                <router-link to="/todo/unscheduled">Not Scheduled</router-link>
            </li>
            <li>
                <router-link to="/todo/completed">Completed</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>