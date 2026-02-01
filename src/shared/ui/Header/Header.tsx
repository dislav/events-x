import { Link } from '@heroui/link';
import { Icon } from '@/shared/ui';

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    return (
        <header className="sticky top-0 h-16 flex justify-center gap-8 z-100">
            <div className="container items-center">
                <Link href="/" className="gap-2">
                    <div className="shrink-0 size-10 flex items-center justify-center text-white bg-primary rounded-full">
                        <Icon name="message-circle" />
                    </div>
                    <span className="text-gray-800 text-lg font-semibold">
                        Диалог
                    </span>
                </Link>
            </div>
        </header>
    );
}
