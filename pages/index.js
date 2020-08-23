import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Desenvolvedor Fullstack atuando profissionalmente na área desde 2016.
        </p>
        <p>
          Formado em Tecnologia em Desenvolvimento de Sistemas. Sólidas
          experiências no desenvolvimento backend utilizando a linguagem PHP.
          Aprendizado constante e grande paixão por ferramentas do ecossistema
          do Javascript, como por exemplo o Node.js e frameworks reativos como
          React e Vue.js.
        </p>
        <p>
          Atualmente atuando no setor de desenvolvimento mobile, com React
          Native como ferramenta principal.
        </p>
        <p>
          Usuário de Linux, e muito interessado em assuntos de DevOps,
          principalmente Docker e conteinerização de aplicações.
        </p>
        <p>
          Especialidades: Laravel, Symfony, TDD, Desenvolvimento Web, React,
          React Native, Vue, Docker{" "}
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
