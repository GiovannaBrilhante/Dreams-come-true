import React, { Component } from "react"
import "./Home.css"

export default class Home extends Component {
    render() {
        return (
            <>
                <main className="principal">
                    <div className="conteudo-principal">
                        <div className="conteudo-principal-logo">
                            <div className="left conteudo-principal-subtitulo">
                                <div>
                                    <span>Dreams Come True </span>
                                </div>
                                <div>
                                    <br />
                                    <p>Seja bem vindo ao Dreams Come True, o seu website e aplicativo de sonhos. Aqui você pode registrar seus sonhos e compartilhar com seus amigos. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="conteudo-logo">
                    </div>
                </main>

            </>
        )
    }
}
