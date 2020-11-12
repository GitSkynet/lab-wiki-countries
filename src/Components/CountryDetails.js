import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {

    // buscamos por id el project que coincide con el id que recibimos por parámetro. Es una función
    let getCountry = cca3 => countries.find(obj => obj.cca3 === cca3);
    
    // desestructuramos params de props.match
    const { params } = props.match;
    console.log('PARAMS', props.match)

    // const id = props.match.params.id

    // creamos una constante donde guardamos el resultado de invocar a getProject con el id que sacamos de this.props.match.params.id
    const foundCountry = getCountry(params.cca3)
    console.log('PARAMS CCA3', params.cca3)
        return (
            <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {foundCountry.borders.map((eachBorder) => {
                            return <li><Link key={eachBorder} to={`/${eachBorder}`}>{getCountry(eachBorder).name.common}</Link></li>
                         })
                        }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
  
}

export default CountryDetails;
