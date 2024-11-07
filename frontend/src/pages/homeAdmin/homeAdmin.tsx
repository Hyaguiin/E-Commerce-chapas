import { useState } from "react";
import { FaBars } from 'react-icons/fa'; 
import AdminControll from "../../components/adminControll/admin";
import BestSales from "../../components/bestSales/bestSales";
import Employer from "../../components/employer/employer";
import ProductListAdmin from "../../components/productListAdmin/productListAdmin";
import AddProductComponent from "../../components/addProduct/addProduct"; 
import './homeAdmin.scss';

const HomeAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("bestSales");

  const renderComponent = () => {
    switch (currentComponent) {
      case "bestSales":
        return <BestSales />;
      case "employer":
        return <Employer />;
      case "productList":
        return (
          <>
            <AddProductComponent />
            <ProductListAdmin />
          </>
        );
      default:
        return <BestSales />;
    }
  };

  return (
    <div className="flex">
      <button
        className="md:hidden p-4 bg-black text-white flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-xl" />
      </button>
      <div className={`flex-none w-64 bg-black text-white shadow-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
        <AdminControll setCurrentComponent={setCurrentComponent} />
      </div>
      <div className="flex-1 p-6">
        <div className="flex flex-col space-y-6">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
