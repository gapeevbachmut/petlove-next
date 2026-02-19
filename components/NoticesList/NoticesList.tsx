import { type Notice } from '@/types/api-types';
import NoticesItem from '../NoticesItem/NoticesItem';
import css from '../../app/(public)/notices/NoticesClient.module.css';

type Props = { results: Notice[] };

const NoticesList = ({ results }: Props) => {
  return (
    <ul className={css.noticesList}>
      {results.map(notice => (
        <NoticesItem key={notice._id} item={notice} />
      ))}
    </ul>
  );
};
export default NoticesList;
