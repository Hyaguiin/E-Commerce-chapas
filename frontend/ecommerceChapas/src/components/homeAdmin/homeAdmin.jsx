import React, { useState } from "react";
import { FaBars } from 'react-icons/fa'; 
import AdminControll from "../adminControll/admin";
import BestSelles from "./dashboard/bestSelles/bestSelles";
import Employer from "./employer/employer";
import GridList from "./gridList/gridList";
import '../homeAdmin/homeAdmin.scss'

const HomeAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                <AdminControll />
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 p-6">
                <div className="flex flex-col space-y-6">
                    <BestSelles />
                    <Employer />
                    {/* Adicionando o GridList aqui */}
                    <GridList />
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;
