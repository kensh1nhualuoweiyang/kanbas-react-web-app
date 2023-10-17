import React from "react";
import Add from "./add";
import ClickEvent from "./clickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello")
  }
  return (
    <>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions func={sayHello} />
      <EventObject/>
    </>
  );
};
export default Assignment4;