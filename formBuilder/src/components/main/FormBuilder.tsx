import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "./Layout";

const schema: RJSFSchema = {
  type: "object",
};

type PropTypes = {
  inputs: {
    inputSchema: any;
    uiSchema: any;
  };
  prefilledData: {};
};

const FormBuilder = (props: PropTypes) => {
  const [schemaJSON, setSchemaJSON] = useState(schema);
  const {
    inputs: { inputSchema, uiSchema, ...rest },
    prefilledData,
  } = props;

  useEffect(() => {
    setSchemaJSON({
      ...schema,
      properties: inputSchema,
      ...rest,
    });
  }, []);

  return (
    <Form
      schema={schemaJSON}
      validator={validator}
      uiSchema={uiSchema}
      formData={prefilledData}
      showErrorList={false}
      templates={{
        ObjectFieldTemplate: Layout,
      }}
    >
      <div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button variant="outlined" type="reset">
          Cancel
        </Button>
      </div>
    </Form>
  );
};
export default FormBuilder;
