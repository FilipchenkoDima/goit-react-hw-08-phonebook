import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhoneBookWrapper } from './ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      return window.alert(`${name} is already in contacts.`);
    }

    dispatch(addContact(name, number));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <PhoneBookWrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts} onClick={handleDeleteContact} />
    </PhoneBookWrapper>
  );
};
