import { type Friend } from '@/types/api-types';
import FriendsItem from '../FriendsItem/FriendsItem';
import css from '../../app/(public)/friends/Friends.module.css';

type Props = { friends: Friend[] };

const FriendsList = ({ friends }: Props) => {
  //   console.log('list-results', friends);

  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendsItem key={friend._id} item={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
