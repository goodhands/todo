<template>
    <div class="section auth-page">
        <h2 class="title is-3">Sign Up</h2>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="buttons">
            <input type="submit" class="button is-primary" value="Register"/>
        </div>
        Don't have an account? <router-link to="/register">Register here</router-link>
    </div>
</template>