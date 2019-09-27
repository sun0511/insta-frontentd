import React from 'react';
import { gql } from "apollo-boost"
import {ThemeProvider} from "styled-components"
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from "./Router"
import { useQuery } from 'react-apollo-hooks';
import Footer from './Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QUERY = gql`{isLoggedIn @client}`

export default () =>{
    const { data:{isLoggedIn} } = useQuery(QUERY);

    return(
        <ThemeProvider theme={Theme}>
        <>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
        <Footer/>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
        </>
        </ThemeProvider>
    )
}
