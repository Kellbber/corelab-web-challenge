import axios from "axios";
import { Car } from "../types/Car-type";

axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const carsApi = {

  getCars: async () => {
    try {
      const req = await axios.get("/car");
      return req.data;
    } catch (err) {
      alert(err);
    }
  },

  getCarById: async (id: string) => {

    try {
      const req = await axios.get(`/car/${id}`);
      return req.data;
    } catch (error) {
      alert(error);
    }
  },

  postCar: async (newCar: Car) => {
    try {
      const req = await axios.post("/car", newCar);
      return req;
    } catch (err) {
      alert(err);
    }
  },

  deleteCar: async (id: string) => {
    try {
      const req = await axios.delete(`/car/${id}`);
      return req;
    } catch (err) {
      alert(err);
    }
  },

  favoriteCar: async (car: Car) => {
    try {
      const req = await axios.patch(`/car/${car.id}`, {
        isFavorite: car.isFavorite ? false : true,
      });
      return req;
    } catch (error) {
      alert(error);
    }
  },

  updateCar: async (carId:string, car: Car) => {
    try {
      const req = await axios.patch(`/car/${carId}`, {
        name: car.name,
        year: car.year,
        price: car.price,
        brand: car.brand,
        color: car.color,
        description: car.description,
        license: car.license,
      });
      return req;
    } catch (error) {
      alert(error);
    }
  },
};
