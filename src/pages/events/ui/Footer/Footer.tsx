import { Link } from '@heroui/link';
import { Divider } from '@heroui/divider';

interface FooterProps {
    className?: string;
    logo?: React.ReactNode;
    copyright?: string;
    fromYear?: number;
}

export default function Footer({
    className,
    logo,
    copyright,
    fromYear,
}: FooterProps) {
    return (
        <footer className="flex justify-center py-12">
            <div className="container">
                <div className="w-full flex flex-col gap-8">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1">{logo}</div>
                        <div className="col-span-3"></div>
                    </div>
                    <Divider />
                    <div className="flex flex-col items-center gap-8 md:flex-row">
                        <div className="flex-1 flex flex-col items-center justify-between gap-6 md:flex-row">
                            {(copyright || fromYear) && (
                                <span className="text-gray-800 text-sm">
                                    {copyright}{' '}
                                    {fromYear && (
                                        <span>
                                            {fromYear} –{' '}
                                            {new Date().getFullYear()}
                                        </span>
                                    )}
                                </span>
                            )}

                            <Link
                                size="sm"
                                href="/privacy-policy"
                                className="text-gray-800"
                                underline="always"
                            >
                                Политика конфиденциальности
                            </Link>

                            <Link
                                size="sm"
                                href="/public-offer"
                                className="text-gray-800"
                                underline="always"
                            >
                                Публичная оферта
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center justify-end gap-4">
                            <span className="text-default-800 text-sm">
                                Разработано в{' '}
                                <Link
                                    size="sm"
                                    href="https://vlgrigoriev.dev/"
                                    className="text-default-800"
                                    underline="always"
                                    isExternal
                                >
                                    VG.DEV
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
