import React, { useState } from "react";
import { Fade } from "@mui/material";

export const Report = () => {
  return (
    <div>
      <Fade in={true} timeout={1000}>
        <h1 className="p-2  text-gray-dark text-center justify-center font-bold text-3xl mt-16">
          Report
        </h1>
      </Fade>
    </div>
  );
};
