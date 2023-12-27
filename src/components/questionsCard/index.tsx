import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import './index.scss';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  () => ({
    borderBottom: '1px solid rgba(255, 255, 255, 0.40)',
  }),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<AddIcon sx={{ fontSize: '1.5rem', color: '#ffffff' }} />} {...props} />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1.5),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(5),
}));

interface QuestionsProps {
  id: number;
  question: string;
  answer: string;
  expanded: string | false;
  handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
}

export const QuestionsCard: React.FC<QuestionsProps> = ({ id, question, answer, expanded, handleChange }) => {
  return (
    <div>
      <Accordion className="accordion" expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
        <AccordionSummary aria-controls={`panel${id}d-content`} id={`panel${id}d-header`}>
          <Typography fontFamily={'Montserrat'} fontWeight={700} className="accordion__title">
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            fontSize={15}
            fontFamily={'Montserrat'}
            fontWeight={500}
            color={'#ffffffe6'}
            width={'80%'}
            className="accordion__text"
          >
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
