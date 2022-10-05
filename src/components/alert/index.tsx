import { ReactNode } from "react";
import styled from "styled-components/macro";
import { BREAKPOINTS } from "../../constants";
import { TYPOGRAPHY } from "../../styled-partials";

interface AlertProps {
  children: ReactNode;
  heading?: string;
}

const StyledAlert = styled("div")`
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-5);
  border-radius: var(--border-radius-1);
  background: var(--color-2);
  background: ${({ theme }) => theme.alert.background};
  border: 1px solid var(--color-2-dark);
  border: ${({ theme }) => `1px solid ${theme.alert.border}`};
  color: var(--text-black);

  a,
  p {
    ${TYPOGRAPHY.text300}
  }

  a {
    color: ${({ theme }) => theme.alert.link.default};

    &:hover {
      color: ${({ theme }) => theme.alert.link.hover};
    }
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    padding: var(--spacing-6);

    a,
    p {
      ${TYPOGRAPHY.text400};
    }
  }
`;

const AlertHeading = styled.p`
  font-weight: bold;
  margin: 0 0 var(--spacing-2);
`;

const Alert = ({ children, heading }: AlertProps) => {
  return (
    <StyledAlert>
      {heading && <AlertHeading>{heading}</AlertHeading>}

      {children}
    </StyledAlert>
  );
};

export default Alert;
