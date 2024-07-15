import { Meta, StoryObj } from "@storybook/react";
import Item from "../components/Item";

const meta = {
    title: 'Project/Item',
    component: Item,
}satisfies Meta<typeof Item>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {

    args:{
        description:"REL\u00c2MPAGO: 2 di\u00e1rias para 4 adultos e 1 crian\u00e7a em Chal\u00e9 Duplex por apenas R$399 ",
        price: "399",
        imageUrl: "https:\/\/static.baratocoletivo.com.br\/2019\/0410\/10019588\/g_pousada-sirius-canoa3effdb397e.jpg",
        market_price: "399",
    }
}

export const Promocao: Story = {
    args:{
        description:"Voc\u00ea no Para\u00edso Canoa Quebrada! 2 di\u00e1rias para 2 adultos + caf\u00e9 da manh\u00e3 de R$600 por apenas R$499 na Hotel e Pousada Tatajuba",
        price: "499",
        imageUrl: "https:\/\/static.baratocoletivo.com.br\/2019\/0402\/10019408\/g_hotel-e-pousada-tatajuba9992ddb878.jpg",
        market_price: "600",
    }
}