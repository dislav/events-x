export default function GradualBlur() {
    return (
        <div className="fixed left-0 right-0 top-0 w-full h-16 isolate pointer-events-none overflow-hidden z-10">
            <div className="relative size-full">
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage:
                            'linear-gradient(to top, transparent 0%, black 20%, black 40%, transparent 60%)',
                        backdropFilter: 'blur(0.125rem)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage:
                            'linear-gradient(to top, transparent 20%, black 40%, black 60%, transparent 80%)',
                        backdropFilter: 'blur(0.249rem)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage:
                            'linear-gradient(to top, transparent 40%, black 60%, black 80%, transparent 100%)',
                        backdropFilter: 'blur(0.565rem)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage:
                            'linear-gradient(to top, transparent 60%, black 80%, black 100%)',
                        backdropFilter: 'blur(1.124rem)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage:
                            'linear-gradient(to top, transparent 80%, black 100%)',
                        backdropFilter: 'blur(1.5rem)',
                    }}
                />
            </div>
        </div>
    );
}
