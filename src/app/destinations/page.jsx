import DestinationCard from "@/components/DestinationCard";


const DestinationPage =  async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const destinations = await res.json()
    console.log(destinations);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold my-8 text-center">All Destinations</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)}
            </div>
        </div>
    );
};

export default DestinationPage;