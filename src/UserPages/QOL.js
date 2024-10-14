import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import Brain from "Images/brain.png";
import Dollar from "Images/dollar.png";
import Health from "Images/health.png";
import Moment from "moment";
import HDI2 from "Images/HDI3.png";
import Fade from "@mui/material/Fade";

const HDI_groups_2 = () => {
  return (
    <div
      className="bg-gray-dark bg-opacity-50 rounded-md mx-4"
      style={{ position: "absolute", top: "1600px", marginBottom: "10pt" }}
    >
      <div className="p-2  text-gray-light text-center font-bold text-xl">
        Why the American Human Development Index?
      </div>
      <div className="p-2 shadow-md text-gray-light ">
        <p className="text-center my-auto grid grid-flow-col">
          Dashboards and indexes that seek to capture and quantify concepts of
          well-being, mobility, inclusion, equity, prosperity, security, and
          sustainability are thick on the ground. What does the American Human
          Development Index add to New Jersey’s heavily populated data
          landscape? Several features make the HDI particularly useful for
          understanding and addressing inequities in Newark. • HDI scores are
          available by neighborhood and demographic group. Indicators and scores
          at the state or county level are useful for many purposes, but they
          fail to capture the often-stark differences between men and women,
          racial and ethnic groups, and cities and neighborhoods. Looking only
          at Essex County data, for example, might lead us to assume that the
          countywide figure of 37.4 percent of adults age 25 and older with at
          least a bachelor’s degree applies to Newark as well, when in fact the
          rate in Newark is less than half that, 16.7 percent; adding gender and
          race/ ethnicity, we see that 55.4 percent of Asian women in Newark
          hold bachelor’s degrees—much higher than the county figure—compared to
          9.3 percent of Newark’s Latino men. • The HDI directly measures
          inequality in a way that is easy to grasp and noncontroversial. The
          HDI synthesizes a complex reality into a single number that allows for
          easy comparisons between groups. The wide variation in HDI scores
          along its 10-point scale makes plain the extent of fundamental
          disparities among Newark residents. Many organizations today are
          seeking to apply an equity lens to their work; the HDI is such a lens.
          The components that make up the index—living a long and healthy life,
          getting a good education, and earning a decent wage—are not
          controversial aims. They are universally valued, intuitively
          understood measures that, even in this age of extreme polarization,
          are widely accepted, and how these factors translate into human
          flourishing—or languishing— is readily understood. • It supplements
          money metrics with human metrics. An overreliance on economic metrics
          such as GDP can provide misleading information about the everyday
          conditions of ordinary people’s lives and the opportunities available
          to them. For example, using money as the sole gauge of well-being in
          Newark would lead us to conclude that white men, who earn the most
          ($50,600), have the best life outcomes. While that may be true
          economically, it is not true in terms of health. Latina women, who
          earn less than half what white men do, can expect to live 84.0 years,
          4.5 more than white men. Similarly, Asian Newark residents, who earn
          far less than white men, live 11.9 years longer. Nearly a dozen more
          years to walk the earth is an invaluable outcome that money metrics
          miss. • It rests on a robust framework developed by world-renowned
          scholars. The American HDI rests on a robust conceptual framework—the
          capabilities approach of Nobel laureate Amartya Sen—and is based on a
          road-tested international tool that is the global gold standard for
          measuring human well-being. Leading scholars from the social sciences,
          mathematics and statistics, and philosophy have engaged with and built
          upon human development concepts for decades, yielding a rich body of
          work in support of this powerful idea: the true measure of progress is
          the degree to which all people are able to imagine and attain the kind
          of life they value.8 The rich engagement of scholars from a range of
          disciplines from all corners of the earth in creating, exploring,
          researching, and building upon the HDI sets it apart from other
          well-being exercises. • The HDI connects different sectors to show
          problems, and their solutions, from a people-centered perspective. The
          cross-sectoral American HDI broadens the analysis of the interlocking
          factors that create or obstruct opportunities and fuel both advantage
          and disadvantage. It captures the key interrelated conditions that
          enable people to realize their full potential—or that hold them back.
        </p>
      </div>
    </div>
  );
};

