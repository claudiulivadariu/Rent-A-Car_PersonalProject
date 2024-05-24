/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ICar } from "../../components/CarItem";
import { CarItem } from "../../components/CarItem";
import { useLocation } from "react-router-dom";
import { carsArray } from "./const";
import Filters from "./filters";

export const Cars = () => {
    const [cars] = useState<Array<ICar>>(carsArray);
    const location = useLocation();
    const paramCarType = location.state?.carType ?? undefined;

    const getPrice = (a: ICar) => {
        return a.sale ? Number(a.price) - (a.sale * Number(a.price)) / 100 : Number(a.price);
    };
    const [selectedSort, setSelectedSort] = useState<string>("default");
    const [filters, setFilters] = useState<{ [key: string]: string[] }>({
        carType: paramCarType ? [paramCarType] : [],
        transmissionType: [],
        fuelType: [],
        sale: [],
    });

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const sortFunction = (a: ICar, b: ICar) => {
        if (selectedSort === "default") return 0;
        else if (selectedSort === "price") {
            const priceA = getPrice(a);
            const priceB = getPrice(b);
            return priceA - priceB;
        } else return 0;
    };
    const filteredCars = cars.sort((a, b) => sortFunction(a, b));
    const prices = filteredCars.map((car) => getPrice(car));
    const _MIN_PRICE = Math.min(...prices);
    const _MAX_PRICE = Math.max(...prices);
    const [price, setPrice] = useState<{ minPrice: number; maxPrice: number }>({
        minPrice: _MIN_PRICE,
        maxPrice: _MAX_PRICE,
    });

    const filterCars = (car: ICar): boolean => {
        return (
            (!filters.carType.length || filters.carType.includes(car.type)) &&
            (!filters.transmissionType.length || filters.transmissionType.includes(car.data.transmission)) &&
            (!filters.fuelType.length || filters.fuelType.includes(car.data.fuel)) &&
            (!filters.sale.length || (car.sale !== undefined && filters.sale.includes(car.sale.toString())))
        );
    };

    return (
        <div className="flex flex-wrap justify-center w-full h-full">
            <Filters
                filtersContext={[filters, setFilters]}
                priceContext={[price, setPrice]}
                sortContext={[selectedSort, setSelectedSort]}
                priceLimitContext={[_MIN_PRICE, _MAX_PRICE]}
            />
            <div className="w-full items-center grid h-full max-w-[1000px] grid-flow-row xl:grid-cols-3 justify-center">
                {cars
                    .filter(filterCars)
                    .filter((car) => getPrice(car) >= price.minPrice && getPrice(car) <= price.maxPrice)
                    .sort(sortFunction)
                    .map((car, index) => (
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

export default Cars;
