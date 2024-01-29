import {
  Avatar,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import userImg from "../assets/user.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { logout } from "../redux/features/user/userSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Container from "./Container";
const Header = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  const handleLogout = () => {
    if (user?.email) {
      signOut(auth).then(() => {
        dispatch(logout());
        toast("LogOut SuccessFull!");
      });
    }
  };

  return (
    <div className=" bg-blue-950">
      <Container>
        <Navbar className="bg-blue-950 text-white">
          <NavbarBrand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white -skew-x-6">
              E-BOOK
            </span>
          </NavbarBrand>
          <div className="flex md:order-2">
            {!user?.email && (
              <>
                <div className="flex gap-2 justify-center items-center">
                  <Link className="text-white" to="/login">
                    Login
                  </Link>
                  <Link className="text-white" to="signup">
                    Sign Up
                  </Link>
                </div>
              </>
            )}
            {user?.email && (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={<Avatar alt="User settings" img={userImg} rounded />}
                >
                  <DropdownItem>
                    <Link to={"/add-book"}>Add Book</Link>
                  </DropdownItem>
                  <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
                </Dropdown>
              </>
            )}
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink className="text-white" href="/">
              Home
            </NavbarLink>
            <NavbarLink className="text-white" href="/all-books">
              All Books
            </NavbarLink>
            {user?.email && (
              <>
                <NavbarLink className="text-white" href="/wishlist">
                  Wish List
                </NavbarLink>
                <NavbarLink className="text-white" href="/readinglist">
                  Reading List
                </NavbarLink>
              </>
            )}
          </NavbarCollapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
