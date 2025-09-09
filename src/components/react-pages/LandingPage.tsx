import React from "react";
import type { FC } from "react";
import Hero from "../landing/Hero";
import Services from "../landing/Services";
import SoftwareLaunch from "../landing/SoftwareLaunch";

type Props = {
    children?: React.ReactNode
};

const IndexPanel: FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col p-3 space-between'>
            {children}
        </div>
    );
};

export default Object.assign(
    IndexPanel,
    {
        Hero,
        Services,
        SoftwareLaunch
    }
)