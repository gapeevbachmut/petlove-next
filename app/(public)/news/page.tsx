import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import NewsClient from './NewsClient';
import { fetchNews } from '@/lib/api/api';

export default async function News() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['news', { currentPage: 1, search: '' }],
    queryFn: () => fetchNews(1, ''),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewsClient />
      </HydrationBoundary>
    </div>
  );
}
