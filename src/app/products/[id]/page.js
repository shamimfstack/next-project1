import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(params);
    console.log(searchParams);
    return (
        <div>
            <h1>This is dynamic page: {params.id}</h1>
            <h2>Search by: {searchParams.category}</h2>
            <p>Price: {searchParams.price}</p>
        </div>
    );
};

export default DynamicPage;