import { type News } from '@/types/api-types';
import Link from 'next/link';

type Props = { item: News };

// як відображається одна новина!!!
// API не надає можливості отримати одну новину
const NewsItem = ({ item }: Props) => {
  return (
    <li>
      <p>{item.title}</p>
      {/* <Link href={`/news/${item._id}`}>{item.title}</Link> */}
    </li>
  );
};
export default NewsItem;
