import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "primereact/button";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Slide from "@mui/material/Slide";
import Popper from "@mui/material/Popper";
import health from "Images/health.png";
import dollar from "Images/dollar.png";
import { Card } from "primereact/card";
import Apply from "Images/Apply.png";
import brain from "Images/brain.png";
import development from "Images/development.jpg";
import Environment from "Images/Environment.jpg";
import Community from "Images/Community.jpg";
import Economic from "Images/Economic.png";
import Health from "Images/Health.jpg";
import Personal from "Images/Personal.jpg";
import graduation from "Images/graduation.jpg";
import { SaveButtonStyle, PopoverStyle } from "components/Display/feutures";
import { Size } from "media-query";

const popupTransitionTime = 1000;
const topPageMax = 100;

const HDI_Context = [
  {
    title: "Environmental Security",
    context:
      "Environmental security focuses on safeguarding the natural environment to ensure a healthy, sustainable quality of life forcurrent and future generations. It involves protecting ecosystems,ensuring access to clean air, water, and soil, and mitigating theimpacts of climate change and pollution. By promoting sustainablepractices, effective waste management, and conservation efforts,environmental security aims to prevent environmental degradation and enhance resilience against natural disasters. This holistic approach ensures that communities can thrive in a safe and stable environment, supporting both ecological balance and human well-being.",
    image: Environment,
    timeout: 2000,
  },
  {
    title: "Community Security",
    context:
      "Community security focuses on safeguarding the well-being and stability of neighborhoods by ensuring safety from crime, providing access to essential services, and promoting economic stability. It involves creating safe living conditions, fostering social cohesion, and protecting individuals' rights while addressing environmental and health concerns. Effective community security integrates crime prevention, emergency response, and community engagement, aiming to build resilient communities where residents can thrive without fear or threat, actively participate in local governance, and benefit from a supportive, inclusive environment.",
    image: Community,
    timeout: 2400,
  },
  {
    title: "Economic Security",
    context:
      "Economic security ensures that individuals and families have stable and sufficient income to meet their basic needs and achieve financial well-being. It involves creating and maintaining access to employment opportunities, affordable housing, and essential services, while also providing social safety nets such as unemployment benefits, pensions, and health insurance. By fostering economic stability through job creation, fair wages, and financial support systems, economic security aims to protect people from poverty and economic hardship, enabling them to maintain a decent standard of living and contribute to overall economic resilience.",
    image: Economic,
    timeout: 2800,
  },
  {
    title: "Health Security",
    context:
      "Health security focuses on ensuring that individuals and communities have access to essential healthcare services, including preventive care, treatment, and emergency medical support. It involves safeguarding against health threats such as diseases, pandemics, and environmental hazards by maintaining robust healthcare systems, effective disease surveillance, and emergency response capabilities. Health security also emphasizes the importance of access to affordable medicines, vaccines, and health education, aiming to protect and improve public health outcomes while reducing health disparities and enhancing resilience against health crises.",
    image: Health,
    timeout: 3200,
  },
  {
    title: "Personal Security",
    context:
      "Personal security involves safeguarding individuals from threats and harm, ensuring their safety and well-being in everyday life. It encompasses protection from physical violence, harassment, and abuse, as well as ensuring privacy and security in personal data and digital interactions. Personal security also includes access to reliable emergency services, legal protection, and support systems that address issues such as domestic violence and personal safety concerns. By fostering environments where individuals feel safe and protected, personal security allows people to live with confidence and peace of mind, contributing to overall quality of life and personal stability.",
    image: Personal,
    timeout: 3600,
  },
];

const Images = [Apply, brain, health, dollar];

const Curtain = ({ handleNext, handlePrev, imageIndex }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "910pt",
      }}
    >
      <Fade in={true} timeout={1200}>
        <div
          style={{ backgroundColor: "transparent" }}
          className="p-2 w-screen"
        >
          <div className="grid grid-flow-col gap-1">
            <div className="flex align-center justify-center">
              <Button sx={{ color: "black" }} onClick={handlePrev}>
                <ArrowBackIosIcon />
              </Button>
            </div>
            <div className="flex align-center justify-center">
              <img className="rounded-md" src={Images[imageIndex]} />
            </div>
            <div className="flex align-center justify-center">
              <Button sx={{ color: "black" }} onClick={handleNext}>
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

