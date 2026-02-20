import { Notice } from '@/types/api-types';
import Image from 'next/image';
import css from './NoticesPetModal.module.css';
import Button from '../Button/Button';

type Props = { item: Notice };

export default function NoticesPetModal({ item }: Props) {
  const handleAddTo = () => {};
  return (
    <div className={css.container}>
      <div className={css.imgContainer}></div>
      <div className={css.imageBox}>
        <p className={css.imgText}>Sell</p>
        <Image
          className={css.image}
          src={item.imgURL}
          alt={item.title}
          width={200}
          height={200}
        />
      </div>

      <div className={css.titleBox}>
        <p className={css.title}>{item.title}</p>
        <span className={css.popularity}>
          <svg width={18} height={18}>
            <use href="/images/sprite.svg#icon-star"></use>
          </svg>
          {item.popularity}
        </span>
      </div>

      <div className={css.description}>
        <ul className={css.descrList}>
          <li className={css.descrItem}>
            <p className={css.descrTitle}>Name</p>
            <p className={css.descrText}>{item.name}</p>
          </li>
          <li className={css.descrItem}>
            <p className={css.descrTitle}>Birthday</p>
            <p className={css.descrText}>{item.birthday}</p>
          </li>
          <li className={css.descrItem}>
            <p className={css.descrTitle}>Sex</p>
            <p className={css.descrText}>{item.sex}</p>
          </li>
          <li className={css.descrItem}>
            <p className={css.descrTitle}>Species</p>
            <p className={css.descrText}>{item.species}</p>
          </li>
        </ul>
      </div>
      <div className={css.commentBox}>
        <p className={css.comment}> {item.comment}</p>
        <p className={css.price}>$ {item.price}</p>
      </div>
      <div className={css.buttonBox}>
        <Button className={css.add} variant="primary" onClick={handleAddTo}>
          Add to
          <svg width={18} height={18} className={css.heart}>
            <use href="/images/sprite.svg#icon-heart"></use>
          </svg>
        </Button>
        <Button
          className={css.contact}
          variant="secondary"
          onClick={handleAddTo}
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
