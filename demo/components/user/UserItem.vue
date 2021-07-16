<template>
    <b-tr>
        <b-td>{{user.id}}</b-td>
        <b-td>{{user.name}}</b-td>
        <b-td>{{user.description}}</b-td>
        <b-td>{{user.createdAt}}</b-td>
        <b-td>{{user.avatar}}</b-td>
        <b-td><b-button variant="primary" @click="$emit('editUser', user.id, user.name, user.description, user.createdAt, user.avatar)" v-b-modal.modal-1>Edit</b-button></b-td>
        <b-td><b-button variant="danger" @click="$emit('deleteUser', user.id)" v-b-modal.modal-2>Delete</b-button></b-td>
    </b-tr>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        user: {
            type: Object,
            default: {},
        },
    },
}
</script>

<style scoped>
th, b-td {
    padding: 1rem;
}
</style>