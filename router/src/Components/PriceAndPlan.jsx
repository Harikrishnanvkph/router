import React from 'react';

function PriceAndPlan() {
    return (
        <div className="priceandplan">
            <div className="cards">
                <p>Non-Commercial</p>
                <p>Anyone can use under non-commercial license agreement</p>
                <p>Free</p>
            </div>
            <div className="cards">
                <p>Commercial</p>
                <p>Individuals can use this plan to use Advanced tools</p>
                <p>$18 per month</p>
            </div>
            <div className="cards">
                <p>Enterprise</p>
                <p>Companies can use this plan for their employees with all available tools</p>
                <p>$35 per month</p>
            </div>
        </div>
    );
}

export default PriceAndPlan;