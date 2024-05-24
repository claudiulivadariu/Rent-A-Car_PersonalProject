/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
    Button,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const locations = [
    { value: "iasi_airport", label: "Iasi, Airport" },
    { value: "iasi_palas_mall", label: "Iasi, Palas Mall" },
    { value: "iasi_iulius_mall", label: "Iasi, Iulius Mall" },
];

const carTypes = ["Any", "Small", "Family", "VIP", "Super Car"];

const useStyles = makeStyles(() => ({
    warning: {
        color: "red",
        animation: "$shake 0.5s",
    },
    "@keyframes shake": {
        "0%": { transform: "translateX(0)" },
        "20%": { transform: "translateX(-3px)" },
        "40%": { transform: "translateX(3px)" },
        "60%": { transform: "translateX(-3px)" },
        "80%": { transform: "translateX(3px)" },
        "100%": { transform: "translateX(0)" },
    },
}));
export class Form {
    pickUpLocation: string;
    dropOffLocation: string;
    carType: string;
    pickUpDate: string;
    dropOffDate: string;
    constructor(pickLoc: string, dropLoc: string, car: string, pickDate: string, dropDate: string) {
        this.pickUpLocation = pickLoc;
        this.dropOffLocation = dropLoc;
        this.carType = car;
        this.pickUpDate = pickDate;
        this.dropOffDate = dropDate;
    }
}

function RentACarForm() {
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropOffLocation, setDropOffLocation] = useState("");
    const [useSameLocation, setUseSameLocation] = useState(false);
    const [carType, setCarType] = useState("Any");
    const [pickupDate, setPickupDate] = useState(new Date().toISOString().split("T")[0]);
    const [dropOffDate, setDropOffDate] = useState(
        new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
    );
    const [isAdult, setIsAdult] = useState(false);
    const [showWarning, setShowWarning] = useState(false); // State for showing the warning

    const handleCheckboxChange = (event: any) => {
        setUseSameLocation(event.target.checked);
        if (event.target.checked) {
            setDropOffLocation(pickupLocation);
        }
    };
    const classes = useStyles();

    useEffect(() => {
        if (useSameLocation === true) {
            setDropOffLocation(pickupLocation);
        }
    }, [pickupLocation, useSameLocation]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!isAdult) {
            setShowWarning(true);
        } else {
            const form = new Form(pickupLocation, dropOffLocation, carType, pickupDate, dropOffDate);
            console.log(form);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 bg-white p-8 rounded-3xl">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Pick-up Location</InputLabel>
                        <Select
                            value={pickupLocation}
                            label="Pick-up Location"
                            onChange={(e) => setPickupLocation(e.target.value)}
                            fullWidth
                        >
                            {locations.map((location) => (
                                <MenuItem key={location.value} value={location.value}>
                                    {location.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Drop-off Location</InputLabel>
                        <Select
                            value={dropOffLocation}
                            label="Drop-off Location"
                            onChange={(e) => setDropOffLocation(e.target.value)}
                            fullWidth
                            disabled={useSameLocation}
                        >
                            {locations.map((location) => (
                                <MenuItem key={location.value} value={location.value}>
                                    {location.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox checked={useSameLocation} onChange={handleCheckboxChange} />}
                        label="Use same location for drop-off"
                        componentsProps={{
                            typography: { sx: { fontSize: '15px' } }  // Adjust the font size as needed
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Car Type</InputLabel>
                        <Select
                            label="Car Type"
                            value={carType}
                            onChange={(e) => setCarType(e.target.value)}
                            fullWidth
                        >
                            {carTypes.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Pick-up date</InputLabel>
                    <TextField
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Drop-off date</InputLabel>
                    <TextField
                        type="date"
                        value={dropOffDate}
                        onChange={(e) => setDropOffDate(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isAdult}
                                onChange={(event) => {
                                    setShowWarning(false);
                                    setIsAdult(event.target.checked);
                                }}
                            />
                        }
                        className={`${showWarning ? classes.warning : ""}`}
                        label={showWarning ? "I am over 18 years old*" : "I am over 18 years old"}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                        Check our offers!
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default RentACarForm;
