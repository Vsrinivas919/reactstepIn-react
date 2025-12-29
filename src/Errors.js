import { useRouteError } from "react-router";

const Errors = () => {
    const Errs = useRouteError();
    return (
        <div>
            <h1>Pls contact Admin for Error handling</h1>
            <h1>{Errs.status} - {Errs.statusText}</h1>
        </div>
    )
}

export default Errors;