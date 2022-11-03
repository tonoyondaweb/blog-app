import Link from "next/link";
import { useContext } from "react";
import { tabContext } from "../../pages/_app"

function NavElement({ icon, text, clickHandler, link }) {
	const tab = useContext(tabContext)
	return (
		<li onClick={clickHandler}>
			<Link
				className={`text-xl flex justify-center items-center gap-x-2 cursor-pointer py-3 px-5 rounded-full text-ebony hover:bg-cyan transition ${tab.currentTab === text ? "bg-morning/50" : "bg-transparent"
					}`}
				href={link ? link : ""}
			>
				{icon}
				<span className="text-sm">{text}</span>
			</Link>
		</li>
	);
}
export default NavElement;
