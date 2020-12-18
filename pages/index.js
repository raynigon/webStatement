import Head from 'next/head'
import Banner from '../components/banner/banner'
import Footer from '../components/footer/footer'
import Menu from '../components/menu/menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contain COVID-19</title>
      </Head>

      <main >
        <Banner></Banner>
        <Menu></Menu>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
