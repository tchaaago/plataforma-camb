import './style.css'

function Aprendizado() {
    const semestres = ['1', '2', '3', '4', '5', '6', '7', '8'];

  return (
    <>
      <div className="matriz">
        <header className='apresentacao'>
          <h1>Matriz Curricular do Curso</h1>
          <p>A matriz curricular do curso de Ciências Ambientais foi pensada para oferecer uma formação ampla, crítica e prática. A seguir, você pode explorar as disciplinas distribuídas ao longo dos semestres, entender a carga horária, os eixos temáticos e como elas se conectam com a prática profissional.</p>
        </header>

        <main className='corpo-matriz'>
          <section>
            <img className='banner' src='./assets/bannerMatriz.png' alt='banner'></img>
            <span>Quer ver a matriz completa e oficial?<br/> Clique para conferir</span>
            <div className='linkMatriz'>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">2010.1</a>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">2014.1</a>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">2025.1</a>
            </div>
          </section>

          <section className='consultaSemestre'>
            <div className='botoes'>
              {semestres.map((semestre) => (
              <button key={semestre} className='botao-semestre'>{semestre}º Semestre</button>
              ))}
            </div>
            <button className='botao-semestre botao-semestre-optativa'>Optativas</button>
          </section>
        </main>
      </div>
    </>
  )
}

export default Aprendizado