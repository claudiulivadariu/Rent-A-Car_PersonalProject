import { useState } from "react";
import { CarType, FuelType, ICar, TransmissionType } from "../../components/CarItem";
import { CarItem } from "../../components/CarItem";
import { Checkbox } from "@mui/material";
import { common } from "@mui/material/colors";

const carTypes = Object.keys(CarType).filter((item) => {
    return isNaN(Number(item));
});

export const Cars = () => {
    const [cars] = useState<Array<ICar>>([
        {
            price: "50",
            type: CarType.small,
            image: "https://www.budget.com/content/dam/cars/l/2018/smart/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-black.png",
            data: {
                fuel: FuelType.diesel,
                transmission: TransmissionType.automatic,
                seats: 5,
            },
        },

        {
            price: "40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
        },
        {
            price: "50",
            type: CarType.small,
            image: "https://www.budget.com/content/dam/cars/l/2018/smart/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-black.png",
            data: {
                fuel: FuelType.diesel,
                transmission: TransmissionType.automatic,
                seats: 5,
            },
        },
        {
            price: "40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
        },
        {
            price: "50",
            type: CarType.small,
            image: "https://www.budget.com/content/dam/cars/l/2018/smart/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-black.png",
            data: {
                fuel: FuelType.diesel,
                transmission: TransmissionType.automatic,
                seats: 5,
            },
        },
        {
            price: "40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
        },
        {
            price: "40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
            sale: 40,
        },
    ]);

    return (
        <div className="flex flex-wrap justify-center w-full h-full">
            <div className="text-white -ml-[300px] w-[300px] bg-gray-700 items-start h-[24rem] m-4 mr-0 rounded-xl">
                <h1 className="text-center mt-5 font-bold">Filters</h1>
                {carTypes.map((type) => {
                    return (
                        <div className="flex items-center">
                            <Checkbox
                                sx={{
                                    color: common.white,
                                    "&.Mui-checked": {
                                        color: common.white,
                                    },
                                }}
                            />
                            <p>{type}</p>
                        </div>
                    );
                })}
            </div>
            <div className="w-full items-center grid h-full max-w-[1000px] grid-flow-row xl:grid-cols-3 justify-center">
                {cars.map((car, index) => (
                    <CarItem
                        key={index}
                        price={car.price}
                        type={car.type}
                        image={car.image}
                        data={car.data}
                        sale={car.sale}
                    />
                ))}
            </div>
        </div>
    );
};
