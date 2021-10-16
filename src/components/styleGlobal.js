import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  background: ${({ primary }) =>
    primary ? `var(--mainblack)` : "transparent"};
  padding: 0.75rem 1rem;
  font: var(--button);
  color: ${({ primary }) =>
    primary ? `var(--mainwhite)` : "var(--mainblack)"};
  border-radius: 8rem;
  ${({ secondary }) => (secondary ? "text-decoration: underline" : null)}
  &:active {
    transform: scale(0.96);
  }
`;

export const ListProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Divide = styled.div`
  height: 1px;
  background-color: var(--mainblack);
  width: 100%;
  padding: 0rem;
`;

export const DecorationOne = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: -130px;
  top: 48px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(126, 55, 246, 0.5) 0%,
    rgba(191, 53, 142, 0) 100%
  );
  backdrop-filter: blur(199px);
  z-index: -1;
`;
