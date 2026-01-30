import { type News } from '@/types/api-types';
import Link from 'next/link';

type Props = { item: News };

// як відображається одна новина!!!

const NewsItem = ({ item }: Props) => {
  return (
    <li>
      <p>{item.title}</p>
    </li>
  );
};
export default NewsItem;
