import React, { useState } from "react";
import AdminControll from "../adminControll/admin";
import BestSelles from "../dashboard/bestSelles/bestSelles";
import Employer from "../dashboard/employer/employer";

const HomeAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Botão de Menu para telas pequenas */}
            <button
                className="md:hidden p-4 bg-black text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
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
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;
