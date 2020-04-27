import { format, parseISO } from 'date-fns';

const formatDate = (dateString: string) => {
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, 'dd/MM/yyy');

  return formattedDate;
};

export default formatDate;
