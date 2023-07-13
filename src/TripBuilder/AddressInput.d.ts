export type AddressInputProps = {
    label?: string;
    value: string;
    onChange: (newValue: string) => void;
    disabled?: boolean;
    error?: boolean;
};
export default function AddressInput({ onChange, value, label, disabled, error, }: AddressInputProps): import("react/jsx-runtime").JSX.Element;
