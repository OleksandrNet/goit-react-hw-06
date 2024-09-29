import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Contact contacts={contacts}></Contact>
    </div>
  );
}
