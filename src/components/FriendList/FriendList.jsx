import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({ friends }) {
    
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
            return    <FriendListItem friend={friend}
                key={friend.id} />
            })}
        </ul>
)
}

FriendList.propTypes = {
    friend:  PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            }).isRequired
        )
}