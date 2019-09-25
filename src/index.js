import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ApolloProvider } from "react-apollo-hooks"
import Client from "./Apollo/Clint"

ReactDOM.render(<ApolloProvider client={Client}><App /></ApolloProvider>, document.getElementById('root'));
