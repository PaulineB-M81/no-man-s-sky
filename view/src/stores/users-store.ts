import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchHelper } from '@/helpers/fetch-helper';

const baseUrl = 'http://localhost:5000/api/auth';

export const useUserAuth = defineStore('user', {

  state: () => ({
    posts: [],
  }),

  actions: {

    // async register(user: Object) {
    //   await fetchHelper.post(`${baseUrl}/register`, user);
    // },

    async register(registerData: Object) {
      
      try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
          method: "POST",
          body: JSON.stringify(registerData)
        })
        
        return res;
      }

      catch (e) {
        return e;
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