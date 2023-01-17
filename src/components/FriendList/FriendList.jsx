import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => {
            return    <FriendListItem friend={friend}
                key={friend.id} />
            })}
        </ul>
)
}