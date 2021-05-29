import { Text } from "@chakra-ui/layout";
import React from "react";
import Navbar from "../../components/Navbar";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <PageContainer>
                <PageHeader>About This Bootstrap</PageHeader>
                <Text>Find out in the repository.</Text>
            </PageContainer>
        </>
    );
};

export default AboutPage;
