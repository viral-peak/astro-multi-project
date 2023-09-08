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
  const {
    inputs: { inputSchema, uiSchema, ...rest },
    prefilledData,
  } = props;

  return (
    <Form
      schema={{
        ...schema,
        properties: inputSchema,
        ...rest,
      }}
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
