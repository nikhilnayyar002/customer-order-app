
interface Item {
    name: string;
    category: string;
    price: number;
    currency: string;
    tax: number;
    quantity: number;
}

interface Restaurant {
    name: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;

}

interface Customer {
    order_id: string;
    restaurant:Restaurant;
    items: Array<Item>;
    user: {
        name: string;
        id: string;
    }
    createdAt: string;
}

export { Customer, Item, Restaurant };