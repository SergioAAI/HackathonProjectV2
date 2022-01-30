// import { Theme } from '@twilio-paste/core/theme';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Theme.Provider theme="default">
//       <Component {...pageProps} />
//     </Theme.Provider>
//   );
// }

import { CustomizationProvider } from '@twilio-paste/core/customization';
function MyApp({ Component, pageProps }) {
  return (
    <CustomizationProvider
      baseTheme="Dark"
      theme={{
        backgroundColors: {
          colorBackgroundPrimary: 'rgb(80, 123, 30)',
          colorBackgroundPrimaryDarker: 'rgb(56, 86, 21)',
          colorBackgroundPrimaryLighter: 'rgb(154,199,232)',
          colorBackgroundPrimaryLightest: 'rgb(197, 223, 242)',
        },
      }}
    >
      <Component {...pageProps} />
    </CustomizationProvider>
  );
}

export default MyApp;