const HDI_Groups = () => {
  return (
    <div
      className="bg-gray-dark bg-opacity-50 rounded-md mx-4"
      style={{ position: "absolute", top: "1286px", marginBottom: "10pt" }}
    >
      <div className="p-2  text-gray-light text-center font-bold text-xl">
        Why Don’t All Groups and Places Have an HDI Score?
      </div>
      <div className="p-2 shadow-md text-gray-light ">
        <p className="text-center my-auto grid grid-flow-col">
          You will notice that on some maps, specific areas appear in gray, and
          that in some tables, values for certain groups or locales are missing.
          Gray areas and missing values indicate that the data for that place or
          demographic group are not statistically reliable. Most of the cases of
          unreliability in this report stem from having a sample size that is
          too small to allow for statistically reliable calculations. “Rolling
          up” five years worth of data (2018–2022) increases reliability; using
          just the most recent year improves timeliness but makes it impossible
          to calculate rates for small populations. It’s a trade-off, and we
          generally err on the side of granularity. Ideally, we would be able to
          provide scores not just for large demographic groups like Black and
          white Newark residents, but also for smaller ones, such as the
          long-settled Portuguese community in the Ironbound or the Puerto Rican
          community historically centered in Lower Broadway. Unfortunately, we
          cannot provide statistically stable scores for populations that fall
          below a certain population threshold. Combining several years of data
          gets us to this threshold for some groups, but not all. Another
          limitation in our ability to provide everyone an HDI score stems from
          the way in which the data we use for the index are collected. We would
          like, for example, to calculate scores for LGBTQ residents, but are
          unable to do so because the American Community Survey does not provide
          a way for people to report information about their sexual and gender
          identities beyond marking the box for male or female. For similar
          reasons, calculating scores for specific populations that face
          disproportionate challenges, such as young adults aging out of the
          foster care system, people who are homeless, or people who have been
          incarcerated, is also impossible. We try to address these gaps by
          bringing in other data sources but understand that this is not ideal.
          In short, we can only calculate scores for groups that are given the
          chance to self-identify on the American Community Survey and that are
          sufficiently large as to allow reliable calculations. Right now, the
          survey only asks respondents to report their gender (just male or
          female), their race, if they are or are not Hispanic or Latino, if
          they are US or foreign born, their country of origin if they are
          foreign born, and the language they speak at home.
        </p>
      </div>
    </div>
  );
};

const HDI_detail = () => {
  return (
    <div
      className="bg-gray-dark bg-opacity-50 rounded-md mx-4"
      style={{ position: "absolute", top: "1063px", marginBottom: "10pt" }}
    >
      <div className="p-2 shadow-md text-gray-light ">
        <p className="text-center my-auto grid grid-flow-col">
          The three components are weighted equally on the premise that each is
          equally important for human well-being. In broad terms, the first
          steps for calculating the index are to compile or calculate the four
          indicators that constitute it: life expectancy, school enrollment,
          educational degree attainment, and median personal earnings. Because
          these indicators use different scales (years, dollars, percentages),
          they must be put on a common scale so that they can be combined. Three
          subindexes, one for each of the three dimensions that make up the
          index—health, education, and earnings—are created on a scale of 0 to
          10. The process requires the selection of minimum and maximum
          values—or “goalposts”—for each of the four indicators. These goalposts
          are determined based on the range of the indicator observed from the
          data and also taking into account possible increases and decreases in
          years to come. For life expectancy, for example, the goalposts are 90
          years at the high end and 66 years at the low end. The three
          subindexes are then added together and divided by three to yield the
          American Human Development Index value. (A more detailed technical
          description can be found in the Methodological Note). In this report
          and others, the index score is presented for the whole population—the
          score for Newark is 4.10 out of 10—as well as for different slices of
          the population. For this report, index scores are presented by
          demographic group and by place. The pages that follow present the
          results of the overall HDI; explore in greater detail the constituent
          parts of the HDI, namely health, education, and earnings; explore
          youth well-being; and make recommendations for how to increase the HDI
          scores for everyone, particularly for the groups with the lowest
          scores.
        </p>
      </div>
    </div>
  );
};

