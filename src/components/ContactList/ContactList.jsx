import Contact from "../Contact/Contact";
import s from './ContactList.module.css'

const ContactList = ({ dataContacts, deleteContact }) => {
    return (
            <ul className={s.contacts_list}>
                {dataContacts.map(item => {
                    return (
                        <li className={s.contact_item} key={item.id}>
                            <Contact
                                id={item.id}
                                name={item.name}
                                phone={item.number}
                                deleteContact={deleteContact}
                            />
                        </li>
                    )
                })}
            </ul>
    )
};

export default ContactList;