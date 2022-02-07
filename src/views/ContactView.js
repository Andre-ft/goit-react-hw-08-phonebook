import React, { useState, useEffect } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import s from './ContactView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

export default function ContactView() {
  const dispatch = useDispatch();
  //   const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={s.ContactView}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {/* {isLoadingContacts && <h1>Loading...</h1>} */}
    </div>
  );
}
