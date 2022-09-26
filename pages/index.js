import Header from "../components/header";
import About from '../components/about'
import Main from '../components/main'
import Works from "../components/works";
import Links from "../components/links";
import Footer from "../components/footer";
import IndexPage from "../components/indexpage";
export default function Home() {


  return (
       <div className='bg-secondary min-h-screen dark:bg-primary'>
          <IndexPage/>
          <Header/>
          <About/>
          <Main/>
          <Works/>
          <Links/>
          <Footer/>
       </div>
  )
}
