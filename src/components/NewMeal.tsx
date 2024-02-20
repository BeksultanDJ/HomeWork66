import { useState } from "react";
import axios from 'axios';

const NewMeal = () => {
    const [time, setTime] = useState('');
    const [meal, setMeal] = useState('');
    const [kCal, setKcal] = useState<number>();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
        const newCard = {
            time: time,
            meal: meal,
            kCal: kCal
        };

        console.log(newCard);

        axios.post('https://testapi2-bf456-default-rtdb.asia-southeast1.firebasedatabase.app/displayMeal.json', newCard)
            .then(response => {
                console.log('Данные успешно отправлен!', response.data);
                setTime('');
                setMeal('');
                setKcal(undefined);
            })
            .catch(error => {
                console.error('Ошибка при отправке данных:', error);
            });
    }

    return (
        <>
            <form >
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="any"></option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Snack" >Snack</option>
                    <option value="Lunch" >Lunch</option>
                    <option value="Dinner" >Dinner</option>
                </select>
                <input
                    placeholder="Meal description"
                    type="text"
                    name="name"
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                />
                <input
                    placeholder="Calories"
                    type="number"
                    name="kcal"
                    value={kCal}
                    onChange={(e) => setKcal(parseFloat(e.target.value))}
                />
                <button onClick={handleSubmit}>Save</button>
            </form>
        </>
    )
}

export default NewMeal