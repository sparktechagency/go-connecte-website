import Results from "@/components/Results";
import React, { Suspense } from "react";

const ResultsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Results />
    </Suspense>
  );
};

export default ResultsPage;
