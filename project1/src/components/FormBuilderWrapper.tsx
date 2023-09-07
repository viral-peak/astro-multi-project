import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import FormBuilder from "../../../formBuilder/src/components/main/FormBuilder";
import createCustomTheme from "../styles/theme";
import inputJSON from "../../../formBuilder/src/json/index.json";

const FormBuilderWrapper = () => {
  const theme = createCustomTheme(false);

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
