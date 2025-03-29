import FriendsListItem from "./friendsListItem/FriendsListItem";
import css from "./Style.module.css";

function FriendsList({ friends }) {
    return (
        <ul className={css.continer}>
            <li> {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />))} </li>
        </ul>
    )
}

export default FriendsList;