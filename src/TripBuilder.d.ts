import { TripInfo } from './TripInfo';
export type TripType = 'roadShow' | 'pointToPoint' | 'toAirport' | 'fromAirport' | 'hourly';
export declare const TRIP_TYPE_LABELS: Record<TripType, string>;
export default function TripBuilder({ onNext, existingTripInfo }: {
    onNext: (tripInfo: TripInfo) => void;
    existingTripInfo: TripInfo | undefined;
}): import("react/jsx-runtime").JSX.Element;
