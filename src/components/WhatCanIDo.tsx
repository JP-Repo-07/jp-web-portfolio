import { BackendCard } from "./BackendCard"
import { FrontendCard } from "./FrontEndCard"
import { FullstackCard } from "./FullstackCard"

export const WhatCanIDo = () => {
    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FrontendCard />
            <BackendCard />
            <FullstackCard />
        </div>

    )
}