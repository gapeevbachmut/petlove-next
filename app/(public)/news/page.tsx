import NewsList from '@/components/NewsList/NewsList';
import { getNews } from '@/lib/api';

export default async function News() {
  const responce = await getNews();
  console.log('news', responce);

  return (
    <div>
      <main>
        <div>
          <h1>News page</h1>
          {responce?.results?.length > 0 && (
            <NewsList results={responce.results} />
          )}
        </div>
      </main>
    </div>
  );
}
