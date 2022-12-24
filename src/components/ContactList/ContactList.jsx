import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ListBtn, ListItem, ListWrapper } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ListWrapper>
      {contacts.map(contact => {
        return (
          <ListItem key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <ListBtn
              type="button"
              onClick={() => {
                onClick(contact.id);
              }}
            >
              Delete
            </ListBtn>
          </ListItem>
        );
      })}
    </ListWrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
