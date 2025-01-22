
import './commonResource/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import './commonResource/css/styles.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SectionOne from './components/Main/SectionOne'
import SectionTwo from './components/Main/SectionTwo'
import SectionThree from './components/Main/SectionThree'
import SectionFour from './components/Main/SectionFour'
import SectionFive from './components/Main/SectionFive'
import SectionSix from './components/Main/SectionSix'
import Alert from './components/Main/Alert'

function App() {


  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Alert />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
