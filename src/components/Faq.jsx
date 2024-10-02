"use client";
import { faq } from "@/app/lib/data";
import { useState } from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  const [current, setCurrent] = useState("");
  return (
    <section id="Faq" className="bg-black py-12">
      <div className="all-info mx-auto w-[92%] max-w-[768px] text-center">
        <div className="information text-white">
          <h2 className="section-header mt-6">FAQ</h2>
          <p className="text-sm mb-4 md:text-lg">
            In our FAQ section we provide all general question you are looking
            for
          </p>
        </div>

        <div className="questions-answers w flex flex-col">
          {faq.map((item, index) => {
            return (
              <FaqCard
                key={index}
                {...item}
                current={current}
                setCurrent={setCurrent}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Faq;
