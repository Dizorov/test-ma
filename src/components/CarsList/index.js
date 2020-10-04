import React, { useState, useEffect } from 'react';
import CarsItem from '../CarsItem';
import getCars from '../../services/cars';
import s from './CarsList.module.scss';

function CarsList() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCarsFromApi();
  }, []);

  const getCarsFromApi = async () => {
    const carsList = await getCars();
    setCars(carsList);
  };

  const deleteCar = (car) => {
    const updateCars = cars.filter((item) => item.orderId !== car.orderId);
    setCars(updateCars);
  };

  return (
    <ul className={s.CarsList}>
      {cars.map((car, index) => {
        return <CarsItem car={car} onDelete={() => {deleteCar(car)}} key={index} />
      })}
    </ul>
  )
}

export default CarsList;