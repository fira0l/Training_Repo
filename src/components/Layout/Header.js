import {Fragment} from "react";

import HeaderCartButton from '../../components/Layout/HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';



const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}  />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
         </Fragment>
};

export default Header;