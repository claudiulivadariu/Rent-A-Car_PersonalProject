import { useEffect, useState } from "react";
import { CarType, FuelType, ICar, TransmissionType } from "../../components/CarItem";
import { CarItem } from "../../components/CarItem";
import { Checkbox } from "@mui/material";
import { common } from "@mui/material/colors";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const carTypes = Object.values(CarType).filter((item) => {
    return isNaN(Number(item));
});
const transmissionTypes = Object.values(TransmissionType).filter((item) => {
    return isNaN(Number(item));
});

const fuelTypes = Object.values(FuelType).filter((item) => {
    return isNaN(Number(item));
});

export const Cars = () => {
    const [cars] = useState<Array<ICar>>([
        {
            price: "30",
            type: CarType.Small,
            image: "https://www.budget.com/content/dam/cars/l/2018/smart/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-black.png",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },

        {
            price: "90",
            type: CarType.VIP,
            image: "https://media.istockphoto.com/id/1047790850/photo/black-generic-suv-car-with-isolated-path-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Kf3n1S1XEkui_FZL1yQ0iXNcutHqvZHb6lsHvc3Q0HE=",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "150",
            type: CarType["Super Car"],
            image: "https://s1.1zoom.me/b4155/660/Shelby_Super_Cars_White_background_White_559662_3840x2160.jpg",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Manual,
                seats: 2,
            },
        },
        {
            price: "130",
            type: CarType.VIP,
            image: "https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "40",
            type: CarType.Small,
            image: "https://thumbs.dreamstime.com/b/blue-hybrid-car-4603126.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "100",
            type: CarType.Family,
            image: "https://static.designboom.com/wp-content/uploads/2018/03/volvo-XC40-SUV-designboom-600.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "80",
            type: CarType.Family,
            image: "https://imgd-ct.aeplcdn.com/1056x660/n/1dnqmbb_1689047.jpg?q=80",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
            sale: 10,
        },
        {
            price: "85",
            type: CarType.Family,
            image: "https://www.shutterstock.com/image-vector/black-suv-offroad-3d-car-260nw-2245885047.jpg",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Manual,
                seats: 7,
            },
        },
        {
            price: "140",
            type: CarType.VIP,
            image: "https://di-uploads-pod3.dealerinspire.com/rbmofalpharettamercedesbenz/uploads/2017/07/2017-Mercedes-Benz-GLE-SUV.png",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Automatic,
                seats: 6,
            },
        },
        {
            price: "30",
            type: CarType.Small,
            image: "https://image.made-in-china.com/202f0j00gkwoDJrGlFbq/2023-Luxury-Brand-SUV-Car-Audi-Q6-2000cc-5-Doors-and-7-Seats-New-and-Used-Cars-for-Sale.webp",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "70",
            type: CarType.Family,
            image: "https://www.lincoln.com/cmslibs/content/dam/vdm_ford/live/en_us/lincoln/nameplate/aviator/2023/collections/3-2/23_lnc_avi_std_srad_ps34_.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "50",
            type: CarType.VIP,
            image: "https://spn-mda.spinny.com/img/p5_S09khS8KjHKcgmCRBmA/tab/file.png?w=350",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "80",
            type: CarType.Family,
            image: "https://previews.123rf.com/images/robwilson39/robwilson391305/robwilson39130500025/19808098-small-car-isolated-on-white-background.jpg",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Manual,
                seats: 6,
            },
        },
        {
            price: "90",
            type: CarType.Small,
            image: "https://p7.hiclipart.com/preview/110/513/240/car-rental-van-baby-toddler-car-seats-budget-rent-a-car-car.jpg",
            data: {
                fuel: FuelType.Petrol,
                transmission: TransmissionType.Manual,
                seats: 5,
            },
        },
        {
            price: "140",
            type: CarType.Family,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJgie03JYJAn3du3_UL_-NikEggbbsyVR2lU1pWrEl9xGiacArIRqTEKWsbLeeXfgGF8&usqp=CAU",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 5,
            },
        },
        {
            price: "240",
            type: CarType.VIP,
            image: "https://i.pinimg.com/736x/27/82/ca/2782ca9c559849a4392465f6e4914354.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 5,
            },
        },
        {
            price: "10",
            type: CarType.VIP,
            image: "https://4.imimg.com/data4/ED/PK/ANDROID-27277477/product-500x500.jpeg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 5,
            },
        },
        {
            price: "70",
            type: CarType.Family,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DY2YSiVWku9oHUXYtxrn4HxTunz0gtwXmrXGKLUJN4JiASBbboQMgyxyHUmZwCnXhSY&usqp=CAU",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 5,
            },
        },
        {
            price: "120",
            type: CarType.Family,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx_mDIsTDy6hY6ovZ3UkPq8e5I8A27aOnhQ&usqp=CAU",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 5,
            },
        },
        {
            price: "80",
            type: CarType.Small,
            image: "https://faircr.com/wp-content/uploads/2020/01/Oniisan.png",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 5,
            },
        },
        {
            price: "30",
            type: CarType["Super Car"],
            image: "https://i.f1g.fr/media/figarofr/orig/2012/05/24/13be8d56-a585-11e1-978b-b41e9c4c36dc-493x328.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "90",
            type: CarType.VIP,
            image: "https://imgctcf.aeplcdn.com/thumbs/p-nc-p-s500-ver4/images/cars/generic/jpeg-redigo.jpg?q=75",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "60",
            type: CarType.VIP,
            image: "https://images3.alphacoders.com/254/254047.jpg",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "60",
            type: CarType.Small,
            image: "https://media.gettyimages.com/id/518521200/photo/a-bmw-i8-hybrid-sports-car-taken-on-august-11-2015.jpg?s=612x612&w=gi&k=20&c=_sIhShJG0oi30SDdzKGoIIIPr8U0eaOzJqnLBRFGxCk=",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Manual,
                seats: 4,
            },
        },
        {
            price: "35",
            type: CarType.Family,
            image: "https://www.pngitem.com/pimgs/m/75-752589_2017-bmw-m4-bmw-m4-white-background-hd.png",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Manual,
                seats: 4,
            },
        },
        {
            price: "89",
            type: CarType.VIP,
            image: "https://i.pinimg.com/originals/35/a0/66/35a06631150f8ad40921fa509de78efa.png",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Manual,
                seats: 4,
            },
        },
        {
            price: "20",
            type: CarType.Family,
            image: "https://pngimg.com/d/audi_PNG1753.png",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "140",
            type: CarType.Family,
            image: "https://4kwallpapers.com/images/wallpapers/audi-rs-q8-mansory-white-background-2020-2560x1440-3387.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "140",
            type: CarType.Small,
            image: "https://i.pinimg.com/originals/2d/a1/a8/2da1a8b66a8a541c84761a6712feab4f.png",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "80",
            type: CarType["Super Car"],
            image: "https://i.pinimg.com/originals/ab/68/a8/ab68a8fd4c38d3c3f0326df692c5e90c.png",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "35",
            type: CarType.VIP,
            image: "https://p7.hiclipart.com/preview/607/263/711/mercedes-benz-a-class-car-mercedes-benz-s-class-mercedes-car-png-image.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Automatic,
                seats: 4,
            },
        },
        {
            price: "140",
            type: CarType.VIP,
            image: "https://img.favpng.com/1/7/4/mercedes-benz-cls-class-car-mercedes-benz-w219-rim-png-favpng-FtzeRGxaE5iyvnWYasrGTGL5d.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 4,
            },
        },
        {
            price: "110",
            type: CarType["Super Car"],
            image: "https://e7.pngegg.com/pngimages/840/310/png-clipart-mercedes-benz-cls-class-car-luxury-vehicle-mercedes-car-vehicle-rim.png",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 4,
            },
        },
        {
            price: "100",
            type: CarType.VIP,
            image: "https://cdn.imgbin.com/23/15/8/imgbin-mercedes-amg-c-63-mercedes-benz-cls-class-mercedes-benz-a-class-car-mercedes-benz-0T8t9Y1rajasCMVhxFngn0Thb.jpg",
            data: {
                fuel: FuelType.Diesel,
                transmission: TransmissionType.Manual,
                seats: 4,
            },
        },
        {
            price: "20",
            type: CarType["Super Car"],
            image: "https://e7.pngegg.com/pngimages/712/504/png-clipart-mercedes-benz-c-class-car-mercedes-benz-m-class-mercedes-benz-sls-amg-mercedes-benz-compact-car-car.png",
            data: {
                fuel: FuelType.LPG,
                transmission: TransmissionType.Manual,
                seats: 4,
            },
        },
    ]);
    const [filters, setFilters] = useState<{ [key: string]: string[] }>({
        carType: [],
        transmissionType: [],
        fuelType: [],
        sale: [],
    });
    const [price, setPrice] = useState<number[]>([30, 157]);

    const handleFilterToggle = (filterCategory: string, value: string) => {
        setFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };
            if (updatedFilters[filterCategory].includes(value)) {
                updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
                    (item) => item !== value
                );
            } else {
                updatedFilters[filterCategory] = [...updatedFilters[filterCategory], value];
            }
            return updatedFilters;
        });
    };
    const handleChangePrice = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number[]);
    };
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
            <div className="text-white md:w-[300px] bg-gray-700 items-start h-[24rem] md:m-4 md:mr-0  rounded-xl overflow-auto w-full mx-10 mt-4 z-0">
                <h1 className="text-center mt-5 font-bold">Filters</h1>
                <div className="px-4">
                    <div content="Car Types">
                        <h2 className="pl-5 border-b-2 font-thin">Car Types</h2>
                        <div className="ml-2 font-thin">
                            {carTypes.map((type, index) => (
                                <div className="flex items-center" key={index}>
                                    <Checkbox
                                        sx={{
                                            color: common.white,
                                            "&.Mui-checked": {
                                                color: common.white,
                                            },
                                        }}
                                        className="h-8 w-8"
                                        checked={filters.carType.includes(type)}
                                        onChange={() => handleFilterToggle("carType", type)}
                                    />
                                    <p>{type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div content="Fuel">
                        <h2 className="pl-5 border-b-2 font-thin">Fuel</h2>
                        <div className="ml-2 font-thin">
                            {fuelTypes.map((type, index) => (
                                <div className="flex items-center" key={index}>
                                    <Checkbox
                                        sx={{
                                            color: common.white,
                                            "&.Mui-checked": {
                                                color: common.white,
                                            },
                                        }}
                                        className="h-8 w-8"
                                        checked={filters.fuelType.includes(type)}
                                        onChange={() => handleFilterToggle("fuelType", type)}
                                    />
                                    <p>{type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div content="Transmissions">
                        <h2 className="pl-5 border-b-2 font-thin">Transmissions</h2>
                        <div className="ml-2 font-thin">
                            {transmissionTypes.map((type, index) => (
                                <div className="flex items-center" key={index}>
                                    <Checkbox
                                        sx={{
                                            color: common.white,
                                            "&.Mui-checked": {
                                                color: common.white,
                                            },
                                        }}
                                        className="h-8 w-8"
                                        checked={filters.transmissionType.includes(type)}
                                        onChange={() => handleFilterToggle("transmissionType", type)}
                                    />
                                    <p>{type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="Price">
                        <h2 className="pl-5 border-b-2 font-thin">Price</h2>
                        <div className=" items-center flex justify-end">
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    getAriaLabel={() => "Price range"}
                                    min={10}
                                    max={250}
                                    value={price}
                                    onChange={handleChangePrice}
                                    valueLabelDisplay="auto"
                                />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-center grid h-full max-w-[1000px] grid-flow-row xl:grid-cols-3 justify-center">
                {cars
                    .filter(filterCars)
                    .filter((car) => Number(car.price) >= price[0] && Number(car.price) <= price[1])
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
