// // app/notices/[id]/page.tsx

// //  для авторизоаних !!!! -

// import { getSingleNotice } from '@/lib/api/api';

// type Props = {
//   params: Promise<{ id: string }>;
// };

// const NoticeDetails = async ({ params }: Props) => {
//   const { id } = await params;

//   const notice = await getSingleNotice(id);
//   console.log('notice id:', id);
//   console.log('notice:', notice);

//   return (
//     <div>
//       NoticeDetails
//       <p>{notice.name}</p>
//       <p>{notice.category}</p>
//       <p>{notice.price}</p>
//     </div>
//   );
// };

// export default NoticeDetails;
