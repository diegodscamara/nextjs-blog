import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Front End developer with experience building responsive, accessible, and scalable websites and web applications.

          I specialize in React.js, JavaScript, HTML5, and CSS3. I also have experience working with advertising, marketing, SEO, and knowledge in User Interface Design(UI), User Experience (UX), and Agile Methodologies (Scrum).</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}