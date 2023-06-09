import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Accessories"
        description="We got the coolest and wide range of collections"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
