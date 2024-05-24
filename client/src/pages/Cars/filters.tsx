/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarType, FuelType, TransmissionType } from "../../components/CarItem";
import { useMediaQuery } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { common } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const Input = styled(MuiInput)`
    width: 72px;
    color: white;
`;

export const Filters = (props: {
    filtersContext: [any, React.Dispatch<React.SetStateAction<any>>],
    priceContext: [any, React.Dispatch<React.SetStateAction<any>>],
    sortContext: [any, React.Dispatch<React.SetStateAction<any>>],
    priceLimitContext: [number, number]
}) => {
    const [filters, setFilters] = props.filtersContext;
    const [price, setPrice] = props.priceContext;
    const [selectedSort, setSelectedSort] = props.sortContext;
    const [_MIN_PRICE, _MAX_PRICE] = props.priceLimitContext;
    
    const carTypes = Object.values(CarType);
    const fuelTypes = Object.values(FuelType);
    const transmissionTypes = Object.values(TransmissionType);
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    const handleFilterToggle = (filterCategory: string, value: string) => {
        setFilters((prevFilters: any) => {
            const updatedFilters = { ...prevFilters };
            if (updatedFilters[filterCategory].includes(value)) {
                updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
                    (item: string) => item !== value
                );
            } else {
                updatedFilters[filterCategory] = [...updatedFilters[filterCategory], value];
            }
            return updatedFilters;
        });
    };
    const handleChangePrice = (_event: any, newValue: any) => {
        if (Array.isArray(newValue)) {
            const [minPrice, maxPrice] = newValue.map((val) => (val === "" ? undefined : val));
            setPrice({ minPrice, maxPrice });
        }
    };

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice({ minPrice: Number(event.target.value), maxPrice: price.maxPrice });
    };
    const handleChangeMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice({ minPrice: price.maxPrice, maxPrice: Number(event.target.value) });
    };
    const handleBlur = () => {
        if (price.minPrice < _MIN_PRICE) {
            setPrice({ minPrice: _MIN_PRICE, maxPrice: price.maxPrice });
        } else if (price.maxPrice < _MAX_PRICE) {
            setPrice({ minPrice: price.minPrice, maxPrice: _MAX_PRICE });
        }
    };

    return (
        <Accordion
            defaultExpanded={!isSmallScreen}
            className="!md:w-[300px] !bg-slate-700 !items-start !md:m-4 !md:mr-0 !h-fit !rounded-xl !overflow-auto !md:w-full !mx-10 !mt-4 !z-0 !font !text-slate-200 !w-[20rem]"
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon className="text-white" />}>
                <h1 className="text-center mt-5 font-bold">Filters</h1>
            </AccordionSummary>
            <AccordionDetails>
                <div className="px-4">
                    <div content="Car Types">
                        <h2 className="pl-5 border-b-2 font-thin mb-2">Car Types</h2>
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
                        <h2 className="pl-5 border-b-2 font-thin  mb-2">Fuel</h2>
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
                        <h2 className="pl-5 border-b-2 font-thin mb-2">Transmissions</h2>
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
                    <div content="Price">
                        <h2 className="pl-5 border-b-[2px] pb-2 font-thin">Price Range</h2>
                        <div className=" items-center flex flex-col">
                            <div className="">
                                <Box sx={{ width: 250 }}>
                                    <Slider
                                        getAriaLabel={() => "Price range"}
                                        min={10}
                                        max={250}
                                        value={[price.minPrice, price.maxPrice]}
                                        onChange={handleChangePrice}
                                        valueLabelDisplay="auto"
                                    />
                                </Box>
                            </div>

                            <div className="flex justify-evenly w-full pb-4">
                                <span className="pr-2">Min Price:</span>
                                <Input
                                    value={price.minPrice}
                                    onChange={handleChangeMinPrice}
                                    className="border-[1px] px-4"
                                    inputProps={{
                                        type: "number",
                                        "aria-labelledby": "input-slider",
                                    }}
                                />
                                <span className="px-2">Max price:</span>
                                <Input
                                    value={price.maxPrice}
                                    className="border-[1px] px-4"
                                    onChange={handleChangeMaxPrice}
                                    onBlur={handleBlur}
                                    inputProps={{
                                        type: "number",
                                        "aria-labelledby": "input-slider",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div content="Sort">
                        <h2 className="pl-5 border-b-2 font-thin mb-2">Sort</h2>
                        <Box sx={{ minWidth: 150, paddingBottom: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                    className="border-white bg-white"
                                    value={selectedSort}
                                    onChange={(event) => {
                                        setSelectedSort(event.target.value as string);
                                    }}
                                >
                                    <MenuItem value={"default"}>Default</MenuItem>
                                    <MenuItem value={"price"}>By price</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div content="Reset" className="pb-4 flex justify-center">
                        <Button
                            variant="contained"
                            className="!bg-green-600"
                            onClick={() => {
                                setFilters({
                                    carType: [],
                                    transmissionType: [],
                                    fuelType: [],
                                    sale: [],
                                });
                                console.log(_MIN_PRICE);
                                setPrice({ minPrice: _MIN_PRICE, maxPrice: _MAX_PRICE });
                                setSelectedSort("default");
                            }}
                        >
                            Reset all filters!
                        </Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
};
export default Filters;
