import { TripInfo } from "./TripInfo";
import { VehicleInfo } from "./PriceCalculator";
export default function Confirmation({ tripInfo, price, selectedVehicle, }: {
    tripInfo: TripInfo;
    price: number;
    selectedVehicle: VehicleInfo;
}): import("react/jsx-runtime").JSX.Element;
