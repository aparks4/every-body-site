import { useEffect } from "react";

const KlaviyoInitializer = () => {
    useEffect(() => {
        if(window.klaviyo && typeof window.klaviyo === 'function') {
            window.klaviyo('identify', {
                email: 'user@example.com'
            });
        }
    }, []);

    return null;
};

export default KlaviyoInitializer;