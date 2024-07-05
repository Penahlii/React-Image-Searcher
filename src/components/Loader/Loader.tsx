import React from "react";
import { LoaderContainer } from "./Loader.styles";
import { Oval } from "react-loader-spinner";

const Loader: React.FC = () => (
  <LoaderContainer>
    <Oval color="#00BFFF" height={80} width={80} />
  </LoaderContainer>
);

export default Loader;
