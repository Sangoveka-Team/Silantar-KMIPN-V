export const getToken = async () => {
  await fetch("/api/getToken", {
    method: "GET",
  }).then(async (res) => {
    return await res.json();
  });
};
