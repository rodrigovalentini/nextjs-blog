import Head from 'next/head'
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Home(props) {
  return (
    <React.Fragment>
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Portfólio</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
    <Container>
      <Box my={2}>
      <div className="container">
      <Head>
        <title>Rodrigo Valentini - Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Rodrigo Valentini
        </h1>

        <p className="description">
          <code>Desenvolvedor web</code>
        </p>

        <img className= "avatar" src="/avatar.png"/>

        <div className="grid">
          <a href="https://algartech.com/pt/" className="card">
            <h3>Analista de data center - Algar Tech &rarr;</h3>
            <p>Monitoramento de servidores, clusters, links, ativos de rede do grupo Algar e de seus clientes através do centro de operação de redes NOC. Utilizando ferramentas de monitoramento como: Splunk, Nagios, CA
            UIM, Spectrum. Relacionamento com clientes e fornecedores para tratativa de problemas. Formulação de tutoriais e projetos de melhorias para o ambiente.</p>
          </a>
          <a href="https://cedrotech.com/" className="card">
            <h3>Desenvolvedor web - Cedro Technologies &rarr;</h3>
            <p> Principais atividades: Desenvolvimento de novas funcionalidades para um sistema de gerenciamento de cursos, sendo concebido em MVC5 utilizando stored procedures para o banco de dados SQL Server, gerando de forma automatizada, toda a estrutura em DDD, a partir do esquema de entidades, através do Scaffolding do Entity Framework.
                  Atuação no back-end do módulo de cadastro, backoffice e dashboard, do produto Cadastro Digital da Cedro, tendo como ferramenta o .NET Core 2.0 e arquitetura de microsserviços em WEB API no padrão REST. Colaborando no desenvolvimento desde a elaboração, até a entrega de uma nova esteira de registros de pendências que são geradas, quando há uma nova solicitação de alteração no cadastro do usuário. Adotando o conceito de projeto orientado a domínio, onde as tabelas do banco de dados são criadas a partir do mapeamento das entidades através do Migrations do Entity Framework.</p>
          </a>

          <a href="https://www.everis.com/brazil/pt-br/home-br" className="card">
            <h3>Analista de desenvolvimento web - Everis &rarr;</h3>
            <p>Análise e resolução de demanda para aplicações legadas, com a linguagem C# nas plataformas asp.net e .net framework. Entre as capacidades exigidas, podem ser citadas: Entendimento de regras de negócio, estudo de código e automação de teste.</p>
          </a>

          <a href="https://www.sankhya.com.br/" className="card">
            <h3>Desenvolvedor web - Sankhya &rarr;</h3>
            <p>Atuar na manutenção e desenvolvimento de funcionalidades para aplicações que utilizam React JS, Angular JS e Angular 7 no front-end, bem como API’s em Python e back-end em Java. Tais soluções, com embasamento na filosofia Clean Code. Configuração de eventos para o Google Analytics e criação de relatórios com métricas personalizadas no Google Data Studio. Todas as atividades realizadas, são gerenciadas através da metodologia ágil SCRUM.</p>
          </a>
        </div>
      </main>

      <footer>
          Desenvolvido por Rodrigo Valentini
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }
        .avatar {
          width: 150px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
      </Box>
    </Container>
  </React.Fragment>

  )
}
