import css from './FriendListItem.module.css'

export default function FriendListItem({ friend }) {
    return (
        <li className={css.item}>
  <span className={friend.isOnline ? 'onLine' : 'offLine'}></span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
</li>
)}