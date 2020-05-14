<template>
    <div>
        <h1>Update Profile Page</h1>
        <input type="text" name="email" placeholder="Enter new email here" v-model="email">
        <input type="submit" @click.prevent="updateProfile()">
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ""
        }
    },
    methods: {
        updateProfile() {
            let url = "localhost:3000/auth/updateProfile/1b1a2be4-4a63-4c2c-81cd-8be1bf6964c0";
            this.$http.post(url, {
                email: this.email
            })
            .then(response => {
                alert(response);
            })
            .catch(err => alert(err));
        }
    },
}
</script>