'use client';

import { type Notice } from '@/types/api-types';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import NoticesPetModal from '../NoticesPetModal/NoticesPetModal';
import { useAuthStore } from '@/stores/zustand/authStore';
import ModalAuthRequired from '../ModalAuthRequired/ModalAuthRequired';

type Props = { item: Notice };

const NoticesItem = ({ item }: Props) => {
  const user = useAuthStore(state => state.user);

  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLearnMore = () => {
    if (user) {
      setIsNoticeModalOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <li>
      <p>{item.title}</p>

      <Image src={item.imgURL} alt={item.title} width={100} height={100} />
      <p>Price:{item.price}</p>
      <p>Popularity: {item.popularity}</p>
      <Button variant="primary" onClick={handleLearnMore}>
        Learn more
      </Button>

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
