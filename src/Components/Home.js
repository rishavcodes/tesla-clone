// import { Container } from '@material-ui/core';
import React from 'react';
import styled from "styled-components"
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order ONline for Touhcless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            RightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order ONline for Touhcless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            RightBtnText="Existing Inventory"
        />
        <Section 
            title="Model 3"
            description="Order ONline for Touhcless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            RightBtnText="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order ONline for Touhcless Delivery"
            backgroundImg="model-X.jpg"
            leftBtnText="Custom order"
            RightBtnText="Existing Inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back gurantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            RightBtnText="Learn more"
        />
        <Section 
            title="Solar for new roofs"
            description="Solar roofs cost less than a new Roof plus solar panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            RightBtnText="Learn more"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`