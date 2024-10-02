'use client';

import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Header from '@web/components/Header';
import SideBar from '@web/components/SideBar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); // Nebo z cookies

    if (!token) {
      router.push('/login'); // Přesměrování na login
    }

    // Můžeš také přidat validaci tokenu
  }, []);
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SideBar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
