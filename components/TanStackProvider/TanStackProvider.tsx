// 'use client';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactNode, useState } from 'react';

// export default function TanStackProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [queryClient] = useState(
//     () =>
//       new QueryClient({
//         defaultOptions: {
//           queries: {
//             staleTime: 1000 * 60,
//             refetchOnWindowFocus: false,
//           },
//         },
//       })
//   );

//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// }
// /////////////////////////////////////////////////////////

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function TanStackProvider({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
