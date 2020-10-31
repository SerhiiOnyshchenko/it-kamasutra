import React from "react";
import Preloader from "../componets/common/preloader/Preloader";

export const withSuspense = (Container) => {
  return (props) => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Container {...props} />
      </React.Suspense>
    );
  };
};
