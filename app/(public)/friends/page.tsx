import FriendsList from '@/components/FriendsList/FriendsList';
import { getFriends } from '@/lib/api/api';
import css from './Friends.module.css';

export default async function Friends() {
  const friends = await getFriends();
  // console.log('page', friends);

  return (
    <div className={css.friendBox}>
      <h1 className={css.titlePage}>Our friends</h1>
      {friends?.length > 0 && <FriendsList friends={friends} />}
    </div>
  );
}
