export interface Image {
    url: string;
}

export interface Details{
    id: string;
    title: string;
    description: string;
    price: string;
    market_price: string;
    category: string;
    images: Image[];
}