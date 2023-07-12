export type AddressInputProps = {
    label?: string;
    value: string;
    onChange: (newValue: string) => void;
    disabled?: boolean;
};
export default function AddressInput({ onChange, value, label, disabled, }: AddressInputProps): import("react/jsx-runtime").JSX.Element;
