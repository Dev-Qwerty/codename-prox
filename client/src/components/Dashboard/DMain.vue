<template>
    <div>
        <h1>Dashboard</h1>
        <p>To Do</p>
        <button @click="logout()">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            let url = "http://localhost:3000/auth/logout";
            this.$http.get(url, {}).then(response => {
                alert(response.data.status)
                localStorage.removeItem('email')
                window.location.href = "http://localhost:8080/"
                
            })
            .catch(function(error) {
                alert(error)
            })
            
        }
    }
}
</script>
