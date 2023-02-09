import React from 'react';
import {post} from "axios";

export function ContactForm () {



    return (
        <form className={"contact__form"} action={"send.php"} method={"post"} acceptCharset={"utf-8"} encType={"multipart/form-data"}>
            <input name={"name"} className={"contact__form-input"} type={"text"} placeholder={"Ваше имя"}/>
            <input name={"email"} className={"contact__form-input"} type={"text"} placeholder={"Ваш Email"}/>
            <textarea name={"comment"} className={"contact__form-input"} placeholder={"Сообщение"}/>
            <button className={"contact__form-submit"}>Отправить</button>
        </form>
    )

}

export default ContactForm;