import React, { ReactChild } from 'react';

interface IButton {
    link: string;
    className: string;
    children: ReactChild;
}

const Button = ({ link, className, children }: IButton) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={className}>
            {children}
        </a>
    );
};

export default Button;
