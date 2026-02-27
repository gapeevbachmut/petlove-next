'use client';

import { type Notice } from '@/types/api-types';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import NoticesPetModal from '../NoticesPetModal/NoticesPetModal';
import { useAuthStore } from '@/stores/zustand/authStore';
import ModalAuthRequired from '../ModalAuthRequired/ModalAuthRequired';
import css from '../../app/(public)/notices/NoticesClient.module.css';

type Props = { item: Notice; isProfile?: boolean };

const NoticesItem = ({ item }: Props) => {
  const user = useAuthStore(state => state.user);
  const setUser = useAuthStore(state => state.setUser);

  const isFavorite = user?.noticesFavorites?.some(fav => fav._id === item._id);

  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLearnMore = () => {
    if (user) {
      setIsNoticeModalOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handlePetsLike = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    // якщо є юзер додати до обраного
    if (user)
      try {
        const favorites = user.noticesFavorites ?? [];

        let updatedFavorites: Notice[];

        if (isFavorite) {
          //  Видалення з обраного
          updatedFavorites = favorites.filter(fav => fav._id !== item._id);
        } else {
          //  Додавання в обране
          updatedFavorites = [...favorites, item];
        }

        setUser({
          ...user,
          noticesFavorites: updatedFavorites,
        });
      } catch (error) {
        console.error('Favorite error:', error);
      }
  };

  return (
    <li className={css.noticesItem}>
      <div className={css.imageBox}>
        <Image
          className={css.image}
          src={item.imgURL}
          alt={item.title}
          width={375}
          height={375}
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
          <li className={css.descrItem}>
            <p className={css.descrTitle}>Category</p>
            <p className={css.descrText}>{item.category}</p>
          </li>
        </ul>
      </div>

      <div className={css.commentBox}>
        <p className={css.comment}> {item.comment}</p>
        <p className={css.price}>Price:{item.price}</p>
      </div>

      <div className={css.buttonBox}>
        <Button
          className={css.more}
          variant="primary"
          onClick={handleLearnMore}
        >
          Learn more
        </Button>
        <Button className={css.heart} variant="simbol" onClick={handlePetsLike}>
          <svg width={18} height={18}>
            <use
              href={`/images/sprite.svg#${isFavorite ? 'icon-trash' : 'icon-heart'}`}
            ></use>
          </svg>
        </Button>
      </div>

      {isNoticeModalOpen && (
        <Modal onClose={() => setIsNoticeModalOpen(false)}>
          <NoticesPetModal item={item} />
        </Modal>
      )}

      {isAuthModalOpen && (
        <Modal onClose={() => setIsAuthModalOpen(false)}>
          <ModalAuthRequired />
        </Modal>
      )}
    </li>
  );
};
export default NoticesItem;
