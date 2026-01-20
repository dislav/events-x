interface HeaderProps {
    className?: string;
    logo?: React.ReactNode;
}

export default function Header({ className, logo }: HeaderProps) {
    return (
        <header className="sticky top-0 h-16 flex justify-center gap-4 py-4 z-100">
            <div className="container items-center">
                {logo && <div className="flex items-center">{logo}</div>}
            </div>
        </header>
    );
}
