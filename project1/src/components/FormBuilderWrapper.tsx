import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import FormBuilder from "@formBuilder/components/main/FormBuilder";
import createCustomTheme from "@p1/styles/theme";
import { useEffect, useState } from "react";

type propTypes = {
  formId: string | undefined;
};

const FormBuilderWrapper = ({ formId }: propTypes) => {
  const theme = createCustomTheme(false);
  const [inputJSON, setInputJSON] = useState({} as any);

  const importFile = async () => {
    const { default: data } = await import(`../json/${formId}.json`);
    setInputJSON(data);
  };

  formId && importFile();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="form-builder-app-root">
          <FormBuilder
            inputs={inputJSON}
            prefilledData={inputJSON.prefilledData}
          />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default FormBuilderWrapper;
