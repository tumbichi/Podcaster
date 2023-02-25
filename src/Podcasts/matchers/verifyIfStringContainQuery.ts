const verifyIfStringContainQuery = (value: string, query: string) => {
  return value.toUpperCase().includes(query.toUpperCase());
};

export default verifyIfStringContainQuery;
