import DocentesCAMB from '../../componentes/Docentes/CardsDocentes';
import styles from './Quemsomos.module.css';

function QuemSomos() {
    return (
        <>
        <section className={ styles.sobre }>
            <h2>Quem somos</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat  voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse  quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo  voluptas nulla pariatur?</p> <br/>
            <h2>O que fazemos</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat  voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse  quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo  voluptas nulla pariatur?</p> <br/>
            <figure className={ styles.img }>
                <img className="img-folha" src="/grafismo-folha.svg" alt="Imagem de paragrafo"></img>
            </figure>
        </section>
        <div className={ styles.docentes }>
            <h3>Docentes</h3> <br/>
            <DocentesCAMB/>
        </div><br/>
        </>
    )
}

export default QuemSomos