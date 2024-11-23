import { defineStore } from 'pinia'
import { fetchHelper } from '@/helpers/fetch-helper';

const baseUrl = 'http://localhost:5000/api/planet';

export const useUserAuth = defineStore('user', {

    state: () => ({
      posts: [],
      userRegisterAlert: null,
    }),
  
    actions: {

        async getAllPlanets() {
            const res = await fetchHelper.get(`${baseUrl}`);
            return await res.json();
            
          },
  
      async getAllPlanetsT() {
        
          const res = await fetch('http://localhost:5000/api/user-metadata/profil/10004', {
            method: "GET"
          })
          const data = await res.json()
        
          this.posts = data
        
      }
  }
  })