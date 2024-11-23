import { defineStore } from 'pinia'
import { fetchHelper } from '@/helpers/fetch-helper';

const baseUrl = 'http://localhost:5000/api/auth';

export const useUserAuth = defineStore('user', {

  state: () => ({
    posts: [],
    userRegisterAlert: null,
  }),

  actions: {

    async register(user: Object) {
      const res = await fetchHelper.post(`${baseUrl}/register`, user);
      return await res.json();
      // this.userRegisterAlert = await res.json();
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