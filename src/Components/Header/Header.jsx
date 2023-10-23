import React from 'react';
import classes from './Header.module.css';



const Header = () => {
    return <div className={classes.header}>
        Здравствуй, пользователь. Меня зовут Микифор. 
        <br/>
        Ты находишься на моём личном сайте, который представляет меня как программиста. Здесь ты можешь оценить мои навыки и найти мои контакты
    </div>
}

export default Header;