import React from 'react';
import Html5 from '../svg/HTML5.svg'
import CSS3 from '../svg/CSS3.svg'
import SCSS from '../svg/SCSS.svg'
import JS from '../svg/JAVASCRIPT.svg'
import ReactJS from '../svg/REACT.svg'
import WP from '../svg/WEBPACK.svg'
import WS from '../svg/WEBSTORM.svg'
import GIT from '../svg/GIT.svg'
import PS from '../svg/PS.svg'
import PP from '../svg/PerfectPixel.svg'
import FIGMA from '../svg/FIGMA.svg'

export function Skills () {

    return (
        <section className="skills" id={'skills'}>
            <div className="container">
                <h2 className="title">Навыки</h2>
                <p className="skills__subtitle">работаю с такими программами и технологиями как</p>
                <ul className="skills__list">
                    <li className="skills__list-item">
                        <img src={Html5} alt="icon" className="item-img"/>
                        <span className="item-title">html5</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={CSS3} alt="icon" className="item-img"/>
                        <span className="item-title">css3</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={SCSS} alt="icon" className="item-img"/>
                        <span className="item-title">scss</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={JS} alt="icon" className="item-img"/>
                        <span className="item-title">java script</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={ReactJS} alt="icon" className="item-img"/>
                        <span className="item-title">react</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={WP} alt="icon" className="item-img"/>
                        <span className="item-title">webpack</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={WS} alt="icon" className="item-img"/>
                        <span className="item-title">webstorm</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={GIT} alt="icon" className="item-img"/>
                        <span className="item-title">git</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={PS} alt="icon" className="item-img"/>
                        <span className="item-title">Photoshop</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={PP} alt="icon" className="item-img"/>
                        <span className="item-title">PerfectPixel</span>
                    </li>
                    <li className="skills__list-item">
                        <img src={FIGMA} alt="icon" className="item-img"/>
                        <span className="item-title">figma</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;