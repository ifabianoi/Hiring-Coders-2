import React, { useState, useEffect } from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
import validator from 'validator'

const Newsletter = () => {
  let [ email, setEmail] = useState('');
  let [emailError, setEmailError] = useState('')
  let [ item, setItem] = useState([]);
  
  
  const handleNewsletter = (e) => {
    if (validator.isEmail(email)) {
      setEmailError('Parabéns Logo você receberá os melhores conteúdos no seu e-mail')   
      e.preventDefault();
      setItem([...item,{email:email}])
      setEmail('');
    } else {
      setEmailError('Email Inválido')
    }
  };

  useEffect(()=>{

    const data = localStorage.getItem('listaEmail')
    
    if(data){
      setItem(JSON.parse(data))
     }
    
    },[])
    
    useEffect(()=>{
    
      localStorage.setItem('listaEmail',JSON.stringify(item))
    
    })

  return (
    <section className="newsletter center-content-mobile">
      <div className="container">
        <div className="newsletter-inner section-inner newsletter-split">
          <div className="newsletter-slogan">
            <h3 className="mb-0">
              Cadastre seu e-mail para receber promoções
            </h3>
          </div>
          <div className="newsletter-action">            
            <Input id="newsletter" className="form-input" type="email" label="Newsletter" labelHidden hasIcon="right" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu e-mail aqui" >
            <Button type="submit" className="button-block" onClick={handleNewsletter}>
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#63dc3e" />            
              </svg>
            </Button>                  
          </Input>
          <span>{emailError}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;