import { userStore } from "@frontend/store/user";
import { redirect } from "react-router-dom";

export async function IsAuthLoader() {
  const { isAuthenticated } = userStore.getState();

  if (!isAuthenticated()) {
    // Pokud uživatel není přihlášen, přesměruj na login stránku
    return redirect("/login");
  }

  return null;
}
