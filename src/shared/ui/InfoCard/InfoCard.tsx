import { iconInfoCardStyles } from './IconInfoCard.styles';

interface IconTextCardProps {
    className?: string;
    icon: React.ReactNode;
    title: string;
    description?: string;
}

export default function IconInfoCard({ className, icon, title, description }: IconTextCardProps) {
    const styles = iconInfoCardStyles();
    
    return (
        <div className={styles.base({ className })}>
            <div className={styles.icon()}></div>
        </div>
    );
}
