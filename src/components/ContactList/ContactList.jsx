import Contact from "../Contact/Contact";
import s from './ContactList.module.css'

const ContactList = ({dataContacts}) => {
    return (
            <ul className={s.contacts_list}>
                {dataContacts.map(item => {
                    return (
                        <li className={s.contact_item} key={item.id}>
                            <Contact
                                name={item.name}
                                phone={item.number}
                            />
                        </li>
                    )
                })}
            </ul>
    )
};

export default ContactList;