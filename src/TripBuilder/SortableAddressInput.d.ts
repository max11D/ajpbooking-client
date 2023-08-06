/// <reference types="google.maps" />
export type SortableAddressInputProps = {
    value: string;
    onChange: (newValue: google.maps.places.AutocompletePrediction) => void;
    id: string;
    deleteStop: () => void;
};
export default function SortableAddressInput({ value, onChange, id, deleteStop, }: SortableAddressInputProps): import("react/jsx-runtime").JSX.Element;
