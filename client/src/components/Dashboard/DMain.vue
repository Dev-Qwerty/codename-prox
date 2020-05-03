<template>
    <div>
        <Nav />
        <h1>Dashboard</h1>
        <p>To Do</p>
        <button @click="logout()">Logout</button>
    </div>
</template>

<script>
import Nav from '@/components/Dashboard/Navbar.vue'

export default {
    components: {
      Nav
    },
    methods: {
        logout() {
            let url = "http://localhost:3000/auth/logout";
            this.$http.get(url, {}).then(response => {
                alert(response.data.status);
                this.$cookies.remove("username");
                this.$cookies.remove("jwt");
                window.location.href = "http://localhost:8080/";
            })
            .catch(function(error) {
                alert(error)
            })
            
        }
    }
}
</script>
