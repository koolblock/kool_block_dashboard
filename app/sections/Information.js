import React from 'react'
import { Box, Typography } from "@material-ui/core";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function Information() {
    return (
      <Box p={2} mx={5}>
        <Typography component="h4" variant="h4" align="center">
          Contact us now: <br /> Get a quick “Path-Safe” assessment of your
          facility and operations..
        </Typography>
        <Box mt={3} />
        <Typography component="subtitle1" variant="subtitle1" align="center">
          Be a Healthy Workspace: Start a program to let employees know that you
          are testing for pathogens and managing risk on an ongoing basis;
        </Typography>
        <br />
        <Typography component="subtitle1" variant="subtitle1" align="center">
          Encourage employees back to workspaces. Actual regular office testing
          allows for management ands improvement of health and safety over time
          .
        </Typography>
        <br />
        <Typography component="subtitle1" variant="subtitle1" align="center">
          We provide a “path-safe” plan for individual locations, multi-location
          enterprises and large industrial enterprises.
        </Typography>
        <br />
        <Typography component="subtitle1" variant="subtitle1" align="center">
          Large Industrial facilities: Now is time to automate pathogenic safety
          procedures and testing into your company to maximise health safety and
          have rapid early warning of any problems.
        </Typography>
        <br />
        <Typography component="subtitle1" variant="subtitle1" align="center">
          Testing and training cultivate long term resilience and benefits, an
          important part of any company’s Sustainability or ESG Plan or EHS
          Plan. We can integrate path-safe into your company.
        </Typography>
        <Typography component="subtitle1" variant="subtitle1" align="center">
          Lear how to make medical grade, safe pathogen disinfectants and
          materials (++) to fight COVID and other health problems using just
          water, salt and electricity
        </Typography>
        <Typography component="subtitle1" variant="subtitle1" align="center">
          Build “path-safe” solutions into the long term HVAC systems of the
          facility
        </Typography>
        <Box
          mt={4}
          style={{
            display: "flex",
            justifyContent: "center",
            background: "black",
          }}
        >
          <Fade bottom>
            <Image
              src={"/koolblock.png"}
              alt="logo"
              width={500}
              height={500}
              objectFit="contain"
            />
          </Fade>
        </Box>
      </Box>
    );
}