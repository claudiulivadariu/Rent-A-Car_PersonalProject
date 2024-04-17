import React from "react";
import RentACarForm from "../../components/RentACarForm";
import backgroundImage from "../../assets/home-bg-image.png";
const HomePage: React.FC = () => {
    return (
        <>
            <div className="justify-between flex flex-col h-[93vh]">
                <div className="flex flex-col flex-grow">
                    <div
                        className="w-full "
                        style={{
                            background: `url(${backgroundImage})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: '100% 100%',
                        }}
                    >
                        <RentACarForm />
                    </div>
                </div>
                <footer className="bg-gray-900 text-white w-full py-4">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2024 Rent-A-Car. All rights reserved.</p>
                        <p>
                            Rental conditions: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            condimentum tortor non neque faucibus, nec dignissim est varius.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default HomePage;
