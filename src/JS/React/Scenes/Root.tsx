import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleDown,
    faArrowRightLong,
    faBars,
    faXmark,
    faChevronDown,
    faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faSlack,
    faTwitter,
    faLinkedin,
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Layout } from "./Layout";
import { HomeTop } from "./HomeTop";
import { Benifits } from "./Benifits";
import { Features } from "./Features";
import { IndustryInsights } from "./IndustryInsights";
import { Testimonials } from "./Testimonials";
import { LatestTrends } from "./LatestTrends";
import { Footer } from "./Footer";

library.add(
    faAngleDown,
    faArrowLeftLong,
    faArrowRightLong,
    faBars,
    faXmark,
    faChevronDown,
    faGithub,
    faSlack,
    faTwitter,
    faLinkedin,
    faFacebook,
    faInstagram,
    faYoutube,
);

export const Root = () => {
    return (
        <Layout>
            <HomeTop />
            <Benifits />
            <Features />
            <IndustryInsights />
            <Testimonials />
            <LatestTrends />
            <Footer />
        </Layout>
    );
};
