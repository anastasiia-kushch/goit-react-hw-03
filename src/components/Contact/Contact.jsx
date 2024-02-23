import { IoPerson } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';

import css from '../Contact/Contact.module.css';

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.div}>
      <div className={css.info}>
        <IoPerson className={css.icon} size={18}/>
        <p>{data.name}</p>
        </div>
        <div className={css.info}>
        <LuPhone className={css.icon} size={18}/>
        <p>{data.number}</p>
      </div>

      <button className={css.button} onClick={()=> onDelete(data.id)}>Delete</button>
    </div>
  );
}
