import Logo from "./Logo"
import Menu from "./Menu"

export default function Header(_props) { // Tranformamos o header antigo no header da navbar, e o header antigo virou o Main
    return (
        <header> 
            <Logo />
            <Menu />
        </header>
    )
}