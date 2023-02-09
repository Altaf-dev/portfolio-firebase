import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import CertificateItem from "./Certificateitem"
import { certList } from "./Certificatelist"

export function Certificate()  {

    return (
        <section className="certificate" id={"certificate"}>
            <div className="container">
                <h2 className="title">Сертификаты</h2>
                <div className="certificate__list">
                    <Swiper
                        modules={[Navigation]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation={{
                            prevEl: '.certificate-next',
                            nextEl: '.certificate-prev',
                        }}>
                        { certList.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <CertificateItem item={item}/>
                                    </SwiperSlide>
                                )
                            })

                        }
                    </Swiper>
                    <div className="certificate-prev slide-prev"></div>
                    <div className="certificate-next slide-next"></div>
                </div>
            </div>
        </section>
    );
}

export default Certificate