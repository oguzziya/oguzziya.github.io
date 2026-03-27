import styled from "styled-components"

const DetailInfo = styled.div`
  font-size: var(--text-size);
  font-family: var(--font-sans-serif);
  font-weight: 200;
  line-height: 1.5em;

  margin-bottom: var(--default-margin);

  border-radius: 20px;
`

export default function Details({header, information}) {
  return (
    <DetailInfo>
      {information}
    </DetailInfo>
  )
}