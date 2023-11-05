'use client'

import {SessionProvider} from 'next-auth/react';

interface OwnProps {
    children: React.ReactNode;
}

export default function Providers({children}: OwnProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}