import Image from 'next/image'

const sideTables = [
    {
        src: "/sidetable1.png",
        alt: "Side table 1",
        title: "Side Table 1",
    },
    {
        src: "/sidetable2.png",
        alt: "Side table 2",
        title: "Side Table 2",
    },
];

const Sidetablesection = () => {

    return (
        <section className="lg:py-16 py-10 bg-[#FAF4F4]">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-6">
                    {sideTables.map((table, index) => (
                        <div key={index}>
                            <Image
                                src={table.src}
                                alt={table.alt}
                                width={350}
                                height={350}
                                className="min-w-fit mt-3 lg:mt-0"
                            />
                            <h2 className="text-2xl font-semibold mb-2 mt-[7px]">{table.title}</h2>
                            <button className="text-gray-600 hover:text-gray-900 border-b border-gray-600 pb-1 mb-4">View More</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sidetablesection
