import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CardInf {
    id: string,
    time: string,
    meal: string,
    kCal: number,
}

const Display: React.FC = () => {
    const [cards, setCards] = useState<CardInf[]>([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://testapi2-bf456-default-rtdb.asia-southeast1.firebasedatabase.app/displayMeal.json');
            if (response.data) {
                const cardsArray: CardInf[] = Object.entries(response.data).map(([id, card]: [string, any]) => ({
                    id,
                    ...card,
                }));
                setCards(cardsArray);
            }
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`https://testapi2-bf456-default-rtdb.asia-southeast1.firebasedatabase.app/displayMeal/${id}.json`);
            const updatedCards = cards.filter((card) => card.id !== id);
            setCards(updatedCards);
        } catch (error) {
            console.error('Ошибка при удалении карточки:', error);
        }
    };


    return (
        <>
            {cards.map((card: CardInf) => (
                <div key={card.id} className="card">
                    <div className="cardTitle">
                        <p>{card.time}</p>
                        <span>{card.meal}</span>
                    </div>
                    <div className="cardKcal">
                        <p>{card.kCal} kCal</p>
                    </div>
                    <div className="btns">
                        <button>Edit</button>
                        <button onClick={() => handleDelete(card.id)}>Del</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Display
