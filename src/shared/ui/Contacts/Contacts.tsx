import { Link } from '@heroui/link';
import { cn } from '@heroui/react';

interface ContactsProps {
    className?: string;
    organizer: string;
    address?: string;
    phones?: string[];
    emails?: string[];
    socials?: React.ReactNode;
}

export default function Contacts({
    className,
    organizer,
    address,
    phones,
    emails,
    socials,
}: ContactsProps) {
    return (
        <div
            className={cn(
                'flex flex-col gap-8 bg-gray-100 rounded-3xl p-8',
                className
            )}
        >
            <h2 className="text-4xl font-semibold">Контакты</h2>

            <div className="flex flex-col gap-6">
                {phones && phones.length > 0 && (
                    <div className="flex flex-col gap-1">
                        <span className="text-primary text-lg font-medium">
                            Телефон
                        </span>
                        <div className="flex flex-col gap-1">
                            {phones.map((phone) => (
                                <Link
                                    key={phone}
                                    href={`tel:${phone}`}
                                    color="foreground"
                                    className="text-2xl font-medium"
                                >
                                    {phone}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {emails && emails.length > 0 && (
                    <div className="flex flex-col gap-1">
                        <span className="text-primary text-lg font-medium">
                            Почта
                        </span>
                        <div className="flex flex-col gap-1">
                            {emails.map((email) => (
                                <Link
                                    key={email}
                                    href={`mailto:${email}`}
                                    color="foreground"
                                    className="text-2xl font-medium"
                                >
                                    {email}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-1">
                    <span className="text-primary text-lg font-medium">
                        Организатор
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-medium">
                            {organizer}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-primary text-lg font-medium">
                        Место проведения
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-medium">{address}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-primary text-lg font-medium">
                        Социальные сети
                    </span>
                    <div className="flex flex-col gap-1">{socials}</div>
                </div>
            </div>
        </div>
    );
}
