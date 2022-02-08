import React from 'react';
import s from './ContactListItem.module.css';
import { useFetchContactsQuery, useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import { Spinner } from '../Spinner/Spinner';
import { connect, useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';


export const ContactListItem = ({id, name, number}) => {
  const [{ isLoading: isDeleting }] = useDeleteContactMutation();
    const dispatch = useDispatch();

  const deleteContact = () => dispatch(contactsOperations.deleteContact(id));

    return (
         <li className={s.contactList__item}>
          {name} : {number}
          <button
            type="button"
            className={s.deleteButton}
            onClick={() => deleteContact(id)}
            disabled={isDeleting}
          >
            {isDeleting && <Spinner size={12} />}
            Delete
          </button>
        </li>
    )
}