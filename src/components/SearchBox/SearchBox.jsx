import css from '../SearchBox/SearchBox.module.css'

export default function Searchbox({ value, onFilter }) {
  return (
    <div className={css.div}>
      <p className={css.p}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.input}
      />
    </div>
  );
}
