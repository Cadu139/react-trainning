
import s from '../styles/menu-list.module.css'

function MenuList() {
	return (
		<ul className={s.ul}>
			<li className={s.li}>
				<ion-icon className={s.icon} name="person-circle-outline">
				</ion-icon>
				<a href="/profile.html">My Account</a>
			</li>
			<li className={s.li}>
				<ion-icon className={s.icon} name="search">
				</ion-icon>
				<a href="/explore.html">Explore</a>
			</li>
			<li className={s.li}>
				<ion-icon className={s.icon} name="help-circle">
				</ion-icon>
				<a href="/how-to-use.html">How to use?</a>
			</li>
		</ul>
	)
}

export default MenuList