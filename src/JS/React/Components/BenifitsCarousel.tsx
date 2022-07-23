import {
    makeStyles,
    StandardProps,
    Theme,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";
import { Slide } from "react-slideshow-image";
import { AppCustomArrow } from "./AppCustomArrow";
import { AppSingleBenifit, SingleBenifit } from "./AppSingleBenifit";
import community from "Images/Benifits/Community.svg";
import collaboration from "Images/Benifits/collaboration-icon.svg";
import increasedVisibility from "Images/Benifits/increased-visibility-icon.svg";
import integrateData from "Images/Benifits/integrate-data-icon.svg";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}));

export type BenifitsCarouselClassKey = StyleClassKey<typeof useStyles>;

export interface BenifitsCarouselProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        BenifitsCarouselClassKey
    > {}

const benifits: SingleBenifit[] = [
    {
        imgSrc: community,
        heading: "Collaborative",
        description:
            "Bring your whole team together in one project that defines every aspect of your data platform. People across disciplines can easily see what others are up to and suggest changes in areas they otherwise would never have seen or would have been afraid to touch, knowing that checks are in place to prevent accidental breakage.",
    },
    {
        imgSrc: increasedVisibility,
        heading: "Customizable",
        description:
            "A generic plugin architecture and abstractions around installation, configuration, integration, and deployment allow you to build your ideal data platform out of your chosen data tools and technologies while offering a streamlined, cohesive experience.",
    },
    {
        imgSrc: integrateData,
        heading: "Stable and Reliable",
        description:
            "Iterate on your data platform with confidence by leveraging software development best practices. Version control your pipelines, configurations, and assets in Git. Learn whether a change in one tool broke another before going live with automatic end-to-end testing in CI. Manually verify the impact of any changes in isolated staging and development environments.",
    },
    {
        imgSrc: collaboration,
        heading: "Scalable",
        description:
            "As platforms and organizations grow, the requirements for data tools change and your data platform should be able to evolve and scale with ease. Meltano plugins can easily be added or replaced so that you can find and use the right tool for the job and unlock new capabilities without ever being locked into past decisions.",
    },
];

export const BenifitsCarousel = (props: BenifitsCarouselProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const slideCount = isDesktop ? 2 : 1;

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Slide
                easing="ease"
                slidesToShow={slideCount}
                slidesToScroll={1}
                infinite={false}
                autoplay={false}
                transitionDuration={300}
                prevArrow={<AppCustomArrow variant="left" />}
                nextArrow={<AppCustomArrow variant="right" />}>
                {benifits.map((d) => (
                    <AppSingleBenifit benifit={d} />
                ))}
            </Slide>
        </div>
    );
};
