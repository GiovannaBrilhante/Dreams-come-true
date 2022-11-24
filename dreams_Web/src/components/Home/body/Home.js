import React from "react"
import "./Home.css"

export default function Home() {
    return (

        <div>
            <section className="principal">
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
            </section>

            <div className="carousel-item active">
                <div className="carousel-container">
                    <div className="carousel-content">
                        <h2 className="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                            ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea
                            voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <div>
                            <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                            <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                        </div>
                    </div>
                </div>
            </div>


            {/*<div className="conteudo-onda">
                <div className="row">
                    <div className="left conteudo-onda-texto">
                        <p>Seja bem vindo ao Dreams Come True, o seu website e aplicativo de sonhos. Aqui você pode registrar seus sonhos e compartilhar com seus amigos. </p>
                        <div>
                            <p>Se você ainda não tem uma conta, clique no botão abaixo para se cadastrar.</p>
                        </div>

                        <div className="conteudo-onda-botao">
                            <a href="/cadastro" className="btn btn-primary">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}
