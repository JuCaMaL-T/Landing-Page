import React from "react";
import type { FC } from "react";
import ServicesHero from "../services/ServicesHero";
import ServicesGrid from "../services/ServicesGrid";
import WorkProcess from "../services/WorkProcess";

type Props = {
    children?: React.ReactNode
};

const ServicesPanel: FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col p-3 space-between'>
            {children}
        </div>
    );
};

export default Object.assign(
    ServicesPanel,
    {
        ServicesHero,
        ServicesGrid,
        WorkProcess,
    }
)