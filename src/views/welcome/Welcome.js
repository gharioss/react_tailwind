import React from "react";
import CardMain from "../../components/cards/CardMain";

function Welcome() {
    const data = [
        { name: 'Tableau 1', price: '$1500' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
        { name: 'Tableau 2', price: '$1200' },
    ];

    return (
        <div>
            <img
                className="my-4"
                src="images/second_welcome_banner_image.jpg"
                alt="banner"
            />
            <div className="max-w-screen flex items-center justify-center flex-wrap">
                {data.map((painting, index) => (
                    <CardMain key={index} name={painting.name} price={painting.price} />
                ))}
            </div>
        </div>
    );
}

export default Welcome;
