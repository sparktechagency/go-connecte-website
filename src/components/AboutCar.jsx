import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutCar({ carDetails }) {
  console.log("details", carDetails);
  return (
    <div className="mt-5">
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="sm:text-lg font-semibold">Overview</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-xs sm:text-sm">
            Take your Las Vegas visit to the next level with a ride on The High
            Roller at The LINQ. As the tallest observation wheel in the world at
            550 feet, it gives you amazing views of the Las Vegas Strip and the
            surrounding desert. Step into one of the roomy cabins and enjoy a
            ride full of stunning sights, with a new view around every turn.
          </p>
          <br />
          <p className="text-xs sm:text-sm">
            Whether it’s your first time in Las Vegas or you’ve been here
            before, The High Roller offers a one-of-a-kind experience. The
            cabins are climate-controlled and come with audio guides, so you can
            relax while learning about the city’s history and famous landmarks
            from high above.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <p className="sm:text-lg font-semibold">Car Features</p>
        </AccordionSummary>
        <AccordionDetails>
          {carDetails.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#737373] flex-wrap"
            >
              <RxDotFilled />
              <p>{feature}</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <p className="sm:text-lg font-semibold">Included in the price</p>
        </AccordionSummary>
        <AccordionDetails>
          {carDetails.includedInPrice.map((include, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#737373] flex-wrap"
            >
              <FaCheckCircle className="text-[#34D674]" />
              <p>{include}</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
