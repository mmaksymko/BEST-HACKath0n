import type { User } from '@/types';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
  }),

  actions: {
    setUser(user:User) {
      Object.assign(this, user);
    },
    async getUser(id:string) {
      const response = await fetch(`http://localhost:7000/user/get/${id}`, {
          method: 'GET'
      })
      if (!response.ok) return response.statusText
      this.setUser(await response.json());
    }
    
  
  },
});