import css from "./Style.module.css";


function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div className={css.main}>
                <img src={image} alt="avatar" />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li className={css.ststs}>
                    <span >Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.ststs}>
                    <span >Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.ststs}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;