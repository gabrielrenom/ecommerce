const data = [{
    "id": 1,
    "name": "Cafe con Leche",
    "description": "Spanish coffee with milk",
    "price": 3,
    "image": "https://en.wikipedia.org/wiki/Coffee#/media/File:Latte_and_dark_coffee.jpg",
    "category": "Coffee",
},
{
    "id": 2,
    "name": "Americano",
    "description": "Coffee with water",
    "price": 2,
    "image": "https://en.wikipedia.org/wiki/Caff%C3%A8_Americano#/media/File:Hokitika_Cheese_and_Deli,_Hokitika_(3526706594).jpg",
    "category": "Coffee",
},
{
    "id": 3,
    "name": "Cappuccino",
    "description": "Coffee with milk and foam",
    "price": 4,
    "image": "https://en.wikipedia.org/wiki/Cappuccino#/media/File:Cappuccino.jpg",
    "category": "Coffee",
},
{
    "id": 4,
    "name": "Hot Chocolate",
    "description": "Chocolate with milk",
    "price": 3,
    "image": "https://en.wikipedia.org/wiki/Hot_chocolate#/media/File:Hot_chocolate.jpg",
}
]

export const getLandingPageProducts = async () => {
    try {
        let response = await fetch(`productshop`);
        let data = await response.json();
        return data;
    }
    catch (error) {
        return -2;
    }
}