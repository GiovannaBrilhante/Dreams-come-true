import "./Logo.css"
import React from "react"
import logo from "../../assets/images/logoDreamsComeTrue.png"

export default function Logo(_props) {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={ logo } alt="Logo" />
            </a>
        </aside>
    )
}