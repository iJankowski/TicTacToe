import React, {Component} from 'react';

const cokolwiek = {
    cos: 1,
    sin: "2"
}

class ApiTest extends Component {

    checkApi = async () => {
        const response = await fetch('https://localhost:7122/WeatherForecast/postTest',{
            method: 'POST',
            body: JSON.stringify(cokolwiek),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        alert('test')
    }

    render() {
        return (
            <div>
                <button onClick={this.checkApi}>Try me!</button>
            </div>
        );
    }
}

export default ApiTest;