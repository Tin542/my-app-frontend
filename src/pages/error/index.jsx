import React from "react";
import InDevelopmentPage from "./inDevelopmentPage";
import PageNotFound from "./pageNotFoundError";

const ErrorPage = (props) => {
    const {status} = props;
    if(status === 'indev'){
        return <InDevelopmentPage/>
    }else if (status === 'notfound'){
        return <PageNotFound/>
    }
    
}
export default ErrorPage;