import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useState, useEffect } from 'react';


export default function Layout({ children }: any) {
    return (
        <>
        <Box>{children}</Box>
        </>
    )
}