
import MenuList from './MenuList'
import ContactList from './ContactList'

import '../styles/vertical-menu.module.css'

function VerticalMenu() {

	return (
		<div>
			<nav>
				<MenuList />
				<ContactList />
			</nav>

			<div id="dim-screen"></div>
		</div>
	)
}

export default VerticalMenu