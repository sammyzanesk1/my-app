import React from "react";
import MainContent from "./MainContent";
import Header from "./Header";

export default function Page() {
  return (
    <>
      <div className="container">
        <Header />
        <MainContent />
      </div>
    </>
  );
}
