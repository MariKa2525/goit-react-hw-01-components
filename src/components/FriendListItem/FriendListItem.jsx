
import css from './FriendListItem.module.css'
import PropTypes from 'prop-types';

export default function FriendListItem({ friend }) {
  return (
  <li className={css.item}>
  <span className={friend.isOnline  ? `${css.onLine}` : `${css.offLine}`}></span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}> {friend.name} </p>
</li>
)}

FriendListItem.propTypes = {
  friend:   PropTypes.shape({
          id: PropTypes.number.isRequired,
          isOnline: PropTypes.bool.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          }).isRequired
}
  