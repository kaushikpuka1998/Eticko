import {type FC} from 'react';
import styles from './Contact.module.scss';
import ContactCard from "../ContactCard/ContactCard.tsx";
import FormContainer from "../FormContainer/FormContainer.tsx";

type ContactProps = object

const Contact: FC<ContactProps> = () => (
    <div className={styles.Contact}>
        <ContactCard/>
        <FormContainer/>
    </div>
);

export default Contact;
