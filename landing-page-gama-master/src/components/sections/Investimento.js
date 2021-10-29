import React from 'react';

const Investimento = () => {
  
  return (
    <section className="investimento">
      <div className="container">
        <div className="investimento-inner">
          <h3 className="center-content">
            Investimento
          </h3>
          <div className="container center-content">
            <p className="m-0 mb-32">
              Você pode optar entre três alternativas de pagamento:
            </p>
          </div>
          <div className="tiles-wrap">

            <div className="tiles-item reveal-from-right">
              <div className="tiles-item-inner">
                <div>
                  <h5 className="center-content">Pagamento à Vista</h5>
                  <p className="text-sm mb-0">
                  Essa é a modalidade de pagamento com a qual você já deve ter se deparado no mercado. Você paga o curso normalmente, e, conforme o pagamento estiver aprovado, fica apta/o a realizar o Gama Experience 2.0 na próxima turma da sua escolha.
                  - Pague via boleto, cartão ou pix;
                  - 38% de desconto.
                      </p>
                </div>
                <div className="investimento-item-footer text-xs mt-32 mb-0">
                  <span className="investimento-item-link">
                    <a href="https://www.gama.academy/gama-experience/desenvolvimento-full-stack" target="_blank" rel="noopener noreferrer">R$ 4.900,00 | Faça sua Inscrição</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right">
              <div className="tiles-item-inner">
                <div>
                  <h5 className="center-content">Sucesso Compartilhado (ISA)</h5>
                  <p className="text-sm mb-0">
                      Nessa modalidade, você faz o Gama Experience agora e paga até 15% da sua renda.
                      Nós temos o prazo de 1 2 meses após sua formatura para te ajudar a encontrar esse trampo.
                      Além disso, você tem 5 anos para pagar o montante devido, nesse teto estabelecido do seu salário, ou a dívida deixa de existir.
                  </p>
                </div>
                <div className="investimento-item-footer text-xs mt-32 mb-0">
                  <span className="investimento-item-link">
                    <a href="https://www.gama.academy/gama-experience/desenvolvimento-full-stack" target="_blank" rel="noopener noreferrer">R$ 7.900,00 | Faça sua Inscrição</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right">
              <div className="tiles-item-inner">
                <div>
                  <h5 className="center-content">Financiamento Estudantial</h5>
                  <p className="text-sm mb-0 ">
                    Ao escolher o Financiamento Estudantil, você será redirecionado/a para um formulário, onde serão solicitados documentos adicionais para realização da aprovação de crédito.
                    Para este modelo o valor base é de R$6.181 (já incluso taxa do IOF), totalizando um desconto de 22% no preço cheio do programa
                  </p>
                </div>
                <div className="investimento-item-footer text-xs mt-32 mb-0">
                  <span className="investimento-item-link">
                    <a href="https://www.gama.academy/gama-experience/desenvolvimento-full-stack" target="_blank" rel="noopener noreferrer">Até 24 x R$ 257,56 <br/ > | Faça sua Inscrição</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Investimento;