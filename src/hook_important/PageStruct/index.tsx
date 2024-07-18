

// everything can be hookable
import React, { useState, useEffect } from 'react';
import { BigPageContaxt, BigPageProvider, useBigPage } from './context';

// page - page context - layout - component

// page
function BigPage() {
    return (
        <BigPageProvider>
            <Layout />
            <Layout />
            <Layout />
            <Layout />
            <Layout />
        </BigPageProvider>
    )
}

function Layout() {
    const { pageState } = useBigPage();
    return (
        <div>
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            {pageState ? <Component /> : null}
        </div>
    )
}

function Component() {
    const { pageState } = useBigPage();
    return (
        <div>
            <h1>Component</h1>
            {pageState.title ? <h1>{pageState.title}</h1> : null}
        </div>
    )
}