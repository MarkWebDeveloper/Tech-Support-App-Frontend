import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from './usersStore'

export const useHeaderStore = defineStore('headerStore', () => {

    const userStore = useUsersStore()

    const route = useRoute()
    const router = useRouter()

    let isUser = ref(true)
    let menuIsHidden = ref(true)
    let showButton = ref(false)
    
    function toggleMenuVisibility () {
        if (menuIsHidden.value == true) {
            menuIsHidden.value = false
        } else {
            menuIsHidden.value = true
        }
    }

    function hideMenu() {
        if (menuIsHidden.value == true) {
            menuIsHidden.value = false
        }
    }
    
    function checkUserType (user: any) {
        if (user.type == 0) {
            isUser.value = true
        } else {
            isUser.value = false
        }
    }

    function redirectToTickets() {
        const redirectPath: any = route.query.redirect || '/tickets'
        router.push(redirectPath)
        menuIsHidden.value = true
    }
    
    function redirectToCreate() {
        const redirectPath: any = route.query.redirect || '/create'
        router.push(redirectPath)
        menuIsHidden.value = true
    }

    function redirectToEdit() {
        const redirectPath: any = route.query.redirect || '/edit'
        router.push(redirectPath)
        menuIsHidden.value = true
    }

    function redirectToPending() {
        const redirectPath: any = route.query.redirect || '/pending'
        router.push(redirectPath)
        menuIsHidden.value = true
    }

    function redirectToResolved() {
        const redirectPath: any = route.query.redirect || '/resolved'
        router.push(redirectPath)
        menuIsHidden.value = true
    }

    function logout () {
        menuIsHidden.value = true
        userStore.isAuthenticated = false
        const redirectPath: any = route.query.redirect || '/'
        router.push(redirectPath)
    }

  return { isUser, menuIsHidden, toggleMenuVisibility, hideMenu, checkUserType, showButton, redirectToResolved, redirectToTickets, redirectToCreate, redirectToEdit, redirectToPending, logout }
})