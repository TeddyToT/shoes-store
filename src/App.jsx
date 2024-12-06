
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { publicRoutes } from './Routes';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.conponent;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
