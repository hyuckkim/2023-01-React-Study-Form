import React from "react";

type SlicedStringProps = {
    text: string,
}

function SlicedString(prop: SlicedStringProps) {
    const split = prop.text.split("\\n");
    return <span>
        {split.map((item, index) => {
            if (index === split.length - 1) 
                return <React.Fragment key={index}>{item}</React.Fragment>
            else 
                return <React.Fragment key={index}>{item}<br/></React.Fragment>
        })}
    </span>
}

export default SlicedString;