import Button from "@mui/material/Button";
import { styled } from "@mui/system";

/* eslint-disable react-refresh/only-export-components */
export enum CarType {
    "Small" = "Small",
    "Family" = "Family",
    "VIP" = "VIP",
    "Super Car" = "Super Car",
}
export enum TransmissionType {
    "Manual" = "Manual",
    "Automatic" = "Automatic",
}
export enum FuelType {
    "Diesel" = "Diesel",
    "Petrol" = "Petrol",
    "LPG" = "LPG",
}

export interface ICar {
    price: string;
    type: CarType;
    image: string;
    sale?: number;
    data: {
        seats: number;
        transmission: TransmissionType;
        fuel: FuelType;
    };
}

const GradientButton = styled(Button)({
    background: "linear-gradient(45deg, #4CAF50, #2E7D32)",
    border: 0,
    borderRadius: 8,
    color: "white",
    maxHeight: "40px",
    padding: "8px 12px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    transition: "background-color 0.3s",
    "&:hover": {
        background: "linear-gradient(45deg, #2E7D32, #4CAF50)",
    },
});

export const CarItem = (props: ICar) => {
    const { image, type, data, price } = props;
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full max-w-[20rem]">
            <div className="h-[15rem] flex items-center">
                <img src={image} alt={type} className="w-full h-auto max-h-[260px]" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{type}</h2>
                <p className="text-gray-700 mb-2">
                    {data.fuel} | {data.transmission} | {data.seats} seats
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-gray-800 text-lg font-semibold flex items-center">
                        {props.sale ? (
                            <div>
                                <p className="text-red-500 line-through">${props.price} </p>
                                <p>${Number(price) - (props.sale * Number(price)/100)}</p>
                            </div>
                        ) : (
                            `$${price}`
                        )}
                    </p>
                    <GradientButton variant="contained" className="items-center ">
                        View deal!
                    </GradientButton>
                </div>
            </div>
        </div>
    );
};
