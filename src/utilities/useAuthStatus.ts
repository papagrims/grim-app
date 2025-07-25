export function useAuthStatus() {
  const token = localStorage.getItem("directus_access_token");
  return !!token;
}
