const formatValue = (value: string, type: string) => {
  return `${type === 'outcome' ? '-' : ''} R$ ${value},00`;
};

export default formatValue;
