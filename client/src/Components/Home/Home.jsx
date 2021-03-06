import React from 'react';
import style from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className={style.homePage}>
            <div className={style.mainBlock}>
                <div className={style.dishesPhoto}>
                    <img src="https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=640&h=360&auto=format" alt="dishes" />
                </div>
                <div className={style.textAbout}>
                    Многие люди считают, что они не умеют готовить. Мол, они не повара, никогда не учились
                    этому и не имеют опыта. Но на самом деле это совсем не так, потому что повара – это
                    обычные люди, которые просто готовят больше, чем другие. Тем самым улучшая свои кулинарные
                    способности. Когда человек начинает часто готовить, он практически становится поваром.
                    Это как в тренажерном зале – чем больше вы тренируетесь, тем быстрее приобретаете навыки.
                    Поэтому готовьте больше и чаще! На сайте вы найдете рецепты на любой вкус!
               </div>
            </div>

            <div className={style.categories}>
                <h2>Репецты</h2>
                <div className={style.containerCategories}>
                    <div className={style.box}>
                        <NavLink className={style.itemRecipe} to="/recipes/Первые блюда">
                            <div className={style.itemText}>
                                <h3>Первые блюда</h3>
                            </div>
                        </NavLink>
                        <NavLink className={style.itemRecipe} to="/recipes/Вторые блюда">
                            <div className={style.itemText}>
                                <h3>Вторые блюда</h3>
                            </div>
                        </NavLink>
                        <NavLink className={style.itemRecipe} to="/recipes/Салаты">
                            <div className={style.itemText}>
                                <h3>Салаты</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div className={style.box}>
                        <NavLink className={style.itemRecipe} to="/recipes/Закуски">
                            <div className={style.itemText}>
                                <h3>Закуски</h3>
                            </div>
                        </NavLink>
                        <NavLink className={style.itemRecipe} to="/recipes/Десерты">
                            <div className={style.itemText}>
                                <h3>Десерты</h3>
                            </div>
                        </NavLink>
                        <NavLink className={style.itemRecipe} to="/recipes/Выпечка">
                            <div className={style.itemText}>
                                <h3>Выпечка</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div className={style.box}>
                        <NavLink className={style.itemRecipe} to="/recipes/Соусы">
                            <div className={style.itemText}>
                                <h3>соусы</h3>
                            </div>
                        </NavLink>
                        <NavLink className={style.itemRecipe} to="/recipes/Напитки">
                            <div className={style.itemText}>
                                <h3>напитки</h3>
                            </div></NavLink>
                        <NavLink className={style.itemRecipe} to="/recipes">
                            <div className={style.itemText}>
                                <h3>все рецепты</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
