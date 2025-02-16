import React from "react";
import Icon from "@icon-park/react/es/all";
import Container from "@/components/container";
import FlexRow from "@/components/flex-row";
import FlexCol from "@/components/flex-col";
import Hyperlink from "@/components/hyperlink";
import Linkedin from "@/icons/linkedin";
import links from "@/constants/links.json";
import "./hero.style.scss";
import { ClassNames } from "@/modules/classNames";

function HeroSection() {
  const CN = new ClassNames("hero");

  return (
    <section className={CN.generate("")}>
      <span className={CN.generate("circle", ["one"])} />
      <span className={CN.generate("circle", ["two"])} />
      <Container>
        <FlexRow>
          <FlexCol xs={24} sm={24} md={18}>
            <div className={CN.generate("content")}>
              <h1>
                Hi, 👋🏻
                <br /> <i>I'm</i> Kyle Li
              </h1>
              <p>
                Experienced working as a web developer, is very familiar with
                HTML, CSS, Javascript, React, Redux and other modern skills that
                are used for modern web app.
              </p>
              <div className={CN.generate("actions")}>
                <Hyperlink
                  icon={true}
                  variant={"linear-light"}
                  to={links["social"]["linkedin"]}
                  target="_blank"
                  data-tooltip-id="tooltip-area"
                  data-tooltip-content="LinkedIn"
                  data-tooltip-place="bottom"
                >
                  <Linkedin size={24} />
                </Hyperlink>
                <Hyperlink
                  icon={true}
                  variant={"linear-light"}
                  to={links["social"]["github"]}
                  target="_blank"
                  data-tooltip-id="tooltip-area"
                  data-tooltip-content="Github"
                  data-tooltip-place="bottom"
                >
                  <Icon type="Github" theme="filled" size={24} />
                </Hyperlink>
              </div>
            </div>
          </FlexCol>
          <FlexCol xs={24} sm={24} md={6} center={true}>
            <div className={CN.generate("image")}>
              <figure>
                <img src={"/selfie.jpeg"} alt="Kyle Li" />
              </figure>
            </div>
          </FlexCol>
        </FlexRow>
      </Container>
      <span className={"hero-mouse"} />
    </section>
  );
}

export default HeroSection;
