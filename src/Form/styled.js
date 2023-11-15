import styled, { css } from "styled-components";

const FormFieldSharedStyles = css`
    padding: 5px;
    max-width: 300px;
    width: 100%;

    &:invalid{
        background-color: #ffa9a9;
    }

    ${({ secondary }) => secondary && css`
        width: auto;
    `}
`;

export const InputField = styled.input`${FormFieldSharedStyles}`;
export const SelectField = styled.select`${FormFieldSharedStyles}`;

export const StyledForm = styled.form`
    margin-top: 10px;
    width: 100%;
`;

export const Fieldset = styled.fieldset`
    background-color: #cfcfcf;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 3px rgba(10, 10, 10, 1);
`;

export const Legend = styled.legend`
    background-color: #fffd7c;
    padding: 5px;
    border-radius: 5px;
`;

export const LabelText = styled.label`
    display: inline-block;
    max-width: 150px;
    width: 100%;
`;

export const ResultContainer = styled.div`
    width: 100%;
    padding: 10px;
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
    background-color: #646464;
    border-radius: 10px;
    border: 2px solid #646464;
    font-weight: bold;
    color: #fffd7c;
    text-align: center;
    font-size: larger;
`;