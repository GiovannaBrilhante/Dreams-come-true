import React, { Component } from "react"
import "./Home.css"
import { Link } from "react-router-dom"

export default class Home extends Component {

    renderBanner() {
        return (
            <div className="banner" id="home">
                <div className="container">
                    <div className="contentBox">
                        <div>
                            <h1>Dreams Come True</h1>
                            <p>
                                Seja bem vindo ao Dreams Come True, o seu website de sonhos. Aqui você pode registrar seus sonhos e compartilhar com seus amigos.
                            </p>
                            <Link to="/restaurantes">
                                <a className="btnD1">Conheça os Restaurantes</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderDevelopers() {
        return (
            <div className="banner" id="home">
            </div>
        )
    }


    render() {
        return (
            <>
                <main className="principal">
                    {this.renderBanner()}


                    <div>

                    </div>
                </main>
            </>
        )
    }
}
