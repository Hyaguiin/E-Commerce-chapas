import React, { useState } from "react";
import { FaBars } from 'react-icons/fa'; 
import AdminControll from "../../components/adminControll/admin";
import BestSelles from "../../components/bestSelles/bestSelles";
import Employer from "../../components/employer/employer";
import ProductADD from "../../components/productAdd/productAdd";
import './homeAdmin.scss';

const HomeAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentComponent, setCurrentComponent] = useState("bestSelles");

    const renderComponent = () => {
        switch (currentComponent) {
            case "bestSelles":
                return <BestSelles />;
            case "employer":
                return <Employer />;
            default:
                return <BestSelles />;
        }
    };

    return (
        <div className="flex h-screen">
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
                    <ProductADD />
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;
