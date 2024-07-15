import React from "react";
import styles from "../styles/components/item.module.css";

interface ItemComponentProps{
    imageUrl: string;
    description: string;
    price: string;
    market_price: string;
}

const Item: React.FC<ItemComponentProps> = ({ imageUrl, description, price, market_price}) =>{

    const sale = Number(price) < Number(market_price);

    return(
        <>
            <div className={styles.itemContainer} >
                <ul>
                    <li><img src={imageUrl}/></li>
                    <li className={styles.descriptionContainer}>{description}</li>
                    <li className={styles.priceContainer}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(price))}</li>
                    { sale ? (<li className={styles.saleContainer}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(market_price))}</li>) : ( <></> ) }
                </ul>
            </div>
        </>
    );
}

export default Item;