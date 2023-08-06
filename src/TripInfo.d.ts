/// <reference types="google.maps" />
import { TripType } from "./TripBuilder";
export type TripInfo = {
    origin: google.maps.places.AutocompletePrediction;
    destination: google.maps.places.AutocompletePrediction;
    waypoints: string[];
    childSeats: {
        infant: number;
        toddler: number;
        child: number;
    };
    passengerCount: number;
    luggageCount: number;
    date: Date;
    hours: number | undefined;
    tripType: TripType;
    accessible: boolean;
    diffDropoff: boolean;
    pickupFlightNumber?: string;
    dropoffFlightNumber?: string;
};
