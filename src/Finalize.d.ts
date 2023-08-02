import { VehicleInfo } from "./PriceCalculator";
import { TripInfo } from "./TripInfo";
export default function Finalize({ selectedVehicle, tripInfo, tripPrice, onBack, }: {
    selectedVehicle: VehicleInfo;
    tripInfo: TripInfo;
    tripPrice: number;
    onBack: () => void;
}): import("react/jsx-runtime").JSX.Element;
