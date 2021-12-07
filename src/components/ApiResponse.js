import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const ApiResponse = function () {
  const [state, setState] = useState({ response: 'Not contacted', timestamp: 'Not contacted' });
  return (
    <div>
      <Button
        onClick={() => {
          console.log('Hitting API /api/v1/hello');
          axios.get('https://api.poc.datariah.com/api/v1/hello')
            .then((response) => {
              setState({
                response: response.data.message,
                timestamp: response.data.timestamp,
              });
            })
            .catch((error) => {
              console.log(error);
                setState({
                    response: "" + error,
                    timestamp: "Missing due to error",
                });
            })
            .then(() => {
              // always executed

            });
        }}
      >
        Hi ?
      </Button>
      <br />
      <br />
      <p>
        {' '}
        <b>Server Responded:</b>
        {' '}
        {state.response}
      </p>
      <p>
        {' '}
        <b>Timestamp:</b>
        {' '}
        {state.timestamp}
        {' '}
      </p>
    </div>
  );
};

export default ApiResponse;
