import React from "react";
import { Link } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const SidebarNavLink = (props: any) => {
    const hoverTextColor = "blue.800";
    const hoverBgColor = "blue.100";

    return (
        <Link
            minW="230"
            px={3}
            py={2}
            rounded={"md"}
            fontWeight="bold"
            _hover={{
                textDecoration: "none",
                color: useColorModeValue(hoverTextColor, hoverBgColor),
                bg: useColorModeValue(hoverBgColor, hoverTextColor),
            }}
            href={props.href}
        >
            {props.children}
        </Link>
    );
};

export default SidebarNavLink;
