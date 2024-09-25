import ContactsForm from "./Components/ContactsForm/ContactsForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";

export default function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1>Contact Book</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      {contacts.length > 0 ? <ContactList /> : <p>No contact</p>}
    </div>
  );
}
