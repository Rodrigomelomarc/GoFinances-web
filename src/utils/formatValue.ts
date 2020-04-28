const formatValue = (value: string, type: string) => {
  return `${type === 'outcome' ? '-' : ''} R$ ${value}`;
};

export default formatValue;
