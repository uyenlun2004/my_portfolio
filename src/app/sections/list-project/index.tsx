"use client";

import { mockDataProject } from "@/app/mocks/_mockProject";
import { useState } from "react";
import TabProjectSection from "./tab-project";
import TestSCroll from "./testscroll/index";

export default function ListProjectSection() {
  const projects = mockDataProject;

  const [currentTab, setCurrentTab] = useState(1);

  const handleChangeCurrentTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <section className="container flex flex-col flex-wrap mt-[-80px]">
        <TabProjectSection onChangeCurrentTab={handleChangeCurrentTab} currentTab={currentTab} projects={projects} />
        <TestSCroll />
      </section>
    </>
  );
}
