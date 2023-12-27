import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {

    let isUser = ref(true)
    let menuIsHidden = ref(true)
    
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

  return { isUser, menuIsHidden, toggleMenuVisibility, checkUserType }
})