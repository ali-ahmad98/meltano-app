import {
    makeStyles,
    StandardProps,
    Theme,
    Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/React/Typescript";
import React, { useRef, useState } from "react";
import {
    AppSingleTestimonials,
    SingleTestimonial,
} from "../Components/AppSingleTestimonial";
import hackerOneLogo from "Images/Testimonials/hackerone-logo.png";
import lightdashLogo from "Images/Testimonials/lightdash-logo.png";
import simetricLogo from "Images/Testimonials/simetric-1.jpeg";
import { AppCustomArrow } from "../Components/AppCustomArrow";
import { Slide, SlideshowRef } from "react-slideshow-image";
import { AppButton } from "../Components/AppButton";

const useStyles = makeStyles((theme: Theme) => ({
    root: { display: "flex", justifyContent: "center" },
    responsiveWidth: {
        width: "80%",
        maxWidth: "1440px",

        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    },
    testimonialsWrapper: {
        marginTop: theme.spacing(17),
    },
    title: {
        color: theme.palette.primary.dark,
        textAlign: "center",
        fontWeight: "bold",
    },
    testimonialsContainer: {
        marginTop: theme.spacing(10),
        padding: theme.spacing(6),
        position: "relative",
    },
    greyBorder: {
        position: "absolute",
        border: `4px solid ${theme.palette.grey[700]}`,
        borderRadius: "0px 40px",
        height: "100%",
        width: "80%",
        right: 0,
        top: 0,

        [theme.breakpoints.down("sm")]: {
            border: "none",
        },
    },
    arrowContainer: {
        display: "flex",
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 30,
        padding: theme.spacing(1),
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(5),
    },
}));

export type TestimonialsClassKey = StyleClassKey<typeof useStyles>;

export interface TestimonialsProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        TestimonialsClassKey
    > {}

const testimonials: SingleTestimonial[] = [
    {
        title1: "Meltano has",
        redTitle: "Improved Our Cycle Time Greatly",
        title2: "By Reducing The Time To Develop And Deploy.",
        clientName: "Maarten van Gijssel",
        designation: "Senior Software Engineer at HackerOne",
        logo: hackerOneLogo,
    },
    {
        title1: "Meltano",
        redTitle: "Rocks",
        clientName: "Oliver Laslett",
        designation: "Co Founder and CTO at Lightdash",
        logo: lightdashLogo,
    },
    {
        title1: "I've Started Playing Around With Meltano And",
        redTitle: "It Is Just Incredible!",
        clientName: "Jacob Matson",
        designation: "VP of Finance & Operations at Simetric",
        logo: simetricLogo,
    },
];

export const Testimonials = (props: TestimonialsProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    const [disabledBtn, setDisableBtn] = useState<{
        next: boolean;
        back: boolean;
    }>({
        next: false,
        back: true,
    });

    const slideRef = useRef<SlideshowRef>(null);

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <div
                className={clsx(
                    classes.responsiveWidth,
                    classes.testimonialsWrapper,
                )}>
                <Typography variant="h2" className={classes.title}>
                    Meltano is Trusted by Thousands
                </Typography>
                <div className={classes.testimonialsContainer}>
                    <div className={classes.greyBorder}>
                        <div className={classes.arrowContainer}>
                            <AppCustomArrow
                                disabled={disabledBtn.back}
                                style={{
                                    marginRight: "20px",
                                }}
                                onClick={() => slideRef.current.goBack()}
                                variant="left"
                            />
                            <AppCustomArrow
                                disabled={disabledBtn.next}
                                onClick={() => slideRef.current.goNext()}
                                variant="right"
                            />
                        </div>
                    </div>
                    <Slide
                        ref={slideRef}
                        easing="ease"
                        slidesToShow={1}
                        slidesToScroll={1}
                        infinite={false}
                        arrows={false}
                        autoplay={false}
                        onChange={(from, to) => {
                            if (from < to && to === testimonials.length - 1) {
                                setDisableBtn({
                                    ...disabledBtn,
                                    next: true,
                                });
                            } else if (from > to && to === 0) {
                                setDisableBtn({
                                    ...disabledBtn,
                                    back: true,
                                });
                            } else {
                                setDisableBtn({
                                    next: false,
                                    back: false,
                                });
                            }
                        }}
                        transitionDuration={300}>
                        {testimonials.map((d) => (
                            <AppSingleTestimonials testimonial={d} />
                        ))}
                    </Slide>
                </div>

                <div className={classes.btnContainer}>
                    <AppButton buttonVariant="red" rounded>
                        Start Using Meltano
                    </AppButton>
                </div>
            </div>
        </div>
    );
};
