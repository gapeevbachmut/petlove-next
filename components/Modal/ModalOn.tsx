'use client';

import { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';

export default function ModalOn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>кнопка відкриття модального вікна</h1>
      <Button variant="primary" onClick={openModal}>
        Open modal
      </Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>тут вставити компонент для модалки</p>
        </Modal>
      )}
    </div>
  );
}
