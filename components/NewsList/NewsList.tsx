import { type News } from '@/types/api-types';
import NewsItem from '../NewsItem/NewsItem';
import css from '../../app/(public)/news/NewsClient.module.css';

type Props = { results: News[] };

const NewsList = ({ results }: Props) => {
  return (
    <ul className={css.newsList}>
      {results.map(news => (
        <NewsItem key={news._id} item={news} />
      ))}
    </ul>
  );
};
export default NewsList;
