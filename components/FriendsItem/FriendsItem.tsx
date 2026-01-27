import { Friend } from '@/lib/api';
import Image from 'next/image';

type Props = { item: Friend };

const FriendsItem = ({ item }: Props) => {
  return (
    <li>
      <p>{item.title}</p>
      <Image src={item.imageUrl} alt={item.title} width={100} height={100} />
    </li>
  );
};

export default FriendsItem;
