async function getMyDataHandler(user: string) {
  const response = await fetch(`/api/member/board?uid=${user}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const { data } = await response.json();
  return data;
}
export default getMyDataHandler;
