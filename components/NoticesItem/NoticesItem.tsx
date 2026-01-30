import { Notice } from '@/types/api-types';
import Image from 'next/image';
import Link from 'next/link';

type Props = { item: Notice };

const NoticesItem = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/notices/${item._id}`}>
        {item.title}
        <Image src={item.imgURL} alt={item.title} width={100} height={100} />
      </Link>
    </li>
  );
};
export default NoticesItem;
