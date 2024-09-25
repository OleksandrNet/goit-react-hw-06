import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  console.log(SearchBox);

  const handleChange = (e) => {
    const qwery = e.target.value;
    dispatch(changeFilter(qwery));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
}
