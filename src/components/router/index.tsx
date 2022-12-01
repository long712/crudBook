import Book from "../book";
import LogIn from "../login";
import AddNewBook from "../newBook";
import ViewBook from "../viewBook";

export interface IRouter {
  id: number;
  navigate: string;
  element: JSX.Element;
}
export const ROUTERS: IRouter[] = [
  {
    id: 1,
    navigate: "/book",
    element: <Book />,
  },
  {
    id: 2,
    navigate: "/addNewBook",
    element: <AddNewBook />,
  },
  {
    id: 3,
    navigate: "/viewBook",
    element: <ViewBook />,
  },
  {
    id: 4,
    navigate: "/viewBook/editBook",
    element: <AddNewBook />,
  },
  {
    id: 5,
    navigate: "/login",
    element: <LogIn />,
  },
];
