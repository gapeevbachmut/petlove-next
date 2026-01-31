import NewsList from '@/components/NewsList/NewsList';
import { getNews } from '@/lib/api';
import NewsClient from './NewsClient';

export default async function News() {
  // const responce = await getNews();
  // console.log('news', responce);

  return (
    <div>
      <NewsClient />
    </div>
  );
}
