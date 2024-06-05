import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterCategory from "../../components/Filter";

function Welcome() {
    const [paintingsData, setPaintingsData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/paintings").then((response) => {
            setPaintingsData(response.data);
        });
      }, []);

    return (
        <div>
            <img
                className="my-4"
                src="images/second_welcome_banner_image.jpg"
                alt="banner"
            />
            <FilterCategory paintings={paintingsData} />
                
        </div>
    );
}

export default Welcome;
