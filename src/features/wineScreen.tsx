import {useEffect, useState} from 'react';
import {getAllWines} from "../api/api-calls/wineApiCalls";
import {Wines} from "../api/api-models/wine";

export default function WineScreen() {
    const [wines, setWines] = useState<Wines>();

    useEffect(() => {
        const fetchData = async () => {
            const wines = await getAllWines();
            setWines(wines);
        }
        fetchData().catch(console.error);
    }, []);

    console.log(wines)

    return (
        <>
            <div>
                <p>Wines</p>
            </div>

        </>)
        ;
}