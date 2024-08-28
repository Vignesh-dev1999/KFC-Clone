import './App.css';
import Categories from './components/categories/cate';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Nav from './components/nav/nav';
import Offers from './components/offers/offers';
import Pic from './components/pic/pic';
import Start from './components/startover/start';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">

      <Nav />
      <ChakraProvider>
        <Hero />
      </ChakraProvider>
      <Start />
      <Pic />
      <Categories />
      <Offers />
      <Footer />

    </div>
  );
}

export default App;
