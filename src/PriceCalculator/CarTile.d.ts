import { VehicleInfo } from "../PriceCalculator";
import { TripType } from "../TripBuilder";
export default function CarTile({ vehicleInfo, time, tripType, onSelect, tripPrice }: {
    vehicleInfo: VehicleInfo;
    tripPrice?: number;
    time: number;
    tripType: TripType;
    onSelect?: (vehicleCode: string) => void;
}): import("react/jsx-runtime").JSX.Element;
