import { Notice } from '@/lib/api';
import NoticesItem from '../NoticesItem/NoticesItem';

type Props = { results: Notice[] };

const NoticesList = ({ results }: Props) => {
  return (
    <ul>
      {results.map(notice => (
        <NoticesItem key={notice._id} item={notice} />
      ))}
    </ul>
  );
};
export default NoticesList;
