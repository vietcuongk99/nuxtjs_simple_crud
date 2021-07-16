<template>
    <div>
        <b-container>
            <b-button variant="success" v-b-modal.modal-1 @click="createUser">New User</b-button>
            <div class="mt-3">
              <b-table-simple sticky-header>
                <b-thead>
                  <b-tr>
                    <b-th>ID</b-th>
                    <b-th>Name</b-th>
                    <b-th>Description</b-th>
                    <b-th>Created at</b-th>
                    <b-th>Avatar</b-th>
                    <b-th></b-th>
                    <b-th></b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <UserItem
                    v-for="(user, index) in userList" :key="index"
                    :user="user"
                    @deleteUser="deleteUser"
                    @editUser="editUser"
                    :class="[clickedUserClass(user.id)]"
                  />
                </b-tbody>
             </b-table-simple>
            </div>
        </b-container>
        <b-modal id="modal-1" :title="titleModal"
          @ok="submitNewUser"
          @hidden="resetModal"
        >
          <b-form-group
            id="input-group-1"
            label="Name:"
            label-for="inputName"
          >
            <b-form-input
              id="inputName"
              type="text"
              v-model="newUser.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Avatar url:"
            label-for="inputAvatar"
          >
            <b-form-input
              id="inputAvatar"
              type="text"
              v-model="newUser.avatar"
              placeholder="Enter avatar url"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="inputDes"
          >
            <b-form-input
              id="inputDes"
              type="text"
              v-model="newUser.description"
              placeholder="Enter description"
              required
            ></b-form-input>
          </b-form-group>
        </b-modal>
        <b-modal id="modal-2" :title="titleModal"
          @ok="confirmDeleteUser"
          @hidden="resetModal"
        >
          <div>Are you want to delete this user?</div>
        </b-modal>
    </div>
</template>

<script>
const axios = require('axios');
const apiURL = process.env.baseAPIUrl;

export default {
  data() {
    return {
      userList: [],
      newUser: {
        name: '',
        description: '',
        avatar: '',
      },
      clickedUser: {
        id: null
      },
      titleModal: '',
    }
  },
  methods: {
    getAllUser() {
      axios.get(apiURL)
      .then((response) => {
        console.log(response.data);
        this.resetModal();
        this.userList = response.data;
      })
      .catch((err) => {})
    },
    createUser() {
      this.titleModal = "Create New User";
    },
    submitNewUser() {
      let user = {
          "name": this.newUser.name,
          "avatar": this.newUser.avatar,
          "description": this.newUser.description,
      };
      let url = apiURL;
      if(this.clickedUser.id) {
        url += '/' + this.clickedUser.id;
        axios.put(url, user)
        .then((response) => {
          console.log(response);
          this.resetModal();
          this.getAllUser();
        })
      } else {
        axios.post(url, user)
        .then((response) => {
          console.log(response);
          this.resetModal();
          this.getAllUser();
        })
      }
    },
    editUser(id, name, description, createdAt, avatar) {
      this.titleModal = "Update User";
      this.clickedUser.id = id;
      this.newUser.avatar = avatar;
      this.newUser.name = name;
      this.newUser.description = description;
    },
    deleteUser(id) {
      this.clickedUser.id = id;
      this.titleModal = "Confirm Delete User"
    },
    confirmDeleteUser() {
      if(this.clickedUser.id)
      axios.delete(apiURL + '/' + this.clickedUser.id)
        .then((response) => {
          console.log(response);
          this.resetModal();
          this.getAllUser();
        })
    },
    clickedUserClass(id) {
      let userClass = '';
      if (this.clickedUser.id === id) {
        userClass = 'selected';
      }
      return userClass;     
    },
    resetModal() {
      this.clickedUser.id = null;
      this.newUser.avatar = '';
      this.newUser.name = '';
      this.newUser.description = '';
      this.titleModal = '';
    }
  },
  mounted() {
    this.getAllUser();
  }
  
}
</script>

<style scoped>
tr:hover {
  background-color: rgb(228, 228, 228);
  cursor: pointer;
}
.selected {
  background-color: rgb(228, 228, 228);
}
</style>