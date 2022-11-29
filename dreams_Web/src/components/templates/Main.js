import "./Main.css"
import React from "react"

export default function Main(props) {
    return (
        <div className="content">
            <div className="header">
                <h2>{props.title}</h2>
            </div>
            <main>
                <div>
                    {props.children}
                </div>
            </main>
        </div>
    )
}