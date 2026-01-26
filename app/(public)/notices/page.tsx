import NoticesList from '@/components/NoticesList/NoticesList';
import { getNotices } from '@/lib/api';

export default async function Notices() {
  const responce = await getNotices();
  return (
    <div>
      <main>
        <div>
          <h1>Find pet page</h1>
          {responce?.results?.length > 0 && (
            <NoticesList results={responce.results} />
          )}
        </div>
      </main>
    </div>
  );
}
