import { Outlet } from "react-router-dom";
import { NAV_ITEMS } from "./dashboard.data";

export const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-[300px_1fr] grid-rows-[60px_1fr] overflow-hidden">
      <aside className="border-r p-5 row-start-1 row-end-3">
        <div className="pb-4 border-b">
          <p className="">Woovi Bank</p>
        </div>
        <div className="mt-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <div className="flex items-center rounded-md p-2">
              <item.icon />
              <p className="ml-2">{item.title}</p>
            </div>
          ))}
        </div>
      </aside>
      <header className="col-start-2 flex items-center justify-between p-4">
        <h2 className="">Transaction</h2>
        <div className="">
          <p className="font-bold">Jeseias Domingos</p>
        </div>
      </header>
      <main className="col-start-2">
        <Outlet />
      </main>
    </div>
  );
};
