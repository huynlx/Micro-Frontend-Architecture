import { Remote } from "../context/remotes";

export const findRemoteUrl = (
  remoteName: string,
  remotes: Remote[]
): string => {
  console.log("🚀 ⮕ remotes:", remotes);

  const remote = remotes.find((r) => r.name === remoteName);
  console.log("🚀 ⮕ remote:", remote);

  return remote?.url || "";
};
