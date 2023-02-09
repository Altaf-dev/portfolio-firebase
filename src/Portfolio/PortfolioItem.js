import React from 'react';

export function PortfolioItem ({ item }) {

    return (
        <>
            <img className={"portfolio__item-img"} src={item.src} alt=""/>
            <a href={ item.link } className="portfolio__item-link" target="blank">
                { item.title }
            </a>
        </>
    )

}

export default PortfolioItem;