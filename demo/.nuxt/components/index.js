import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as UserDeleteUserModal } from '../..\\components\\user\\DeleteUserModal.vue'
export { default as UserItem } from '../..\\components\\user\\UserItem.vue'
export { default as UserModal } from '../..\\components\\user\\UserModal.vue'
export { default as UserTable } from '../..\\components\\user\\UserTable.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyUserDeleteUserModal = import('../..\\components\\user\\DeleteUserModal.vue' /* webpackChunkName: "components/user-delete-user-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyUserItem = import('../..\\components\\user\\UserItem.vue' /* webpackChunkName: "components/user-item" */).then(c => wrapFunctional(c.default || c))
export const LazyUserModal = import('../..\\components\\user\\UserModal.vue' /* webpackChunkName: "components/user-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyUserTable = import('../..\\components\\user\\UserTable.vue' /* webpackChunkName: "components/user-table" */).then(c => wrapFunctional(c.default || c))
