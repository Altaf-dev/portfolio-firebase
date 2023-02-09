import React from 'react';


export default function ContactItem ({ item }) {

    return (
        <a href={ item.link } rel="noreferrer" target={"_blank"} className="contact__item">
            <img src={ item.src } alt="icon" className={item.className}/>
        </a>
    )

}
