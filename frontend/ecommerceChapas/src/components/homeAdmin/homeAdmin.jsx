import React, { useState } from "react";
import AdminControll from "../adminControll/admin";
import BestSelles from "../dashboard/bestSelles/bestSelles";

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
                <BestSelles />
            </div>
        </div>
    );
};

export default HomeAdmin;
