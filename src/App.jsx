
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { publicRoutes } from './Routes';
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.conponent;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
