import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/container";
import { Experience } from "./type";
import Icon from "@icon-park/react/es/all";
import "./experience.style.scss";
import { ClassNames } from "@/modules/classNames";

function ExperienceSection() {
  const CN = new ClassNames("experience");
  const { t } = useTranslation(["experience"]);
  const cloudObjectives: Array<string> = new Array(9)
    .fill(0)
    .map((item, index) => t(`cloud.${index}`));
  const sensifaiObjectives: Array<string> = new Array(7)
    .fill(0)
    .map((item, index) => t(`sensifai.${index}`));
  const garousianObjectives: Array<string> = new Array(5)
    .fill(0)
    .map((item, index) => t(`garousian.${index}`));
  const noxowlObjectives: Array<string> = new Array(5)
    .fill(0)
    .map((item, index) => t(`noxowl.${index}`));
  const iVahidObjectives: Array<string> = new Array(4)
    .fill(0)
    .map((item, index) => t(`ivahid.${index}`));
  const rabinObjectives: Array<string> = new Array(3)
    .fill(0)
    .map((item, index) => t(`rabin.${index}`));

  const experiencesList: Array<Experience> = [
    {
      title: "Stony Brook University",
      type: "Full Time",
      position: "Computer Science Bachelor Degree",
      location: "Stony Brook, NY",
      date: "Aug. 2018 - Present",
      translation_key: "cloud",
      objectives: [
        "Taken 91 credits required by computer science major in Stony Brook University",
      ],
    },
    {
      title: "Walmart",
      type: "Remote",
      position: "Software Engineer",
      location: "California",
      date: "May. 2022 - Feb. 2023",
      translation_key: "cloud",
      objectives: [
        "Maintained an existing SPA and added new UI features using HTML5, Material UI, CSS3, JavaScript, React, and React Native.",
        "Enhanced the application’s functionality using the Redux-Saga.",
        "Performed unit testing through react-testing-library to keep up the code coverage for the application.",
        "Ensured that the technical solution fits into the overall product architecture and design through working with peer engineers",
        "Reported to the Scrum master regularly and participated effectively in various Agile development activities.",
      ],
    },
    {
      title: "Lambda School",
      type: "Full Time",
      position: "Full-Stack Web Developer",
      location: "Remote",
      date: "January 2021 - August 2021 ",
      translation_key: "cloud",
      objectives: [
        "Completed successfully completing the required 960 hours course of study for Full Stack Web Development Certification",
      ],
    },
  ];

  return (
    <section className={CN.generate()}>
      <Container>
        {experiencesList.map((item: Experience) => (
          <div className={CN.generate("item")}>
            <span className={CN.generate("bullet")}></span>
            <span>
              {item.title} <em>({item.type})</em>
            </span>
            <h2>{item.position}</h2>
            <div className={CN.generate("details")}>
              <span>{item.location}</span>
              <p>{item.date}</p>
            </div>
            <ul>
              {item.objectives.map((objective: string, index: number) => (
                <li
                  className={CN.generate("objective")}
                  key={`${item.translation_key}_${index}`}
                >
                  <Icon type={"Dot"} theme={"outline"} size={24} />
                  <p>{objective}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default ExperienceSection;
