import React from "react";
import CardMain from "../../components/cards/CardMain";
import FilterCategory from "../../components/Filter";

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
            <FilterCategory paintings={data} />
                
        </div>
    );
}

export default Welcome;
