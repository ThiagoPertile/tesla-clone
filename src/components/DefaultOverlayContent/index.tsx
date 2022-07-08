import React from 'react';

// import { ReactNode } from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string
  description: string
}


const DefaultOverlayContent: React.FC<Props> = ({
  label, description
}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className='white'>Existing Inventory</button>
      </Buttons>
    </Container>
  )
}

export default DefaultOverlayContent
// interface DefaultOverlayContentProps {
//   children: ReactNode;
// }

// export function DefaultOverlayContent({ children }: DefaultOverlayContentProps) {
//   return (
//     <Container>
//       <h1>DefaultOverlayContent</h1>
//       {children}
//     </Container>
//   );
// }
