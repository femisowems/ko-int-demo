import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="sd-faq">
      <img src={faqBG} className="sd-faq__bg-shape-1" alt="awesome post" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Frequently Asked Questions"
          titleText={`Have a Question \n For KOHO?`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="Question 1?"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            status={false}
          />
          <AccordionItem
            title="Question 2?"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            status={true}
          />
          <AccordionItem
            title="Question 3?"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            status={false}
          />
          <AccordionItem
            title="Question 4?"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            status={false}
          />
          <AccordionItem
            title="Question 5?"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
