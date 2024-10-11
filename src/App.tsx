import { AllRoutes } from "app/router";
import { GlobalStyles } from "app/styles";
import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import { Providers } from "shared/context";

export const App = () => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        provider: () => new Map(),
      }}
    >
      <HashRouter>
        <Toaster position="top-center" reverseOrder={false} />

        <Suspense fallback={<div>loading</div>}>
          <Providers>
            <AllRoutes />
          </Providers>
        </Suspense>
        <GlobalStyles />
      </HashRouter>
    </SWRConfig>
  );
};
