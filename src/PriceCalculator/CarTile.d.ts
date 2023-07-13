import { VehicleInfo } from "../PriceCalculator";
import { TripType } from "../TripBuilder";
export default function CarTile({ vehicleInfo, distance, time, tripType, onSelect, tripPrice }: {
    vehicleInfo: VehicleInfo;
    distance?: number;
    tripPrice?: number;
    time: number;
    tripType: TripType;
    onSelect?: (quotedPrice: number) => void;
}): import("react/jsx-runtime").JSX.Element;
