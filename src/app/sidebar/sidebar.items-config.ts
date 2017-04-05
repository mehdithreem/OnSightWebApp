import {SidebarItemInfo} from "./sidebar.meta";
/**
 * Created by mehdithreem on 4/5/17.
 */

export const ITEMS: SidebarItemInfo[] = [
	{ path: 'dashboard', title: 'داشبورد', access: ['admin', 'user'], iconClass: 'material-icons', icon: 'dashboard' },
	{ path: 'new-users', title: 'کاربران جدید', access: ['admin'], iconClass: 'material-icons', icon: 'group_add' }
];
