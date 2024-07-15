import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/pages/offer.module.css";
import '../styles/components/CarouselComponent.css'; // Importar o CSS personalizado

interface ItemDetails {
    id: string;
    title: string;
    description: string;
    price: string;
    market_price: string;
    images: { url: string }[];
}

const Offer: React.FC = () =>{
    const { id } = useParams<{ id: string }>();
    const [itemDetails, setItemDetails] = useState<ItemDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
              const data: ItemDetails = await import(`../assets/json/offer/${id}.json`);
              setItemDetails(data);
            } catch (err) {
              setError(`Failed to load item details for ID: ${id}`);
            } finally {
              setLoading(false);
            }
          };
      
          fetchItemDetails();
        }, [id]);
      
        if (loading) {
          return <div>Loading...</div>;
        }
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
        if (!itemDetails) {
          return <div>Item not found</div>;
        }
    return(
        <>
        <NavBar></NavBar>
        <div className={styles.mainContainer}>
            <h3 className={styles.titleContainer}>{itemDetails.title}</h3>
                <div className={styles.itemContainer}>
                    <div className={styles.carouselContainer}>
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} useKeyboardArrows>
                            {itemDetails.images.map((image, index) => (
                            <img key={index} src={image.url} alt={itemDetails.title} />
                            ))}
                        </Carousel>
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.normalText}>Opções a partir de</p>
                        <p><a className={styles.priceText}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(itemDetails.price))}</a></p>
                        {Number(itemDetails.price) < Number(itemDetails.market_price) ? 
                            <ul>
                                <p className={styles.sale}>de {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(itemDetails.market_price))}</p>
                                <p>Economize {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(itemDetails.market_price) - Number(itemDetails.price))}</p>
                            </ul>: 
                            <></>}
                        <button className={styles.button}>Escolher Opção</button>
                    </div>
                </div>
            <p className={styles.description} dangerouslySetInnerHTML={{__html: itemDetails.description}}></p>
        </div>
        </>
    );
}

export default Offer