/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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

const locations = [
    { value: "iasi_airport", label: "Iasi, Airport" },
    { value: "iasi_palas_mall", label: "Iasi, Palas Mall" },
    { value: "iasi_iulius_mall", label: "Iasi, Iulius Mall" },
];

const carTypes = ["Small", "Family", "VIP", "Super Car", "ANY"];

function RentACarForm() {
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropOffLocation, setDropOffLocation] = useState("");
    const [useSameLocation, setUseSameLocation] = useState(false);
    const [carType, setCarType] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [dropOffDate, setDropOffDate] = useState("");
    const [driverAge, setDriverAge] = useState("");

    const handleCheckboxChange = (event: any) => {
        setUseSameLocation(event.target.checked);
        if (event.target.checked) {
            setDropOffLocation(pickupLocation);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 bg-slate-100 p-8 rounded-3xl">
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
                    <TextField
                        type="number"
                        value={driverAge}
                        onChange={(e) => setDriverAge(e.target.value)}
                        fullWidth
                        label="Driver's Age"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default RentACarForm;
