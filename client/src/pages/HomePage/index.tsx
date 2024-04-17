import React from "react";
import RentACarForm from "../../components/RentACarForm";
import backgroundImage from "../../assets/home-bg-image.png";
import { CheckCircle } from "react-feather";
import StarRatings from "react-star-ratings";

const HomePage: React.FC = () => {
    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className="flex-grow flex">
                    <div
                        className="w-full md:p-0 p-8"
                        style={{
                            background: `url(${backgroundImage})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                        }}
                    >
                        <RentACarForm />
                    </div>
                </div>
                <div className="w-full flex lg:justify-center lg:flex-row flex-col">
                    <div
                        className="!text-slate-600 bg-slate-100 lg:w-1/4 p-8 m-10 rounded-2xl"
                        content="why-us?"
                    >
                        <h1 className="tex-center flex justify-center">Why rent-a-car-iasi.ro? </h1>
                        <div className="flex justify-center items-center flex-col">
                            <ul className="-ml-6">
                                <li className="flex">
                                    <CheckCircle className="text-green-500 mr-2" />
                                    <h2>Avoid insurance surprises sold by third parties</h2>
                                </li>
                                <li className="flex">
                                    <CheckCircle className="text-green-500 mr-2" />
                                    <h2>No additional charges, final price guaranteed</h2>
                                </li>
                                <li className="flex">
                                    <CheckCircle className="text-green-500 mr-2" />
                                    <h2>Best price guaranteed</h2>
                                </li>
                                <li className="flex">
                                    <CheckCircle className="text-green-500 mr-2" />
                                    <h2>No deposit, no excess option</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="!text-slate-600 bg-slate-100 lg:w-1/4 p-8 m-10 rounded-2xl"
                        content="why-us?"
                    >
                        <h1 className="tex-center flex justify-center">Who recommends us? </h1>
                        <h2 className="indent-4">
                            We have received 2081 customer reviews, with 92% of them stating that they were
                            very satisfied with the service we provided. They also mentioned that they would
                            definitely book again with us.
                        </h2>
                        <h2 className="indent-4">
                            Based on these reviews, we have achieved a <span className="font-bold">4.6</span>{" "}
                            rating on <span className="font-bold">Google Reviews! </span>
                        </h2>
                        <div className="flex w-full justify-center">
                            <StarRatings
                                rating={4.6}
                                starDimension="30px"
                                starSpacing="5px"
                                starRatedColor="orange"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="text-center text-5xl pt-8 !text-slate-600">Multiple cars to choose from!</h1>
                    <div className="car-container pb-4">
                        <div className="car">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/019/142/818/non_2x/modern-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png"
                                alt="Small Car"
                            />
                            <h2>Small Car</h2>
                        </div>
                        <div className="car">
                            <img
                                src="https://www.pacificcarrentals.com/wp-content/uploads/2021/11/Luxury-Fullsize-Car.png"
                                alt="VIP Car"
                            />
                            <h2>VIP Car</h2>
                        </div>
                        <div className="car">
                            <img
                                src="https://www.pngall.com/wp-content/uploads/8/White-SUV-PNG-Picture.png"
                                alt="Family Car"
                            />
                            <h2>Family Car</h2>
                        </div>
                        <div className="car">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/019/612/564/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png"
                                alt="Super Car"
                            />
                            <h2>Super Car</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

// Book on our web instead of comparison websites
// Avoid insurance surprises sold by third parties
// No additional charges, final price guaranteed
// Best price guaranteed
// No deposit, no excess option
