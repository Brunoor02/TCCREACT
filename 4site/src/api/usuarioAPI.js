import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000/'
})

export async function logar(email, senha){
    const r = await api.post('/usuario/logar', {
                email:email,
                senha:senha
        });
        return r.data;
}