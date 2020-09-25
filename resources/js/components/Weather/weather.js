import axios from 'axios'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {city: ''};
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this);
    }

    handleFieldChange(event) {
        this.setState({city: event.target.value});
    }

    handleGetWeather(event) {
        event.preventDefault();

        const city = this.state.city;

        console.log(this.state.city);
        console.log(city);

        axios.get(`/api/weather/getWeatherFor${city}`)
            .then(response => {
                console.log(response);
                // redirect to the homepage
                //history.push('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Get Weather for today</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleGetWeather}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>City</label>
                                        <input
                                            id='city'
                                            type='text'
                                            className={`form-control`}
                                            name='city'
                                            value={this.state.city}
                                            onChange={this.handleFieldChange}
                                        />
                                    </div>
                                    <button className='btn btn-primary'>Get weather for selected city</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather
