export type SortableAddressInputProps = {
    value: string;
    onChange: (newValue: string) => void;
    id: string;
    deleteStop: () => void;
};
export default function SortableAddressInput({ value, onChange, id, deleteStop, }: SortableAddressInputProps): import("react/jsx-runtime").JSX.Element;
