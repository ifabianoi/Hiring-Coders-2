import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'


const CSS_HANDLES = ['formleads'] as const

interface FormLeads {
}


const FormLeads: StorefrontFunctionComponent<FormLeads> = ({ }) => {
  
  const handles = useCssHandles(CSS_HANDLES)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <div className={`${handles.formleads} flex flex-column mv3 items-center justify-center`}>
        <div className={`${handles.formleads} flex flex-column mv3 items-center justify-center`}>
          <div className={`${handles.formleads} c-on-base f4`}>Fique por dentro das nossas promoções!</div>
          <div className={`${handles.formleads} c-on-base f5`}>Cadastre-se</div>
        </div>
        <div className={`${handles.formleads} flex flex-row mv3 justify-around`}>
          <input className={`${handles.formleads} c-on-base f5`} type='text' id='nameBox' placeholder='Nome Completo' onChange={(e) => {setName(e.target.value)}}/>
          </div><div className={`${handles.formleads} flex flex-row mv3 justify-around`}>
              <input className={`${handles.formleads} c-on-base f5`} type='email' id='emailBox' placeholder='E-mail'  onChange={(e) => {setEmail(e.target.value)}}/>
            </div><div className={`${handles.formleads} flex flex-row mv3 justify-around`}>
              <input className={`${handles.formleads} c-on-base f5`} type='phone' id='phoneBox' placeholder='Telefone' onChange={(e) => {setPhone(e.target.value)}}/>
            </div><button className={`${handles.formleads} c-on-base--inverted f5 b pa3 bg-emphasis`} onClick={() => {
              if (name != '') {
                let client = {
                  'name': name,
                  'phone': phone,
                  'email': email,
                }

                localStorage.setItem('client', JSON.stringify(client))
              }
            } }>Salvar</button>
      </div>
    </>
  )
}

FormLeads.schema = {
  title: 'FormLeads',
  description: 'Formulário de Leads',
  type: 'object',
  properties: {
    productId: {
      title: 'email',
      description: 'E-mail do Lead',
      type: 'string',
      default: null,
    },
  },
}

export default FormLeads