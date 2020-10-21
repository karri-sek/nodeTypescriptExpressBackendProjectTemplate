export const shouldByPassAuthHook = (method: string, url: string): boolean => {
  if (method === 'GET' && url === '/health') {
    return true;
  } else {
    return false;
  }
};
export default shouldByPassAuthHook;
