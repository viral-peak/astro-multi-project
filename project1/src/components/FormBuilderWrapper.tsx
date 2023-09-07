import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import createCustomTheme from "../styles/theme";
import inputJSON from "@formBuilder/json/index.json";
import FormBuilder from "@formBuilder/components/main/FormBuilder";

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
