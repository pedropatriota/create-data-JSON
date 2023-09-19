import { formFactory } from "../../utils";
import { FormFields } from "./homeComponents";
import useHome from "./useHome";
import * as Styled from "./styles";
import { TInputValue, TValue } from "./contracts";
import { Button } from "../../components";

const Home = () => {
  const {
    handleChange,
    handleSelectChange,
    handleSubmit,
    getFieldValue,
    dataJSON,
  } = useHome();

  return (
    <Styled.Container>
      <Styled.FormContainer onSubmit={handleSubmit}>
        {formFactory.map((formItem, index) => (
          <FormFields
            key={index}
            index={index}
            formItem={formItem}
            value={getFieldValue(formItem, index) as TValue}
            inputValue={getFieldValue(formItem, index) as TInputValue}
            handleSelectChange={handleSelectChange}
            handleChange={handleChange}
            fieldName={
              formItem?.fields
                ? formItem?.fields[index]?.name
                : (formItem?.name as string)
            }
          />
        ))}
        <Button type="submit">Generate</Button>
      </Styled.FormContainer>
      {dataJSON && <pre data-testid="dataJSON">{dataJSON}</pre>}
    </Styled.Container>
  );
};

export default Home;
