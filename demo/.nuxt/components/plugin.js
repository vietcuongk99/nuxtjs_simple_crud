import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  UserDeleteUserModal: () => import('../..\\components\\user\\DeleteUserModal.vue' /* webpackChunkName: "components/user-delete-user-modal" */).then(c => wrapFunctional(c.default || c)),
  UserItem: () => import('../..\\components\\user\\UserItem.vue' /* webpackChunkName: "components/user-item" */).then(c => wrapFunctional(c.default || c)),
  UserModal: () => import('../..\\components\\user\\UserModal.vue' /* webpackChunkName: "components/user-modal" */).then(c => wrapFunctional(c.default || c)),
  UserTable: () => import('../..\\components\\user\\UserTable.vue' /* webpackChunkName: "components/user-table" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
