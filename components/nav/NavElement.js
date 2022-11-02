function NavElement({icon, text, active}) {
  return (
    <li className={`text-xl w-max flex items-center gap-x-2 cursor-pointer py-3 px-5 rounded-full text-ebony hover:bg-cyan transition ${active ? 'bg-morning/50' : 'bg-transparent'}`}>
        {icon}
        <span className="text-sm">{text}</span>
    </li>
  )
}
export default NavElement