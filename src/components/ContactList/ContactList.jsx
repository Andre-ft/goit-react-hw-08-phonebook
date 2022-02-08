import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import s from './ContactList.module.css';
// import { useFetchContactsQuery, useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import Context from '../../contexts/context';
import { getItems } from '../../redux/contacts/contacts-selectors';


export default function ContactList() {
  const { filter } = useContext(Context);
  // const { data, isFetching } = useFetchContactsQuery();
    const data = useSelector(contactsSelectors.getVisibleContacts);

  const array = useSelector(getItems)

  const getVisibleContacts = (arr, value) => {
    const normalizedFilter = value.toLowerCase();

    return arr.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  return (<>
    {console.log('array', array)}
    <ul className={s.contactList__item}>
      {array && getVisibleContacts(array, filter ).map((contact) => (
        < ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  </>)
};