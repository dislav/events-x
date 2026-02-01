import { Link } from '@heroui/link';
import { Button } from '@heroui/button';

import { Icon, type SvgIconName } from '@/shared/ui';

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
            <Icon className="size-5" name={type as SvgIconName} />
        </Button>
    );
}
