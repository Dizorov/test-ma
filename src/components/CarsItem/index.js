import React from 'react';
import s from './CarsItem.module.scss';
import {ReactComponent as Cross} from '../../assets/svg/cross.svg'

function CarsItem(props) {

  const {
    brand,
    model,
    creationYear,
    img,
    orderId,
    price
  } = props.car;

  const handleDeleteCar = () => {
    props.onDelete();
  } 
  
  return (
    <li className={s.CarsItem}>
      <div className={s.Header}>
        <span>{brand} </span>
        <span>{model} </span>
        <sup>{creationYear}</sup>
      </div>
      <div className={s.Image_Wrap}>
        <img className={s.Image} src={img} alt=""/>
      </div>
      <span className={s.Status}>ожидает оплаты</span>
      <div className={s.Footer}>
        <span className={s.OrderId}>Заказ №{orderId}</span>
        <div className={s.Price}>
          <span>
            {typeof price === 'number' ? price.toLocaleString('ru') : price} &#8381;
          </span>
          <button className={s.DeleteBtn} type="button" onClick={handleDeleteCar}>
            <Cross />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CarsItem;