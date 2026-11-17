import type { Produto } from "../types/Produtos"
import { api } from "./api"

const produtoService = {
    async listar() {
        const resposta = await api.get<Produto[]>('produtos');
        return resposta.data;
    },
    async buscar(id:number){
        const resposta = api.get(`produtos/${id}`)
        return (await resposta).data;
    }
}

export default produtoService