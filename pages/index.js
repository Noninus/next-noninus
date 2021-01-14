import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Home() {
  const [opt1, setOpt1] = React.useState('');
  const [opt2, setOpt2] = React.useState('');
  const [answer, setAnswer] = React.useState(null);

  const handleClick =() => {
    let min = Math.ceil(0);
    let max = Math.floor(2);
    let random = Math.floor(Math.random() * (max - min)) + min;
    setAnswer(random === 0? opt1 : opt2);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Me ajuda decidir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Me ajuda decidir
        </h1>

        <p className={styles.description}>
          Digite uma pergunta que o polvo decide pra ti!
        </p>
        {answer ?  <Grid
          container
          direction="column"
          justify="center"
          alignItems="center" 
          spacing={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3} >
              <TextField disabled={true} id="filled-basic" label="Opção 01" variant="filled" onChange={(e) => setOpt1(e.target.value)} />
              <Grid item> <p>vs</p>  </Grid>
              <TextField disabled={true} id="filled-basic" label="Opção 02" variant="filled" onChange={(e) => setOpt2(e.target.value)} />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => setAnswer(null)}>Tentar novamente</Button>
            </Grid>
            <p style={{visibility: answer === null ? 'hidden': ''}}className={styles.subtitle}>
              {answer === null ? 'a' : answer}
            </p>
        </Grid>:  <Grid
          container
          direction="column"
          justify="center"
          alignItems="center" 
          spacing={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3} >
              <TextField id="filled-basic" label="Opção 01" variant="filled" onChange={(e) => setOpt1(e.target.value)} />
              <Grid item> <p>vs</p>  </Grid>
              <TextField id="filled-basic" label="Opção 02" variant="filled" onChange={(e) => setOpt2(e.target.value)} />
            </Grid>
            <Grid item>
              <Button disabled={opt1 === '' || opt2 === '' ? true : false}variant="contained" onClick={handleClick}>Decidir</Button>
            </Grid>
            <p style={{visibility: answer === null ? 'hidden': ''}}className={styles.subtitle}>
              {'hidden'}
            </p>
        </Grid>}
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Noninus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Rafael Nonino Filho
        
        </a>
      </footer>
    </div>
  )
}
