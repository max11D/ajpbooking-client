export type Stop = {
    id: string;
    address: string;
};
export type StopListProps = {
    stops: Stop[];
    setStops: (newStops: Stop[]) => void;
    deleteStop: (index: number) => void;
};
export default function StopList({ stops, setStops, deleteStop, }: StopListProps): import("react/jsx-runtime").JSX.Element;
