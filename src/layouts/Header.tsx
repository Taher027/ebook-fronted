import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { logout } from "../redux/features/user/userSlice";
import toast from "react-hot-toast";

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
    <div className="px-[5%] bg-blue-950">
      <Navbar fluid className="bg-blue-950 text-white">
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white -skew-x-6">
            E-BOOK
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {!user?.email && (
            <>
              <NavbarCollapse>
                <NavbarLink className="text-white" href="/login">
                  Login
                </NavbarLink>
                <NavbarLink className="text-white" href="signup">
                  Sign Up
                </NavbarLink>
              </NavbarCollapse>
            </>
          )}
          {user?.email && (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">{user?.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </DropdownHeader>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Earnings</DropdownItem>
                <DropdownDivider />
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
    </div>
  );
};

export default Header;
