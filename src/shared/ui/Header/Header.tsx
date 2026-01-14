interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    return (
        <header className="sticky top-0 h-16 flex justify-center gap-4 z-100">
            <div className="w-full max-w-360 flex items-center px-4">
                <div className="text-xl font-semibold">Dialog.</div>
                <div></div>
            </div>
        </header>
    );
}