const HDI = () => {
  return (
    <Fade in={true} timeout={1400}>
      <div
        className="bg-gray-dark bg-opacity-50 rounded-md mx-4"
        style={{ position: "absolute", top: "830px", marginBottom: "10pt" }}
      >
        <div className="p-2 shadow-md text-gray-light grid grid-flow-row gap-1">
          <div className="text-left my-auto grid grid-flow-col">
            <img className="rounded-md" src={Brain} width={"30%"} />A Long and
            Healthy Life is measured using life expectancy at birth. Measure of
            America calculates life expectancy using mortality data from the New
            Jersey Department of Health and population data from the US Census
            Bureau. For estimates for the Newark population as a whole as well
            as for all gender, nativity, and race/ethnicity combinations, we
            used 2017–2021 mortality data from the New Jersey Department of
            Health. For census tracts, we used CDC/USALEEP life expectancy
            estimates.
          </div>
          <div className="text-left my-auto grid grid-flow-col">
            <img className="rounded-md" src={Dollar} width={"30%"} />
            Access to Knowledge is measured using two indicators: school
            enrollment for the population 3 to 24 years of age and educational
            degree attainment for those ages 25 and older. A one-third weight is
            applied to the enrollment indicator and a two-thirds weight to the
            degree attainment indicator to reflect the relative importance of
            earning degrees as compared to attending school. Both are from the
            US Census Bureau’s 2018–2022 American Community Survey
          </div>
          <div className="text-left my-auto grid grid-flow-col">
            <img className="rounded-md" src={Health} width={"16%"} />A Decent
            Standard of Living is measured using median earnings of all full-
            and part-time workers ages 16 and older from the same 2018–2022
            American Community Survey.
          </div>
        </div>
      </div>
    </Fade>
  );
};

export const QOL = () => {
  const size = Size();
  Moment.locale("en");

  const Reg = () => {
    return (
      <Fade in={true} timeout={1000}>
        <div>
          <div
            className="bg-gray-dark bg-opacity-50 rounded-md mx-4"
            style={{ position: "absolute", top: "120px", marginBottom: "10pt" }}
          >
            <div className="p-2 text-gray-light grid grid-cols-2 gap-1">
              <p className="text-center my-auto">
                Trying to measure all the facets of the expansive concepts of
                human development would be madness. Thus, the United Nations
                Human Development Index as well as the adapted American Human
                Development Index featured in this report measure just three
                fundamental capabilities: a long and healthy life, access to
                knowledge, and a decent standard of living (see FIGURE 1). Why
                only three areas, and why these three in particular? People
                around the world view them as core building blocks of a life of
                value, freedom, and dignity. Healthy lives, good educations, and
                decent wages are not controversial aims. In addition, these
                foundational capabilities make possible other capabilities, such
                as adequate housing in safe neighborhoods. They are also
                bedrocks of human security. And from a practical perspective,
                these are areas that one can measure comparatively easily with
                reliable and regularly collected proxy indicators. It is
                tempting to include indicators of a host of important
                capabilities—such as adequate, affordable housing, food
                security, and political participation—in a well- being index.
                Indexes with large numbers of indicators can be tricky, however.
                Using many indicators can lead to counting the same phenomenon
                two or three times, to confusing results, and to a false
                equivalence between fundamental and derivative issues. A housing
                indicator, for instance, may be counting the same thing, to a
                large degree, as an earnings indicator—how much money a person
                has to pay for life’s essentials. Indexes that include a large
                number of indicators can be difficult to explain and understand,
                diluting their advocacy power. And including many indicators can
                limit the places and demographic groups for which unique scores
                can be calculated. It is important, however, to be realistic
                about the limitations of a parsimonious index like this one. The
                American Human Development Index is not the end of a discussion
                on well-being; it is the start. Once disparities in basic
                outcomes have been identified using the index and its
                constituent parts, the critical task is to examine the why—the
                underlying conditions like power disparities, historical
                realities, past and present policy choices, and more that have
                led to different outcomes for different groups of people. For
                this exploration, a whole host of other indicators is required—
                indicators that are featured throughout the report.
              </p>
              <div className="flex align-center justify-center">
                <img className="rounded-md mt-3" src={HDI2} width={"50%"} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  };

  return (
    <div>
      <Fade in={true} timeout={1000}>
        <h1 className="p-2  text-gray-dark text-center justify-center font-bold text-3xl mt-16">
          Quality Of Life
        </h1>
      </Fade>
      <div
        style={{ backgroundColor: "#bfbfbf" }}
        className="rounded-t-md rounded-b-md"
      >
        <Reg />
        <HDI />
        <HDI_detail />
        <HDI_Groups />
        <HDI_groups_2 />
      </div>
    </div>
  );
};
