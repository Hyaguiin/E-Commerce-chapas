import React, { useState } from "react";
import { FaBars } from 'react-icons/fa'; 
import AdminControll from "./adminControll/admin";
import BestSelles from "./dashboard/bestSelles/bestSelles";
import Employer from "./employer/employer";
import GridList from "./gridList/gridList";
import '../homeAdmin/homeAdmin.scss';

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

            {/* Barra lateral */}
            <div className={`flex-none w-64 bg-black text-white shadow-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
                <AdminControll setCurrentComponent={setCurrentComponent} />
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 p-6">
                <div className="flex flex-col space-y-6">
                    {renderComponent()}
                    {/* Adicionando o GridList aqui, se necessário */}
                    <GridList />
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;
