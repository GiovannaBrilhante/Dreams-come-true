import React, { Component } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import dev_gi from "../../../assets/images/dev_gi.png"
import dev_ga from "../../../assets/images/dev_ga.png"


export default class Home extends Component {

    renderBanner() {
        return (
            <div className="banner" id="home">
                <div className="container">
                    <div className="contentBox">
                        <div>
                            <h1 className="an-expansion an-inf-expansion">Dreams Come True</h1>
                            <p className="an-fadeIn  esconder">
                                Seja bem vindo ao Dreams Come True, o seu website de sonhos. Aqui você pode registrar seus sonhos e compartilhar com seus amigos.
                            </p>
                            <Link to="/restaurantes" >
                                <a className="btnD1 an-fadeIn-btn">Conheça os Restaurantes</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderDevelopers() {
        return (
            <div id="speakers" className="section-developers wf-section">
                <div className="container-web-1216 center w-container">
                    <h2 className="header-devs">Desenvolvedores dos seus sonhos</h2>
                    <div className="devs-colletions w-dyn-list">
                        <div role="list" className="lista-dev w-dyn-items">
                            <div role="listitem" className="dev-card w-dyn-item">
                                <div className="div-imagem-avatar">
                                    <div className="avatar-cover">
                                        <img alt="" loading="lazy" src={dev_gi} sizes="100vw" className="avatar" />
                                    </div>
                                    <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6380c3e02a3378ffbeb10627_faixa-speackers.svg" loading="lazy" alt="" />
                                </div>
                                <div className="dev-infos">
                                    <div className="dev-tag">
                                        <p className="p-14 dev-cargo">Dona</p>
                                    </div>
                                    <h3 className="healine-18 dev-name">Giovanna Brilhante</h3>
                                    <p className="p-14 dev-about">CTO (Chief Technology Officer) <br /><strong>Dreams Lover</strong></p>
                                </div>
                            </div>
                            <div role="listitem" className="dev-card w-dyn-item">
                                {
                                    <div className="wrapper">
                                        <div className="card front-face">
                                            <div className="div-imagem-avatar">
                                                <div className="avatar-cover">
                                                    <img alt="" loading="lazy" src={dev_ga} sizes="100vw" className="avatar" />
                                                </div>
                                                <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6380c3e02a3378ffbeb10627_faixa-speackers.svg" loading="lazy" alt="" />
                                            </div>
                                            <div className="dev-infos">
                                                <div className="dev-tag">
                                                    <p className="p-14 dev-cargo">Dono</p>
                                                </div>
                                                <h3 className="healine-18 dev-name">Gabriel Silva</h3>
                                                <p className="p-14 dev-about">CTO (Chief Technology Officer) <br /><strong>Dreams Lover</strong></p>
                                            </div>
                                        </div>
                                        <div className="card back-face">
                                            <div className="info">
                                                <div className="title">Desenvolvedor</div>
                                                <p>Entre em contato comigo <br />por meio das redes</p>
                                            </div>
                                            <div>
                                                <a href="https://www.instagram.com/theo_burgues/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                                <a href="https://github.com/taylorburgues" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                                                <a href="https://twitter.com/theo_burgues" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                                <a href="https://mail.google.com/mail/u/0/?fs=1&to=theo_xone@outlook.com&tf=cm"
                                                    target="_blank" rel="noreferrer"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <>
                <main className="principal dark">
                    {this.renderBanner()}
                    {this.renderDevelopers()}

                    <div>

                    </div>
                </main>
            </>
        )
    }
}
