type SlicedStringProps = {
    text: string,
}

function SlicedString(prop: SlicedStringProps) {
    const split = prop.text.split("\\n");
    return <span>
        {split.map((item, index) => {
            if (index === split.length - 1) 
                return item
            else 
                return (<>{item}<br/></>)
        })}
    </span>
}

export default SlicedString;