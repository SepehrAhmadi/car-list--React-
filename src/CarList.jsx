import React , {useState} from 'react'
import style from './CarList.module.css'

function CarLsit(){

    const [car , setCar] = useState([]);
    const [carYear , setCarYear] = useState(new Date().getFullYear());
    const [carMake , setCarMake] = useState("");
    const [carModel , setCarModel] = useState("");

    function handleAddCar() { 
        const newCar = {year : carYear,
                        make : carMake,
                        model: carModel}

        setCar(pervCar => [...pervCar , newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCar(pervCar => pervCar.filter((_ , i) => i !== index))
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }   

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }   

    function handleModelChange(event){
        setCarModel(event.target.value);
    }


    return(
        <div className={style.carListContainer}>
            <h2>LIST OF CAR OBJECTS</h2>

            <ul className={style.carList}>{car.map((car , index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>

            <input className={style.carInput} type="number" value={carYear} onChange={handleYearChange}/>
            <input className={style.carInput} type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/>
            <input className={style.carInput} type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/>
            <p className={style.deleteDesc}>To delete each item click on it</p>

            <button className={style.carBtn} onClick={handleAddCar}>Add Car</button>

        </div>
    );
}

export default CarLsit