import React, { useState } from "react";
import Container from "@/components/container";
import FlexRow from "@/components/flex-row";
import FlexCol from "@/components/flex-col";
import { ClassNames } from "@/modules/classNames";
import { MediumCard } from "./type";
import potluck from "../../../../imgs/potluck.png";
import usemytech from "../../../../imgs/usemytech.png";
import "./medium.style.scss";

function MediumSection() {
  const CN = new ClassNames("medium");
  const [items, setItems] = useState([
    {
      link: "https://frontend-17dulzzug-blackenjoy27.vercel.app/",
      image: `/potluck.png`,
      title: "Potluck Planner",
      description: "An web app helps organize potluck events~",
    },
    {
      link: "https://use-my-tech-fe-blackenjoy27.vercel.app/",
      image: `/usemytech.png`,
      title: "Use My Tech",
      description: "An web app helps renting devices~",
    },
  ]);
  return (
    <section className={CN.generate("")}>
      <Container>
        <FlexRow stretch={true}>
          {items.map((item: MediumCard, index: number) => (
            <FlexCol xs={24} sm={12} md={8} xl={6} key={index}>
              <a
                className={CN.generate("card")}
                href={item.link}
                target={"_blank"}
                rel="noreferrer"
              >
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            </FlexCol>
          ))}
        </FlexRow>
        <footer
          style={{
            width: "20rem",
            marginTop: "2rem",
            marginLeft: "auto",
            border: "1px solid grey",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span>© Kyle Li 2025</span>
        </footer>
      </Container>
    </section>
  );
}

export default MediumSection;
