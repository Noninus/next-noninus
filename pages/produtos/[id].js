import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            },
            params: {
                id: '2'
            }
        }],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id,
            descricao: 'Nike Air Force'
        }
    }
}

function Produtos(props) {
    return <div className={styles.container}>
        <Head>
            <title>Produto {props.descricao}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>Id do produto: {props.id}</div>
    </div>


}

export default Produtos;