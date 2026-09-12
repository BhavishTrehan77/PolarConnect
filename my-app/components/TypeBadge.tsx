type TypeBadgeProps ={
    type: string;
};

export default function 
TypeBadge({ type }: TypeBadgeProps) {
    return (
        <span className="type-badge">
            {type}
        </span>
    );
}