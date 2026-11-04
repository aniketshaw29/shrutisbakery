import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
