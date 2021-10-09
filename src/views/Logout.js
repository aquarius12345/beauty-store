import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        window.location = '/'
    }, []);

    return (
        <div></div>
    );
};

export default Logout;