import React from 'react';
import PortfolioItem from "./PortfolioItem";
import { portfolioList } from './PortfolioList'



function Portfolio() {

    return (
        <section className={"portfolio"}>
            <div className={"container"}>
                <h2 className="title">Мои работы</h2>
                <div className={"portfolio__wrapper"}>
                    {portfolioList.map((item) => {
                        return (
                            <div key={item.id} className={"portfolio__item"}>
                                <PortfolioItem item={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
