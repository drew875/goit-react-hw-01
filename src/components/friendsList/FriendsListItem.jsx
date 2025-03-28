import css from "./Style.module.css";

function FriendsListItem({ avatar, name, isOnline = false }) {
    return (
        <div className={css.friendsItem}>


            <img src={avatar} alt="avatar" width="48" />
            <p>{name}</p>
            {isOnline ? <h6 className={`${css.status} ${css.green}`} > Online</h6> : <h6 className={`${css.status} ${css.red}`}> Offline</h6 >}


        </div>
    )

}

export default FriendsListItem;