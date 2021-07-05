import { routes } from '../config/routes';
import CarrinhoActions from '../flux/actions/CarrinhoActions';
import { Produto, ProdutoRequisicao } from './../interfaces/index';
import Request from './Request';

class ProdutoService {

    async listarTodos() {
        try {
            let resultado = await Request.get(routes.API.PRODUTO);
            return this._converterObjetoProduto(resultado.data)
        } catch(erro) {
            return Promise.reject('Ocorreu um erro ao listar os produtos da loja.');
        }
    }

    _converterObjetoProduto(respostaRequisicao: ProdutoRequisicao[]) {
        let produtos: Produto[] = [];
        respostaRequisicao.forEach((item: ProdutoRequisicao) => {
            let produto: Produto = {
                id: Number(item.id),
                nome: item.name,
                preco: Number(item.price),
                imagem: item.image,
                estoque: item.stock,
                criadoEm: item.createdAt
            };
            produtos.push(produto);
        })
        return produtos;
    }

}

export default new ProdutoService();