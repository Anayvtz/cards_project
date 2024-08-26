import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";



import { useCurrentUser } from "../../../users/providers/UserProvider";
import useUsers from "../../../users/hooks/useUsers";
import ROUTES from "../../../routes/RoutesModel";
import MenuLink from "../../../routes/components/MenuLink";

export default function Menu({ isOpen, anchorEl, onClose }) {
    const { user, email } = useCurrentUser();
    const { handleLogout } = useUsers();
    const logoutHeader = "logout " + email;

    const onLogout = () => {
        handleLogout();
        onClose();
    };

    return (
        <MuiMenu
            open={isOpen}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <Box>
                {!user && (
                    <>
                        <MenuLink
                            text="login"
                            navigateTo={ROUTES.LOGIN}
                            onClick={onClose}
                            styles={{ display: { xs: "block", md: "none" } }}
                        />
                        <MenuLink
                            text="signup"
                            navigateTo={ROUTES.SIGNUP}
                            onClick={onClose}
                            styles={{ display: { xs: "block", md: "none" } }}
                        />

                    </>
                )}
                {user?._id &&
                    <MenuLink
                        text={logoutHeader}
                        onClick={onLogout}
                        styles={{ display: { xs: "block", md: "none" } }}
                    />}

            </Box>
        </MuiMenu>
    );
}