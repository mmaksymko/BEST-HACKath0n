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
  },
});