import React, { Suspense } from "react";
import BookNow from "@/components/BookNow";

const BookNowPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookNow />
    </Suspense>
  );
};

export default BookNowPage;
