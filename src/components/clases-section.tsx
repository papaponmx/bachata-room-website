import Image from 'next/image';

interface ClasesSectionProps {
    title: string;
    description: string;
    imageUrl?: string;
}

const ClasesSection: React.FC<ClasesSectionProps> = ({
    title,
    description,
    imageUrl,
}) => {
    return (
        <section id='clases' className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-zinc-200 to-white">
            <h2 className="text-4xl font-semibold mb-4">{title}</h2>
            <div className="max-w-3xl text-center mb-8">
                <p className="text-lg opacity-70">{description}</p>
            </div>
            {imageUrl && (
                <div className="flex justify-center">
                    <Image src={imageUrl} alt="Clases Image" width={400} height={300} />
                </div>
            )}
        </section>
    );
};

export default ClasesSection;
