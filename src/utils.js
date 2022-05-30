export const linkFormatter = (link) => {
  const linkWithHttp = link.slice(0, 5) === 'https' || link.slice(0, 4) === 'http';
  return linkWithHttp ? link : `https://${link}`;
};
