'use client';

import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';

import ApolloClient from '@web/libs/apollo';
import { userStore } from '@web/store/user';

interface ProvidersProps {
  children: ReactNode;
}

// Případné rozšíření barevného schématu
const theme = extendTheme({
  // styles: {
  //   global: {
  //     'html, body': {
  //       color: 'gray.600',
  //       lineHeight: 'tall',
  //     },
  //     a: {
  //       color: 'teal.500',
  //     },
  //   },
  // },
});

export function Providers({ children }: ProvidersProps) {
  const userInit = userStore((state) => state.init);
  useEffect(() => {
    console.log('init');
    userInit();
  }, []);

  return (
    <ApolloProvider client={ApolloClient}>
      <CacheProvider>
        <ChakraProvider theme={theme} cssVarsRoot="body">
          {children}
        </ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}
