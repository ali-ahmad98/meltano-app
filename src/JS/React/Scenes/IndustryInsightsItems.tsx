import { Grid, makeStyles, StandardProps, Theme } from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";
import {
    AppSingleInsight,
    SingleInsight,
} from "../Components/AppSingleInsight";
import insight1 from "Images/Insights/insight-1.jpg";
import insight2 from "Images/Insights/insight-2.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}));

export type IndustryInsightsItemsClassKey = StyleClassKey<typeof useStyles>;

export interface IndustryInsightsItemsProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        IndustryInsightsItemsClassKey
    > {}

const insights: SingleInsight[] = [
    {
        heading: `From DIY to DI "WOW!" How Hackerone Transformed DataOps With Meltano`,
        description: `Do a Meltano POC!  “We discovered, ‘Hey, we don’t have to write all of this stuff on our own!’ We all know that the best code is code you don’t have to write yourself. It was such a great experience! Replace one of your existing pipelines with Meltano and see for yourself that it works.”`,
        imgSrc: insight1,
    },
    {
        heading: `Meltano User Story: The Gitlab and Meltano Origin Journey`,
        description: `Our data pipeline is essentially a self-driving car. We have a data pipeline that *does not fail*. We chose Meltano for the same reason people choose a Mac, because we know it will ‘just work.’ Meltano has saved us a tremendous amount of time.”`,
        imgSrc: insight2,
    },
];

export const IndustryInsightsItems = (props: IndustryInsightsItemsProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    return (
        <div className={clsx(className, classes.root)} {...rest}>
            <Grid container spacing={3} alignItems="center">
                {insights.map((d) => (
                    <Grid item sm={6} xs={12}>
                        <AppSingleInsight insight={d} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
