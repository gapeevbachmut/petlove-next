import FriendsList from '@/components/FriendsList/FriendsList';
import { getFriends } from '@/lib/api';

export default async function Friends() {
  const friends = await getFriends();
  // console.log('page', friends);

  return (
    <div>
      <main>
        <div>
          <h1>Friends page</h1>
          {friends?.length > 0 && <FriendsList friends={friends} />}
        </div>
      </main>
    </div>
  );
}
