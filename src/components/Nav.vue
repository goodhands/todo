<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" >
                    <span aria-hidden="false"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                </a>
            </div>
            <div class="navbar-menu nav-center">
                <div class="navbar-start">
                    <router-link to="/tasks" class="navbar-item">
                        My Todo
                    </router-link>
                </div>
            </div>
            <div class="navbar-settings">
                <router-link to="/todo/new" class="add-new-task">+</router-link>
                <span href="#" class="user-action-area" @mouseenter="showUserArea = true">
                    <ul @mouseleave="showUserArea = false" v-if="showUserArea">
                        <li>
                            <router-link to="/login">Sign in</router-link>
                        </li>
                        <li>
                            <router-link to="/login">Sign in</router-link>
                        </li>
                    </ul>
                </span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showUserArea: false
        }
    },
}
</script>