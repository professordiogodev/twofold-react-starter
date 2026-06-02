import React from 'react'

function Hero() {
  return (
    <div className='hero'>
      <div className='headlines'>
        <h1>
          O mercado muda.
        </h1>
        <h1>
          A IA muda.
        </h1>
        <h1 className='highlight'>
          Tu tens de saber mudar com eles.
        </h1>
      </div>

      <div className='spacer-md'></div>

      <h3>Ninguém te vai buscar. Ninguém te vai avisar quando o teu stack ficou obsoleto.<br />
        A <span className='highlight'>Dionamind</span>  existe para te ensinar a guiar-te, a monitorizar-te e a preparar-te para a realidade
        — com ou sem IA pelo caminho.</h3>

      <div className='spacer-lg'></div>

      <div className='actions'>
        <button className='primary'>SUBSCREVER À NEWSLETTER<img /></button>
        <button className='secondary'>QUERO CONHECER OS CURSOS</button>
      </div>

    </div>
  )
}

export default Hero