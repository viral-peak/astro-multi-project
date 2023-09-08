import { ObjectFieldTemplateProps } from "@rjsf/utils";
import "../../styles/global.scss";
import React from "react";

//"ui:wrapperClass": "half-section"

const Layout = (props: ObjectFieldTemplateProps) => {
  const layoutRootClass = props?.schema?.["ui:classNames"] || "";
  return (
    //
    <div className={`layout-root ${layoutRootClass}`}>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <div className="elements-wrapper">
        {props.properties.map((element, key) => {
          let wrapperClass =
            props.uiSchema?.[element.name]?.["ui:wrapperClass"] || "";
          return (
            <div className={`element-container ${wrapperClass}`} key={key}>
              {element.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
