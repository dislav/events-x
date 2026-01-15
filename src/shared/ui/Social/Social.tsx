import { Link } from '@heroui/link';
import { Button } from '@heroui/button';

interface SocialProps {
    className?: string;
    url: string;
    type: string;
}

export default function Social({ className, url, type }: SocialProps) {
    return (
        <Button
            color="primary"
            variant="ghost"
            as={Link}
            className={className}
            href={url}
            isIconOnly
        >
            {type}
        </Button>
    );
}
