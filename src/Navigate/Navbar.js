import React from "react";
import { NavLink } from "react-router-dom";


export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.menuClick = this.menuClick.bind(this)
        this.state = {className: false}
    }

    menuClick () {

        this.setState(prevState => ({
            className: !prevState.className
        }))
    }

    render() {

        return (
            <header className="header">
                <div className="container">
                    <nav className="header__menu">
                        <ul className={this.state.className ? 'menu active':'menu'}>
                            <NavLink className="menu-item" to="/">Главная</NavLink>
                            <NavLink className="menu-item" to="/about">Обо мне</NavLink>
                            <NavLink className="menu-item" to="/skills">Навыки</NavLink>
                            <NavLink className="menu-item" to="/certificate">Сертификаты</NavLink>
                            <NavLink className="menu-item" to="/portfolio">Мои работы</NavLink>
                            <NavLink className="menu-item" to="/contact">Контакты</NavLink>
                        </ul>
                        <button
                            onClick={this.menuClick}
                            className={this.state.className ? 'menu__btn active':'menu__btn'}>
                            <span></span>
                        </button>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;