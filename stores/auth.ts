
import { defineStore } from 'pinia';
import users from '@/utils/users.json';
interface UserPayloadInterface {
  id: number;
  username: string;
  password: string;
  token: string;
}
const secretKey = 'base64:l4SGoC4xh1FsNCzSxKaFkQlajOdzBdWTNM9BxizQ5hY='; 
export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const data = users.find(u => u.username === username && u.password === password);
      this.loading = true;
      if (data) {
        const generateToken = this.generateToken(data);
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = generateToken; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
        this.loading = false;
        return { authenticated : true }
      } else {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        this.authenticated = false; // set authenticated  state value to false
        token.value = null; // clear the token cookie
        this.loading = false;
        return { authenticated : false }
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
    generateToken(user:UserPayloadInterface) {
      // In a real-world scenario, you would use a library like jsonwebtoken to generate a secure JWT.
      // For simplicity, we'll just use a basic token here.
      return `Bearer ${user.id}:${user.username}`;
    }
  },
});