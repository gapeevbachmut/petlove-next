import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import NoticesClient from './NoticesClient';
import { getNotices } from '@/lib/api/api';

export default async function Notices() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notices'],
    queryFn: getNotices,
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoticesClient />
      </HydrationBoundary>
    </div>
  );
}
