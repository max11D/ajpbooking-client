import { VehicleInfo } from "./PriceCalculator";
import { TripInfo } from "./TripInfo";
export default function Finalize({ selectedVehicle, tripInfo, tripPrice, onBack, onSuccess }: {
    selectedVehicle: VehicleInfo;
    tripInfo: TripInfo;
    tripPrice: number;
    onBack: () => void;
    onSuccess: (tripConfirmation: {
        tripInfo: TripInfo;
        tripPrice: number;
        selectedVehicle: VehicleInfo;
    }) => void;
}): import("react/jsx-runtime").JSX.Element;
