import React, { useState, useCallback } from 'react';

export default function Principal(){

const clienteInicio = {
  nomeCliente: null,
  cpfCliente: null,
  telefoneCliente: null,
  emailCliente: null,
  logradouro: null,
  numero: null,
  bairro: null,
  municipio: null,
  uf: null,
  cep: null,
};

const produtoInicio = {
  SKU: null,
  nomeProduto: null,
  descricaoProduto: null,
  preco: null,
  qtd: null,
};

const [cliente, setCliente] = useState(clienteInicio);
var listaCliente = [];

const [produto, setProduto] = useState(produtoInicio);
var listaProduto = [];

const handleChangeCliente = useCallback(
  (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  },
  [cliente]
);

const handleChangeProduto = useCallback(
  (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  },
  [produto]
);

const validateDuplicateCliente = useCallback((e) => {
  if (
    listaCliente.findIndex((a) => a.rg === cliente.rg) !== -1 && listaCliente.length > 0
    ) {
    alert("Cadastro Duplicado");

    return true;
  }
  return false;
},[cliente,listaCliente]);

const validateDuplicateProduto = useCallback((e) => {
  if (
    listaProduto.findIndex((a) => a.SKU === produto.SKU) !== -1 && listaProduto.length > 0
  ) {
    alert("Cadastro Duplicado");

    return true;
  }
  return false;
},[produto,listaProduto]);


const validateSubmitCliente = useCallback(
  (e) => {
    if (
      cliente.nomeCliente &&
      cliente.cpfCliente &&
      cliente.telefoneCliente &&
      cliente.emailCliente &&
      cliente.logradouro &&
      cliente.numero &&
      cliente.bairro &&
      cliente.municipio &&
      cliente.uf &&
      cliente.cep
    ) {
      alert("Cliente Cadastrado!");  
      return true;
    }
    alert("Algum campo está vazio");
    return false;
  },
  [cliente]
);


const validateSubmitProduto = useCallback(
  (e) => {
    if (
      produto.SKU &&
      produto.descricaoProduto &&
      produto.nomeProduto &&
      produto.preco &&
      produto.qtd
    ) {
      alert("Produto Cadastrado!");  
      return true;
    }
    alert("Algum campo está vazio");

    return false;
  },
  [produto]
);
const handleSubmitCliente = useCallback(
  (e) => {
    e.preventDefault();
    if (validateSubmitCliente()) {
      if (validateDuplicateCliente()) {
        return;
      }
      listaCliente.push(cliente);
      let clientes = [];
      if (!localStorage.getItem("clientes") === undefined) {
        clientes = [...JSON.parse(localStorage.getItem("clientes")), cliente];
      } else {
        clientes.push(cliente);
      }
      localStorage.setItem("clientes", JSON.stringify(clientes));
    }
    setCliente('');
    console.log(listaCliente);
  },
  [listaCliente, cliente, validateDuplicateCliente, validateSubmitCliente]
);


const handleSubmitProduto = useCallback(
  (e) => {
    e.preventDefault();
    if (validateSubmitProduto()) {
      if (validateDuplicateProduto()) {
        return;
      }
      listaProduto.push(produto);
      let produtos = [];
      if (!localStorage.getItem("produtos") === undefined) {
        produtos = [...JSON.parse(localStorage.getItem("produtos")), produto];
      } else {
        produtos.push(produto);
      }
      localStorage.setItem("produtos", JSON.stringify(produtos));
    }
    setProduto('');
    console.log(listaProduto);
  },
  [listaProduto, produto, validateDuplicateProduto, validateSubmitProduto]
);

  return (
    <section className="section center-content">
      <div className="container-sm">
        <div className="section-inner">
          <div className="section-content">
          <h3 className="mt-0 mb-16">
              <span className="text-color-primary">Sistema e-commerce para inventário de produtos e dados de clientes</span>
          </h3>
            <div className="container-xs">
              <p className="m-0 mb-32">
                     Preencha os formulários abaixo e clique em salvar.
              </p>
            </div> 
          </div>
         </div>
      </div>
      <div className="tiles-wrap">
            <div className="tiles-item reveal-from-right">
              <div className="tiles-item-inner">
                <div>
                  <h5 className="center-content">Cadastro de Clientes</h5>
                  <form className="form-cadastro" onSubmit={handleSubmitCliente}>
                    <input
                      placeholder="Nome Completo"
                      className="form-input"
                      name="nomeCliente"
                      value={cliente.nomeCliente || ""}
                      onChange={handleChangeCliente}
                      required={true}
                    ></input>
                    <input
                      placeholder="CPF"
                      className="form-input"
                      name="cpfCliente"
                      type="number"
                      value={cliente.cpfCliente || ""}
                      onChange={handleChangeCliente}
                      required={true}
                    ></input>
                    <input
                      placeholder="Telefone"
                      className="form-input"
                      name="telefoneCliente"
                      value={cliente.telefoneCliente || ""}
                      type="number"
                      onChange={handleChangeCliente}
                      required={true}
                    ></input>
                    <input
                      placeholder="E-mail"
                      className="form-input"
                      type="email"
                      name="emailCliente"
                      value={cliente.emailCliente || ""}
                      onChange={handleChangeCliente}
                    ></input>
                    <input
                      placeholder="Logradouro"
                      className="form-input"
                      name="logradouro"
                      value={cliente.logradouro || ""}
                      onChange={handleChangeCliente}
                    ></input>
                    <input
                      placeholder="Número"
                      className="form-input"
                      name="numero"
                      value={cliente.numero || ""}
                      onChange={handleChangeCliente}
                      required={true}
                    ></input>
                    <input
                      placeholder="Bairro"
                      className="form-input"
                      name="bairro"
                      value={cliente.bairro || ""}
                      onChange={handleChangeCliente}
                    ></input>
                    <input
                      placeholder="Município"
                      className="form-input"
                      name="municipio"
                      value={cliente.municipio || ""}
                      onChange={handleChangeCliente}
                    ></input>
                    <input
                      placeholder="UF"
                      className="form-input"
                      name="uf"
                      value={cliente.uf || ""}
                      onChange={handleChangeCliente}
                    ></input>
                    <input
                      placeholder="CEP"
                      className="form-input"
                      name="cep"
                      value={cliente.cep || ""}
                      type="number"
                      onChange={handleChangeCliente}
                      required={true}
                    ></input>
                    <button className="button-sn">Salvar</button>
                    </form>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right">
              <div className="tiles-item-inner">
                <div>
                  <h5 className="center-content">Cadastro de Produtos</h5>
                  <form className="form-cadastro" onSubmit={handleSubmitProduto}>
                    <input
                      placeholder="SKU"
                      className="form-input"
                      name="SKU"
                      value={produto.SKU || ""}
                      onChange={handleChangeProduto}
                      required={true}
                    ></input>
                    <input
                      placeholder="Nome do Produto"
                      className="form-input"
                      name="nomeProduto"
                      value={produto.nomeProduto || ""}
                      onChange={handleChangeProduto}
                      required={true}
                    ></input>
                    <textarea
                      placeholder="Descrição"
                      className="form-input"
                      name="descricaoProduto"
                      value={produto.descricaoProduto || ""}
                      onChange={handleChangeProduto}
                      required={true}
                    ></textarea>
                    <input
                      placeholder="Preço de Venda"
                      className="form-input"
                      name="preco"
                      value={produto.preco || ""}
                      type="number"
                      onChange={handleChangeProduto}
                    ></input>
                    <input
                      placeholder="Quantidade"
                      className="form-input"
                      name="qtd"
                      value={produto.qtd || ""}
                      type="number"
                      onChange={handleChangeProduto}
                      required={true}
                    ></input>
                    <button className="button-sn">Salvar</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

