import { type Friend } from '@/types/api-types';
import FriendsItem from '../FriendsItem/FriendsItem';

type Props = { friends: Friend[] };

const FriendsList = ({ friends }: Props) => {
  //   console.log('list-results', friends);

  return (
    <ul>
      {friends.map(friend => (
        <FriendsItem key={friend._id} item={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
