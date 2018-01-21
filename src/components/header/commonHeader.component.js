import React from 'react';

export function CommonHeader(props) {
    return (
        <h2 className="w-50 m-tb-4 titleArea text-center">
            {props.title}
        </h2>
    );
}

export default CommonHeader;