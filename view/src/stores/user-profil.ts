import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useblogPost = defineStore('blog', {

  state: () => ({
    posts: [],
  }),

  actions: {
    async getBlogPost() {
      
        const res = await fetch('http://localhost:5000/api/user-metadata/profil/10004', {
          method: "GET"
        })
        const data = await res.json()
      
        this.posts = data
      
    }
}
})