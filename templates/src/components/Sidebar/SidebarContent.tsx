import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { FaComment } from "react-icons/fa";
import SidebarNavLink from "./SidebarNavLink";

// TODO: Modularize the component
// TODO: Further testing needed

const SidebarContent = () => {
    return (
        <Stack
            spacing="12"
            p={{ base: 2, lg: 8 }}
            align="flex-start"
            height={{ base: "100%", lg: "92vh" }}
            overflowY="scroll"
            sx={{
                "&::-webkit-scrollbar": {
                    width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: useColorModeValue("gray.200", "gray.700"),
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: useColorModeValue("blue.400", "blue.600"),
                    backgroundClip: "content-box",
                    borderRadius: "8px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: useColorModeValue("blue.500", "blue.500"),
                },
            }}
        >
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>
                    <SidebarNavLink key={"/settings"} href={"/settings"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Settings</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>{" "}
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>{" "}
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>{" "}
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>{" "}
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>{" "}
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>{" "}
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>{" "}
            <Box>
                <Text
                    fontWeight="bold"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="small"
                >
                    MAIN
                </Text>

                <Stack spacing={2} mt={2} align="stretch">
                    <SidebarNavLink key={"/dashboard"} href={"/dashboard"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Dashboard</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/"} href={"/"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Home</Text>
                        </HStack>
                    </SidebarNavLink>{" "}
                    <SidebarNavLink key={"/classes"} href={"/classes"}>
                        <HStack>
                            <Icon as={FaComment} fontSize="18" />
                            <Text fontWeight="medium">Classes</Text>
                        </HStack>
                    </SidebarNavLink>
                </Stack>
            </Box>
        </Stack>
    );
};

export default SidebarContent;
