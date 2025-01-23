import { ImPhone, ImUser } from "react-icons/im";
import s from './Contact.module.css'

const Contact = ({ name, phone }) => {
    return (
        <div className={s.contact_wrapper}>
            <ul className={s.contact}>
                <li className={s.contact_item}>
                    <ImUser className={s.contact_svg} />
                    {name}</li>
                <li className={s.contact_item}>
                    <ImPhone className={s.contact_svg} />
                    {   phone}</li>
            </ul>
            <button className={s.contact_btn}>Delete</button>
        </div>
    )

};

export default Contact;