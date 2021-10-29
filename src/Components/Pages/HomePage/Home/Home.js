import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Services from '../Services/Services';
import Banner from './../Banner/Banner';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Main;