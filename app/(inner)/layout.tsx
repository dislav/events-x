import {
    Header,
    // Footer
} from '@/shared/ui';

export default function DetailLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            {/*<Footer />*/}
        </>
    );
}
