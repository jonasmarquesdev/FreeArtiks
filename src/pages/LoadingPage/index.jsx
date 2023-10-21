/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";

const Container = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.isLoading ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LoadingPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255,251,243,1);

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  color: #191654;
`;

const SVG = styled.svg`
  height: 150px;
  width: 150px;
  stroke: white;
  fill-opacity: 0;
  stroke-width: 3px;
  stroke-dasharray: 4500;
  animation: ${keyframes`
    0% {
      stroke-dashoffset: 4500;
    }
    100% {
      stroke-dashoffset: 0;
    }
  `} 8s ease;
`;

const NameContainer = styled.div`
  height: 30px;
  overflow: hidden;
`;

const LogoName = styled.div`
  color: #ff8927;
  font-size: 20px;
  letter-spacing: 12px;
  text-transform: uppercase;
  margin-left: 20px;
  font-weight: bolder;
`;

const Loading = ({ isLoading }) => {
  const loadingPageRef = useRef(null);
  const logoNameRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      gsap.fromTo(
        loadingPageRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          display: "none",
          duration: 1.5,
          delay: 3.5,
        }
      );

      gsap.fromTo(
        logoNameRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.5,
        }
      );
    }
  }, [isLoading]);

  return (
    <Container isLoading={isLoading}>
      <LoadingPage ref={loadingPageRef}>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 512 512"
          viewBox="0 0 512 512"
          id="book"
        >
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="M52.655 360.043c37.609 3.443 76.534 13.048 115.294 28.813V429.4L9 401.127V64.931l43.655 7.758V360.043zM255.904 436.516v8.526l-31.946-5.684v-23.275c10.714 6.078 21.345 12.643 31.883 19.686v.83C255.862 436.568 255.883 436.547 255.904 436.516z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="M257.099 117.709v318.893l-.598-.105-.344-.06-.179-.03-.075-.015-.06-.015V119.205c.015-.03.045-.06.06-.09v-1.616l.09.015.165.03.344.06.404.075L257.099 117.709zM83.761 326.553c24.644-.529 54.349 7.883 84.189 25.235v37.069c-38.76-15.765-77.686-25.37-115.294-28.813V41.159c10.279.933 20.661 2.344 31.105 4.211C83.761 45.37 83.761 326.553 83.761 326.553zM255.841 434.701v1.068c-10.538-7.043-21.169-13.608-31.883-19.686v-20.194C235.17 407.391 245.905 420.335 255.841 434.701z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="
			M257.099,117.709v318.893c-0.09-0.06-0.165-0.119-0.254-0.165c-0.119-0.09-0.224-0.165-0.344-0.24
			c-0.09-0.06-0.179-0.119-0.27-0.165c-0.105-0.09-0.224-0.165-0.329-0.224c-0.015-0.015-0.045-0.03-0.06-0.045V119.205
			c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c-0.195-0.3-0.389-0.598-0.613-0.883c0.21,0.119,0.403,0.254,0.613,0.403
			c0.194,0.119,0.403,0.254,0.598,0.389c0.119,0.075,0.224,0.149,0.344,0.24c0.03,0.015,0.075,0.045,0.105,0.06
			C256.995,117.65,257.055,117.68,257.099,117.709z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="
			M255.904,117.392v1.722c-0.021,0.031-0.041,0.062-0.062,0.093V434.7c-9.936-14.365-20.671-27.309-31.883-38.812
			c-17.871-18.338-36.966-33.045-56.008-44.101c-29.84-17.352-59.545-25.764-84.189-25.235V9.151
			c47.949-1.006,115.076,31.811,165.1,98.44c2.178,2.904,4.335,5.881,6.431,8.92C255.509,116.801,255.707,117.092,255.904,117.392z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="
			M257.16,119.205v317.396c-0.015-0.03-0.045-0.06-0.06-0.09c-0.03-0.03-0.045-0.075-0.075-0.105
			c-0.09-0.119-0.165-0.254-0.254-0.374c-0.09-0.135-0.179-0.254-0.27-0.374c-0.195-0.299-0.389-0.583-0.598-0.868
			c0-0.03-0.03-0.06-0.06-0.09V119.205c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c0.045,0.045,0.075,0.075,0.09,0.119
			c0.03,0.03,0.045,0.06,0.06,0.09c0.03,0.03,0.045,0.045,0.045,0.075c0.149,0.195,0.284,0.389,0.403,0.584
			c0.21,0.284,0.403,0.568,0.598,0.853C257.114,119.145,257.144,119.175,257.16,119.205z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="
			M504,64.927V401.13l-246.901,43.91v-8.528c0.015,0.03,0.045,0.06,0.06,0.09v-0.838c66.397-44.389,136.848-69.643,203.185-75.717
			V72.691L504,64.927z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="
			M257.16,119.205v317.172l-0.06,0.015l-0.075,0.015l-0.179,0.03l-0.344,0.06l-0.598,0.105V117.709l0.194-0.03l0.403-0.075
			l0.344-0.06l0.165-0.03l0.09-0.015v1.616C257.114,119.145,257.144,119.175,257.16,119.205z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="
			M460.344,41.154v318.893c-66.337,6.074-136.788,31.328-203.185,75.717v-1.062c50.598-73.174,121.857-109.215,172.081-108.153
			V45.373C439.683,43.503,450.066,42.096,460.344,41.154z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="
			M257.099,119.115c0.015,0.03,0.045,0.06,0.06,0.09v316.558c-0.015,0.015-0.045,0.03-0.06,0.045
			c-0.105,0.06-0.224,0.135-0.329,0.224c-0.09,0.045-0.179,0.105-0.27,0.165c-0.119,0.075-0.224,0.149-0.344,0.24
			c-0.09,0.045-0.165,0.105-0.254,0.165V117.709c0.045-0.03,0.105-0.06,0.149-0.105c0.03-0.015,0.075-0.045,0.105-0.06
			c0.119-0.09,0.224-0.165,0.344-0.24c0.195-0.135,0.403-0.27,0.598-0.389c0.21-0.149,0.404-0.284,0.613-0.403
			c-0.224,0.284-0.419,0.583-0.613,0.883v1.72H257.099z"
          ></path>
          <path
            fill="none"
            stroke="#ff8927"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="10"
            d="M429.24 9.152v317.396c-50.224-1.062-121.483 34.978-172.081 108.153V119.205c-.015-.03-.045-.06-.06-.09v-1.721c.195-.3.389-.598.613-.883 2.11-3.037 4.249-6.015 6.448-8.917C314.175 40.96 381.291 8.15 429.24 9.152zM223.958 395.889v107.982l-28.004-28.004-28.004 28.004V351.787C186.993 362.844 206.087 377.551 223.958 395.889z"
          ></path>
        </SVG>
        <NameContainer>
          <LogoName ref={logoNameRef}>FreeArtiks</LogoName>
        </NameContainer>
      </LoadingPage>
    </Container>
  );
};

export default Loading;
