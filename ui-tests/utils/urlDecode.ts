export async function urlAssertion(expectedUrl: string, receivedUrl: string) {
  const { searchParams, origin, pathname } = new URL(expectedUrl);
  const received = new URL(receivedUrl);

  return (
    origin === received.origin &&
    searchParams.toString().includes(received.searchParams.toString()) &&
    pathname === received.pathname
  );
}
console.log(1230
