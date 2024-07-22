import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchHelper } from '@/helpers/fetch-helper';

const baseUrl = 'http://localhost:5000/api/auth';

export const useUserAuth = defineStore('user', {

  state: () => ({
    posts: [],
    userData: null,
    error: null
  }),

  actions: {

    // async register(user: Object) {
    //   await fetchHelper.post(`${baseUrl}/register`, user);
    // },

    async register(registerData: Object) {
      console.log(registerData)
      try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(registerData)
        })

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        
        this.userData = await res.json();
      }

      catch (error) {
        console.log(error)
      }
      
    },




    async getBlogPost() {
      
        const res = await fetch('http://localhost:5000/api/user-metadata/profil/10004', {
          method: "GET"
        })
        const data = await res.json()
      
        this.posts = data
      
    }
}
})