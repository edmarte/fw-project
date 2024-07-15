import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Item from "../components/Item";
import styles from "../styles/pages/home.module.css";

import itemData from "../assets/json/offers.json";
import categoriesData from "../assets/json/categories.json";
import { Link } from "react-router-dom";

interface itemJson{
    id: string;
    title: string;
    description: string;
    price: string;
    market_price: string;
    image: { url: string };
}

const Home: React.FC = () => {

    const [hoteis, setHoteis] = useState<itemJson[]>([]);
    const [gastronomy, setGastronomy] = useState<itemJson[]>([]);
    const [pie, setPie] = useState<itemJson[]>([]);
    const [entertainment, setEntertainment] = useState<itemJson[]>([]);
    const [health, setHealth] = useState<itemJson[]>([]);
    const [services, setServices] = useState<itemJson[]>([]);

    useEffect( () => {
        const hoteisIds = Object.entries(categoriesData)
            .filter(([key, value]) => value === 'hoteis')
            .map(([key]) => key);

        const filteredItems = itemData.filter((item: itemJson) => hoteisIds.includes(item.id));

        setHoteis(filteredItems);

    }, []);

    useEffect( () => {
        const gastronomyIds = Object.entries(categoriesData)
            .filter(([key, value]) => value === 'gastronomia')
            .map(([key]) => key);

        const filteredItems = itemData.filter((item: itemJson) => gastronomyIds.includes(item.id));

        setGastronomy(filteredItems);

    }, []);

    useEffect( () => {
        const pieIds = Object.entries(categoriesData)
            .filter(([key, value]) => value === 'tortas')
            .map(([key]) => key);

        const filteredItems = itemData.filter((item: itemJson) => pieIds.includes(item.id));

        setPie(filteredItems);

    }, []);

    useEffect( () => {
        const entertainmentIds = Object.entries(categoriesData)
            .filter(([key, value]) => value === 'entretenimento')
            .map(([key]) => key);

        const filteredItems = itemData.filter((item: itemJson) => entertainmentIds.includes(item.id));

        setEntertainment(filteredItems);

    }, []);

    useEffect( () => {
        const healthIds = Object.entries(categoriesData)
            .filter(([key, value]) => value === 'saude')
            .map(([key]) => key);

        const filteredItems = itemData.filter((item: itemJson) => healthIds.includes(item.id));

        setHealth(filteredItems);

    }, []);

    useEffect( () => {
        const servicesIds = Object.entries(categoriesData)
            .filter(([key, value]) => value === 'servicos')
            .map(([key]) => key);

        const filteredItems = itemData.filter((item: itemJson) => servicesIds.includes(item.id));

        setServices(filteredItems);

    }, []);

    return (
        <>
            <NavBar/>
            <div className={styles.listContainer1}>
                <div className={styles.titleContainer}>Hoteis</div>
                <ul className={styles.itemContainer}>
                    {hoteis.map((hotel) =>(
                        <li key={hotel.id}>
                            <Link to={`/item/${hotel.id}`}>
                            <Item imageUrl={hotel.image.url}
                                description={hotel.title}
                                price={hotel.price}
                                market_price={hotel.market_price}>
                            </Item>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.listContainer2}>
                <div className={styles.titleContainer}>Gastronomia</div>
                <ul className={styles.itemContainer}>
                    {gastronomy.map((gastronomy) =>(
                        <li key={gastronomy.id}>
                            <Link to={`/item/${gastronomy.id}`}>
                            <Item imageUrl={gastronomy.image.url}
                                description={gastronomy.title}
                                price={gastronomy.price}
                                market_price={gastronomy.market_price}>
                            </Item>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.listContainer1}>
                <div className={styles.titleContainer}>Tortas</div>
                <ul className={styles.itemContainer}>
                    {pie.map((pie) =>(
                        <li key={pie.id}>
                            <Link to={`/item/${pie.id}`}>
                            <Item imageUrl={pie.image.url}
                                description={pie.description}
                                price={pie.price}
                                market_price={pie.market_price}>
                            </Item>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.listContainer2}>
                <div className={styles.titleContainer}>Entreterimento</div>
                <ul className={styles.itemContainer}>
                    {entertainment.map((entertainment) =>(
                        <li key={entertainment.id}>
                            <Link to={`/item/${entertainment.id}`}>
                            <Item imageUrl={entertainment.image.url}
                                description={entertainment.title}
                                price={entertainment.price}
                                market_price={entertainment.market_price}>
                            </Item>
                            </Link>
                        </li>
                    ))}
                </ul>   
            </div>

            <div className={styles.listContainer1}>
                <div className={styles.titleContainer}>Saúde e Estética</div>
                <ul className={styles.itemContainer}>
                    {health.map((health) =>(
                        <li key={health.id}>
                            <Link to={`/item/${health.id}`}>
                            <Item imageUrl={health.image.url}
                                description={health.title}
                                price={health.price}
                                market_price={health.market_price}>
                            </Item>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.listContainer1}>
                <div className={styles.titleContainer}>Serviços</div>
                <ul className={styles.itemContainer}>
                    {services.map((services) =>(
                        <li key={services.id}>
                            <Link to={`/item/${services.id}`}>
                            <Item imageUrl={services.image.url}
                                description={services.title}
                                price={services.price}
                                market_price={services.market_price}>
                            </Item>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>            
        </>
    );
}

export default Home;