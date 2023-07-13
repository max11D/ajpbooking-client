import { TripInfo } from "./TripInfo";
export type VehicleInfo = {
    make: string;
    model: string;
    image: string;
    basePrice: number;
    mileagePrice: number;
    hourlyPrice: number;
    maxPassengers: number;
    maxLuggage: number;
    vehicleCode: string;
};
export default function PriceCalculator({ tripInfo, onBack, onSelect }: {
    tripInfo: TripInfo | undefined;
    onBack: () => void;
    onSelect: (vehicle: VehicleInfo, quotedPrice: number) => void;
}): import("react/jsx-runtime").JSX.Element;
