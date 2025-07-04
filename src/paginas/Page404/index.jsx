import styles from './Page404.module.css'

function Page404 () {
    return (
        <>
            <h2 className={ styles.error }>Algo de errado não está certo</h2>
            <div className={ styles.textos }>
                <span className={ styles.textoError }>404</span> <br/>
                <strong className={ styles.texto_vermelho }>PÁGINA NÃO LOCALIZADA</strong>
            </div>
        </>
    )
}

export default Page404