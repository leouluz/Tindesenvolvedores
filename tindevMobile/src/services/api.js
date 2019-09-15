import axios from 'axios';
 const api = axios.create({
   baseURL: 'http://localhost:3333'
 });

 export default api;

/*
 * apenas para usar o Localhost no android 
 * adb reverse tcp:3333 tcp:3333 - Quando acessar
 * o server 3333 procurar pelo 3333 da minha maquina
*/