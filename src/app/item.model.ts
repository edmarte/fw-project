export interface Image {
    url: string;
}

export interface Item{
    id: string;
    title: string;
    description: string;
    price: string;
    market_price: string;
    image: Image;
}