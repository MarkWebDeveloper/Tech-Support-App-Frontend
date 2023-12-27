import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

export const useHeaderStore = defineStore('headerStore', () => {

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
    }
    
    function redirectToCreate() {
        const redirectPath: any = route.query.redirect || '/create'
        router.push(redirectPath)
    }

    function redirectToEdit() {
        const redirectPath: any = route.query.redirect || '/edit'
        router.push(redirectPath)
    }

    function redirectToPending() {
        const redirectPath: any = route.query.redirect || '/pending'
        router.push(redirectPath)
    }

    function redirectToResolved() {
        const redirectPath: any = route.query.redirect || '/resolved'
        router.push(redirectPath)
    }

  return { isUser, menuIsHidden, toggleMenuVisibility, checkUserType, showButton, redirectToResolved, redirectToTickets, redirectToCreate, redirectToEdit, redirectToPending }
})