import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = (props) => {
        return (
        <div className="container">
            <div className="row" style={{width: '500px'}}>
                <div className="col-5" style={{maxheight: '90vh', width: '500px', overflow: 'scroll'}}>
                    <div className="list-group">
                    {countries.map((eachCountry)=>{
                        return <li key={eachCountry.cca3} className="list-group-item list-group-item-action"><Link to={`/${eachCountry.cca3}`}>{eachCountry.flag} {eachCountry.name.common}</Link></li>
                    })}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default CountriesList;


