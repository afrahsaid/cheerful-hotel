import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Error(){
    return(
        <Hero>
            <Banner title="404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
        
    )

}
