import { useEffect, useState } from "react";

export const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return {data, loading};
};
