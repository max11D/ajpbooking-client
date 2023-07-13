import { TripType } from "./TripBuilder";
export type TripInfo = {
    origin: string;
    destination: string;
    waypoints: string[];
    childSeats: {
        infant: number;
        toddler: number;
        child: number;
    };
    passengerCount: number;
    luggageCount: number;
    date: Date;
    hours: number;
    tripType: TripType;
    accessible: boolean;
    diffDropoff: boolean;
};
