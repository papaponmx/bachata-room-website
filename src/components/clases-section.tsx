import Image from 'next/image';

interface ClasesSectionProps {
    title: string;
    description?: string;
    imageUrl?: string;
    id: string;
    children?: React.ReactNode;
}

const ClasesSection: React.FC<ClasesSectionProps> = ({
    title,
    imageUrl,
    id,
    children,
}) => {
    return (
        <section
            id={id}
            className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-zinc-200 to-white"
        >
            <div className="max-w-3xl text-center mb-8">
            </div>
            {imageUrl && (
                <div className="flex justify-center">
                    <Image src={imageUrl} alt="Clases Image" width={400} height={300} />
                </div>
            )}
            <div className="max-w-3xl text-center text-lg opacity-70">{children}</div>
        </section>
    );
};

export default ClasesSection;
