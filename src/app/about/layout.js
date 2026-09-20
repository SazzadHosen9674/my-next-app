import React from 'react';

const AboutLayout = ({children}) => {
    return (
        <div>
            <section>
                <h1>this is layout about</h1>
            </section>
            {children}
        </div>
    );
};

export default AboutLayout;