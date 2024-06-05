import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterCategory from "../../components/Filter";

function Welcome() {
    return (
        <div>
            <img
                className="my-4"
                src="images/second_welcome_banner_image.jpg"
                alt="banner"
            />
            <FilterCategory />
                
        </div>
    );
}

export default Welcome;
