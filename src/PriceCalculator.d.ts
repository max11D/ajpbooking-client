import { TripInfo } from './TripInfo';
export type VehicleInfo = {
    Make: string;
    Model: string;
    BasePrice: number;
    MileagePrice: number;
    HourlyPrice: number;
    MaxPassengers: number;
    MaxLuggage: number;
    VehicleCode: string;
    ImageURL: string;
};
export default function PriceCalculator({ tripInfo, onBack, onSelect }: {
    tripInfo: TripInfo | undefined;
    onBack: () => void;
    onSelect: (vehicle: VehicleInfo, quotedPrice: number) => void;
}): import("react/jsx-runtime").JSX.Element;
