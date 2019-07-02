import React, { Fragment, useContext, useEffect } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner'
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;
    console.log(contacts)

    useEffect(() => {
        console.log('useEffect')
        getContacts();
        // eslint-disable-next-line
    }, [])

    if (contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            {
                contacts.length && !loading ? (
                    (filtered || contacts).map(contact => (
                        <ContactItem contact={contact} key={contact._id} />
                    ))
                )
                    : <Spinner />
            }

        </Fragment>
    );
};

export default Contacts;