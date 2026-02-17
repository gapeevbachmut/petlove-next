import { type News } from '@/types/api-types';
import Image from 'next/image';
import Link from 'next/link';
import css from '../../app/(public)/news/NewsClient.module.css';

type Props = { item: News };

// як відображається одна новина!!!
// API не надає можливості отримати одну новину
const NewsItem = ({ item }: Props) => {
  const date = new Date(item.date).toLocaleDateString('en-GB');
  return (
    <li className={css.newsItem}>
      <div className={css.news}>
        <Image
          className={css.image}
          src={item.imgUrl}
          alt="Image of News"
          width={335}
          height={190}
        />
        <div className={css.content}>
          <h3 className={css.title}>{item.title}</h3>
          <p className={css.text}>{item.text}</p>
        </div>
      </div>
      <div className={css.dateLink}>
        <p className={css.date}>{date}</p>
        <Link className={css.link} href={item.url} target="_blank">
          Read more
        </Link>
      </div>
      {/* <Link href={`/news/${item._id}`}>{item.title}</Link> */}
    </li>
  );
};
export default NewsItem;
