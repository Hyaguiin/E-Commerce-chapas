import React from "react";
import AdminControll from "../adminControll/admin";
import BestSelles from "../dashboard/bestSelles/bestSelles";

const HomeAdmin = () => {
    return (
        <div className="flex h-screen">
            <AdminControll />
            <div className="flex-1 p-6">
                <BestSelles />
            </div>
        </div>
    );
};

export default HomeAdmin;
