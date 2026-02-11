import { Notice } from '@/types/api-types';
import Image from 'next/image';

type Props = { item: Notice };

export default function NoticesPetModal({ item }: Props) {
  return (
    <div>
      <Image src={item.imgURL} alt={item.title} width={200} height={200} />
      <p>{item.title}</p>
      <p>name: {item.name}</p>
      <p>category: {item.category}</p>
      <p>price: {item.price}</p>
    </div>
  );
}
