// import { getOneNews } from '@/lib/api/api';
// import { News } from '@/types/api-types';

// type Props = {
//   params: Promise<{ _id: string }>;
// };

//API не надає можливості отримати одну новину!!!
const NewsDetails = async (/*{ params }: Props*/) => {
  // const { _id } = await params;
  // const news = await getOneNews(_id);
  // console.log('news id:', _id);
  // console.log(news);

  return (
    <div>
      <p> News Details</p>
      <h2>API не надає можливості отримати одну новину!!!</h2>
    </div>
  );
};

export default NewsDetails;
