import React from 'react';
import ContactItem from "./ContactItem";
import ContactForm from "./Contactform"
import { contactList } from "./Contactlist"

export function Contact () {

    return (
        <section className="contact">
            <div className="container">
                <h2 className="title">Контакты</h2>
                <div className="contact__list">
                    {contactList.map(item => {
                        return (
                            <ContactItem key={item.id} item={item}/>
                        )
                    })}
                </div>
                <ContactForm/>
            </div>
        </section>
    )

}

export default Contact;