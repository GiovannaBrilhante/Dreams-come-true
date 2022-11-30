import React, { Component } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import dev_gi from "../../../assets/images/dev_gi.png"
import dev_ga from "../../../assets/images/dev_ga.jpeg"



import { BsGithub } from "react-icons/bs"

export default class Home extends Component {

    renderBanner() {
        return (
            <div className="banner" id="home">
                <div className="container">
                    <div className="contentBox">
                        <div>
                            <h1 className="an-expansion an-inf-expansion">Dreams Come True</h1>
                            <p className="an-fadeIn  esconder">
                                Seja bem vindo ao Dreams Come True, o seu website de sonhos. Aqui você pode registrar seu filme dos sonhos e encontrar o restaurante que fará seu Dreams come true.
                            </p>
                            <Link to="/realidade" >
                                <a className="btnD1 an-fadeIn-btn">Conheça os Restaurantes dessa mágica experiência </a>
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
                                <div className="wrapper">
                                    <div className="card front-face">
                                        <div className="div-imagem-avatar">
                                            <div className="avatar-cover">
                                                <img alt="" loading="lazy" src={dev_gi} sizes="100vw" className="avatar" />
                                            </div>
                                            <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6380c3e02a3378ffbeb10627_faixa-speackers.svg" loading="lazy" alt="" />
                                        </div>
                                        <a className="link-github" href="https://github.com/PuniGC" target="_blank" rel="noreferrer">
                                            <div className="dev-infos">
                                                <div className="dev-tag">
                                                    <p className="p-14 dev-cargo">Dona</p>
                                                </div>
                                                <h3 className="healine-18 dev-name">Giovanna Brilhante</h3>
                                                <p className="p-14 dev-about">CTO (Chief Technology Officer) <br /><strong>Dreams Lover</strong></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div id="container" className="card back-face">
                                        <div className="info">
                                            <div className="dev-infos">
                                                <a className="link-github" href="https://github.com/GiovannaBrilhante" target="_blank" rel="noreferrer">
                                                    <div className="dev-tag-site">
                                                        <p className="p-14 dev-site">GITHUB</p>
                                                    </div>
                                                    <h3 className="healine-18 dev-name">GiovannaBrilhante</h3>
                                                    <BsGithub />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div role="listitem" className="dev-card w-dyn-item">
                                <div className="wrapper">
                                    <div className="card front-face">
                                        <div className="div-imagem-avatar">
                                            <div className="avatar-cover">
                                                <img alt="" loading="lazy" src={dev_ga} sizes="100vw" className="avatar" />
                                            </div>
                                            <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6380c3e02a3378ffbeb10627_faixa-speackers.svg" loading="lazy" alt="" />
                                        </div>
                                        <a className="link-github" href="https://github.com/PuniGC" target="_blank" rel="noreferrer">
                                            <div className="dev-infos">

                                                <div className="dev-tag">
                                                    <p className="p-14 dev-cargo">Dono</p>
                                                </div>
                                                <h3 className="healine-18 dev-name">Gabriel Silva</h3>
                                                <p className="p-14 dev-about">CTO (Chief Technology Officer) <br /><strong>Dreams Lover</strong></p>

                                            </div>
                                        </a>
                                    </div>
                                    <div id="container" className="card back-face">
                                        <div className="info">
                                            <div className="dev-infos">
                                                <a className="link-github" href="https://github.com/PuniGC" target="_blank" rel="noreferrer">
                                                    <div className="dev-tag-site">
                                                        <p className="p-14 dev-site">GITHUB</p>
                                                    </div>
                                                    <h3 className="healine-18 dev-name">PuniGC</h3>
                                                    <BsGithub />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                </main>
            </>
        )
    }
}
