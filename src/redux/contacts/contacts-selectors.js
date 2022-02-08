import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getTotalContactsCount = state => {
  const contacts = getItems(state);
  return contacts.length;
};

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactsCount,
};
export default contactsSelectors;
