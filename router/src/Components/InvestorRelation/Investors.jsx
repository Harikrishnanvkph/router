import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import investor from "./investor.json"


function Investors() {
    const { id } = useParams();

    return <>
        {
            investor?.map((it,index)=>{
                if (String(id).toLowerCase() === it.name.toLowerCase()){
                    return <CompanyCard key={index} it={it} />
                }
            })
        }
    </>
}

function CompanyCard(props){
    return (
        <div className="company-card">
            <p>{props.it.name}</p>
            <p>Networth {props.it.netWorth}</p>
            <p>{props.it.description}</p>
            <p>Headquarters at {props.it.headquarters}</p>
        </div>
    )
}

export default Investors;