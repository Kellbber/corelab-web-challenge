import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./types/routes";
import Home from "./pages/Home";
import FormCar from "./pages/FormCar";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.FORM} element={<FormCar/>}/>
      <Route path={RoutePath.UPDATE} element={<FormCar update={true} />}/>
    </Routes>
  );
};

export default Router;
