import React from "react";
import type { FC } from "react";
import AboutHero from "../about/AboutHero";
import Team from "../about/Team";
import Timeline from "../about/Timeline";

type Props = {
    children?: React.ReactNode
};

const AboutPanel: FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col p-3 space-between'>
            {children}
        </div>
    );
};

export default Object.assign(
    AboutPanel,
    {
        AboutHero,
        Team,
        Timeline
    }
)