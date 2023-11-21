import style from "./Menu.module.css"

function Menu() {
    return <div className={style.Menu}>
        <ul>
            <li>Home</li>
            <li>Mulher</li>
            <li>Homem</li>
        </ul>
    </div>
}

export default Menu