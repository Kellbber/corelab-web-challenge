import SaveButton from "../SaveButton";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { carsApi } from "../../services/api";
import { Car } from "../../types/Car-type";
import React, { useEffect, useState } from "react";
const ModalForm = (props:{carId?:string, update?:boolean}) => {

  let navigate = useNavigate();

const [car, setCar]= useState<Car>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newCar: Car = {
      name: event.currentTarget.Name.value,
      year: parseInt(event.currentTarget.year.value),
      price: parseFloat(event.currentTarget.price.value),
      color: event.currentTarget.color.value,
      brand: event.currentTarget.brand.value,
      license: event.currentTarget.license.value,
      description: event.currentTarget.description.value,
    };
    if(props.update){
      await carsApi.updateCar(props.carId??"", newCar);
      goToStart();
    }else{
    await carsApi.postCar(newCar);
    goToStart();
    }
  }
  function goToStart() {
    navigate("/");
  }
  async function getCarForUpdate(){
    if(props.carId){
      const carForUpdate = await carsApi.getCarById(props.carId)
  
    setCar(carForUpdate);
 
    }
    
  }
  


  useEffect(()=>{
    if(props.update){
      getCarForUpdate()

    }
  },[])

  
  return (
    <S.BoxModal>
      <S.modalCreateBack>
        <img onClick={goToStart} />
      </S.modalCreateBack>
      <S.BoxModalForm1 onSubmit={handleSubmit}>
        <label htmlFor="Name">Nome:</label>
      
        <input type="text" name="Name" id="Name" defaultValue={props.update? car?.name : ""} required />

        <label htmlFor="brand">Marca:</label>
        <input type="text" name="brand" id="brand" defaultValue={props.update? car?.brand : ""} required />

        <label htmlFor="price">Preço:</label>
        <input type="number" name="price" id="preço" defaultValue={props.update? car?.price : ""} required />

        <label htmlFor="color">Cor:</label>
        <select name="color" id="color" defaultValue={props.update? car?.color : ""}>
          <option value="#FF6575">vermelho</option>
          <option value="green">verde</option>
          <option value="blue">azul</option>
          <option value="silver">prata</option>
          <option value="black">preto</option>
          <option value="white">branco</option>
          <option value="brown">marrom</option>
        </select>

        <label htmlFor="year">Ano:</label>
        <input type="number" name="year" id="year"  defaultValue={props.update? car?.year : ""} required />

        <label htmlFor="license">Placa:</label>
        <input type="text" name="license" id="license" defaultValue={props.update? car?.license : ""} required />

        <label htmlFor="description">Descrição:</label>
        <input type="text" name="description" id="description" defaultValue={props.update? car?.description : ""} required />
        <SaveButton />
      </S.BoxModalForm1>
    </S.BoxModal>
  );
};

export default ModalForm;
