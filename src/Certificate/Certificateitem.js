import React from 'react';

export function CertificateItem ({ item }) {


    return (
        <div className="certificate-item">
            <img className="certificate-img" src={item.src} alt="img"/>
            <a href={item.link} rel="noreferrer" target={"_blank"} className="certificate-link">Ссылка на сертификат</a>
        </div>
    )

}

export default CertificateItem;