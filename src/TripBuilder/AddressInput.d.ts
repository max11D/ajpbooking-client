/// <reference types="google.maps" />
export type AddressInputProps = {
    label?: string;
    value: string;
    onChange: (newValue: google.maps.places.AutocompletePrediction) => void;
    disabled?: boolean;
    error?: boolean;
};
export default function AddressInput({ onChange, value, label, disabled, error, }: AddressInputProps): import("react/jsx-runtime").JSX.Element;
