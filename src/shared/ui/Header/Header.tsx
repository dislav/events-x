interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    return (
        <header className="sticky top-0 h-16 flex justify-center gap-4 z-100">
            <div className="container items-center">
                <div className="text-xl font-semibold">Dialog.</div>
                <div></div>
            </div>
        </header>
    );
}
