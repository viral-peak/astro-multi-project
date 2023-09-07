import { ObjectFieldTemplateProps } from "@rjsf/utils";

//"ui:wrapperClass": "half-section"

const Layout = (props: ObjectFieldTemplateProps) => {
  return (
    //
    <div className="layout-root">
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
