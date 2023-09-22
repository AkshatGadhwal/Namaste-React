import {useState, useEffect} from 'react';
export const useShowOnlineStatus = () => {
    const [status, setStatus]  = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => setStatus(false));
        window.addEventListener('online', () => setStatus(true));
    }, []);

    return status;
}