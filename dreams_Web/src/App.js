import "./App.css"

import Rotas from "./Rotas"
import Header from "./components/templates/Header"
import Footer from "./components/templates/Footer"

import { BrowserRouter } from "react-router-dom"
import FloatingBtn from "./components/FloatingButton/FloatingButton"

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Rotas />
                <Footer />
                <FloatingBtn />
            </div>
        </BrowserRouter>
    )
}

export default App