import React from "react";
import {
    Box,
    Drawer,
    useBreakpointValue,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";
import { Center, Flex, HStack, Stack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { FaBars, FaTimes } from "react-icons/fa";

import ColorModeSwitcher from "../ColorModeSwitcher";
import LogoContainer from "../LogoContainer";
import SidebarContent from "./SidebarContent";

const Sidebar = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const EnclosedPage: React.ReactElement = props.page;

    const CrossIcon = (
        <Center h="100%" w="100%">
            <FaTimes />
        </Center>
    );

    const BarIcon = (
        <Center h="100%" w="100%">
            <FaBars />
        </Center>
    );

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    const DrawerMode = (
        <Box>
            <Box w="100%" h="100%">
                {EnclosedPage}
            </Box>
            <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent
                        bgBlendMode={useColorModeValue("white", "gray.900")}
                    >
                        <IconButton
                            m={2}
                            w="10px"
                            size="md"
                            fontSize="lg"
                            variant="ghost"
                            color="current"
                            icon={CrossIcon}
                            aria-label={"Open Navigation Menu"}
                            display={{ base: "flex", lg: "none" }}
                            justifySelf="flex-end"
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <DrawerBody>
                            <SidebarContent />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
    const SidebarMode = (
        <HStack spacing={2} align="stretch">
            <Box shadow="sm" w={{ base: "25%", xl: "300px" }}>
                <SidebarContent />
            </Box>
            <Box w="100%" h="100%">
                {EnclosedPage}
            </Box>
        </HStack>
    );
    return (
        <Stack>
            <Box
                bg={useColorModeValue("white", "gray.900")}
                px={4}
                shadow={"md"}
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size="md"
                        fontSize="lg"
                        variant="ghost"
                        color="current"
                        icon={isOpen ? CrossIcon : BarIcon}
                        aria-label={"Open Navigation Menu"}
                        display={{ lg: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    <LogoContainer />

                    <ColorModeSwitcher />
                </Flex>
            </Box>
            <Box>{isDrawerSidebar ? DrawerMode : SidebarMode}</Box>
        </Stack>
    );
};

export default Sidebar;
