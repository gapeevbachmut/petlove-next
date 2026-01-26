import { Notice } from '@/lib/api';
import Image from 'next/image';

type Props = { item: Notice };

// як відображається одна новина!!!

const NoticesItem = ({ item }: Props) => {
  return (
    <li>
      <p>{item.title}</p>
      <Image src={item.imgURL} alt={item.title} width={100} height={100} />
    </li>
  );
};
export default NoticesItem;
