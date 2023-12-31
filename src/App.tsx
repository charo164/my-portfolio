import { Fragment } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  )
}

export default App
