import './App.css'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'

function App() {

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
      </PageContainer>
    </div>
  )
}

export default App
