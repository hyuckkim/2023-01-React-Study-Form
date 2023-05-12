type FormPageProps = {
    children?: JSX.Element[] | JSX.Element,
    visible?: boolean,
}

function FormPage(prop: FormPageProps) {
    return <>{prop.visible == undefined != prop.visible && prop.children}</>
}

export default FormPage;