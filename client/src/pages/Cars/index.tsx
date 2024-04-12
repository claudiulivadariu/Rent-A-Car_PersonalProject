import { useState } from "react";
import { CarType, FuelType, ICar, TransmissionType } from "../../components/CarItem";
import { CarItem } from "../../components/CarItem";

export const Cars = () => {
    const [cars] = useState<Array<ICar>>([
        {
            price: "$50",
            type: CarType.small,
            image: "https://www.budget.com/content/dam/cars/l/2018/smart/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-black.png",
            data: {
                fuel: FuelType.diesel,
                transmission: TransmissionType.automatic,
                seats: 5,
            },
        },
        
        {
            price: "$40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
        },
        {
            price: "$50",
            type: CarType.small,
            image: "https://www.budget.com/content/dam/cars/l/2018/smart/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-black.png",
            data: {
                fuel: FuelType.diesel,
                transmission: TransmissionType.automatic,
                seats: 5,
            },
        },
        {
            price: "$40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
        },
        {
            price: "$50",
            type: CarType.small,
            image: "https://www.budget.com/content/dam/cars/l/2018/smart/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-black.png",
            data: {
                fuel: FuelType.diesel,
                transmission: TransmissionType.automatic,
                seats: 5,
            },
        },
        {
            price: "$40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
        },
        {
            price: "$40",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.petrol,
                transmission: TransmissionType.automatic,
                seats: 4,
            },
        },
    ]);

    return (
        <div className="flex flex-wrap justify-center items-center w-full h-full">
            <div className="w-full items-center grid h-full max-w-[1000px] grid-flow-row xl:grid-cols-3 justify-center">
                {cars.map((car, index) => (
                    <CarItem
                        key={index}
                        price={car.price}
                        type={car.type}
                        image={car.image}
                        data={car.data}
                    />
                ))}
            </div>
        </div>
    );
};
