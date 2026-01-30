import { type News } from '@/types/api-types';
import NewsItem from '../NewsItem/NewsItem';

type Props = { results: News[] };

const NewsList = ({ results }: Props) => {
  return (
    <ul>
      {results.map(news => (
        <NewsItem key={news._id} item={news} />
      ))}
    </ul>
  );
};
export default NewsList;