const WelcomeContext = ({ TopBarOn, y }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "120px",
      }}
    >
      <div
        style={{ backgroundColor: "transparent" }}
        className="grid grid-cols-2 gap-2 p-2"
      >
        <Slide
          direction="right"
          in={y < topPageMax ? true : false}
          timeout={1300}
        >
          <p className="bg-gray-light bg-opacity-75  shadow-md rounded-md text-gray-dark  p-4">
            In South Africa, the human development approach guides our work,
            focusing on real, meaningful freedom—not just legal rights, but the
            actual ability to make choices about our lives. This approach
            prioritizes improving well-being and expanding freedoms, placing
            people at the heart of the analysis. It examines how political,
            social, environmental, and economic factors shape the choices
            available to individuals. Pioneered by Dr. Mahbub ul Haq and Amartya
            Sen, this framework introduced the Human Development Index (HDI) to
            measure how well people can live long, healthy lives, access
            education, and maintain a decent standard of living. The HDI, first
            presented in the 1990 Human Development Report, shifted focus from
            economic size to the well-being of people, setting a global standard
            for tracking human progress.
          </p>
        </Slide>
        <Slide
          direction="left"
          in={y < topPageMax ? true : false}
          timeout={1300}
        >
          <p className="bg-gray-light bg-opacity-75 shadow-md  rounded-md text-gray-dark  p-4">
            In the South African context, this means addressing inequalities and
            enhancing quality of life by ensuring all citizens have access to
            essential services and opportunities. It involves not only expanding
            choices but also protecting people from threats and ensuring their
            safety. The approach also emphasizes “capabilities”—the real
            opportunities people have to live fulfilling lives. This includes
            good health, education, income, safety, and more. Some capabilities
            come from personal effort, while others depend on external
            conditions, such as access to quality education and public services.
            Capabilities can also be influenced by birth circumstances or legal
            rights. Human security, a key concept in this framework, focuses on
            protecting people from threats and ensuring their safety, rather
            than just state security. It addresses resilience and vulnerability,
            aiming to create an environment where everyone can make choices
            freely and safely. For example, improving human security in South
            Africa involves addressing issues like crime and inadequate public
            services, ensuring that all individuals can lead secure and
            fulfilling lives.
          </p>
        </Slide>
      </div>
    </div>
  );
};

const Welcome2 = ({ y }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "315pt",
        marginBottom: "10pt",
        backgroundColor: "transparent",
      }}
      className="grid grid-cols-3 gap-1"
    >
      {HDI_Context.map((i) => (
        <Card>
          <Fade in={true} timeout={i.timeout}>
            <div>
              <h1 className="flex text-center justify-center text-xl mb-1 font-bold">
                {i.title}
              </h1>
              <div className="grid grid-flow-col gap-1 mb-1">
                <p>{i.context}</p>
              </div>
              <img className="rounded-md" src={i.image} />
            </div>
          </Fade>
        </Card>
      ))}
    </div>
  );
};

export const Landing = ({ setJWT }) => {
  const size = Size();
  const [imageIndex, setImageIndex] = useState(0);

  const [TopBarOn, setTopBarOn] = useState(false);
  const [TopBarOff, setTopBarOff] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const [timeLeft, setTimeLeft] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
      console.log("Click");
    }, 2500);
    return () => clearInterval(intervalId) + handleNext();
  }, [timeLeft]);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setTopBarOn(false);
        setTopBarOff(true);
      } else if (y < window.scrollY) {
        setTopBarOn(true);
        setTopBarOff(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handlePrev = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
    if (imageIndex == 0) {
      setImageIndex(3);
    }
  };
  const handleNext = () => {
    if (imageIndex < 3) {
      setImageIndex(imageIndex + 1);
    }
    if (imageIndex == 3) {
      setImageIndex(0);
    }
  };

  return (
    <div className="max-w-full">
      <Fade in={y < topPageMax ? true : false} timeout={1000}>
        <h1 className="p-2  text-gray-dark text-center justify-center font-bold text-3xl mt-16">
          What is human development ?
        </h1>
      </Fade>
      <div className="flex align-center justify-center p-4">
        <Welcome2 y={y} />
      </div>
      <div className="flex align-center justify-center">
        <WelcomeContext TopBarOn={TopBarOn} y={y} />
      </div>
    </div>
  );
};
