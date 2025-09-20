import React from "react";
import type { FC } from "react";
import ContactForm from "../contact/ContactForm";
import GoogleMap from "../contact/GoogleMap";
import ContactFAQ from "../contact/ContactFAQ";

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
        ContactForm,
        GoogleMap,
        ContactFAQ
    }
)