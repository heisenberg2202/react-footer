import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Everyday Banking | Personal Banking</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Wealth Management | Online Banking</Heading>
                        <FooterLink href="#">Wealth Management Solutions - Private Banking</FooterLink>
                        <FooterLink href="#">BankingServices</FooterLink>
                        <FooterLink href="#">Investment Solutions</FooterLink>
                        <FooterLink href="#">Wide Range Asset Classes</FooterLink>
                        <FooterLink href="#">Safe Deposit Lockers</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Financing</Heading>
                        <FooterLink href="#">Personal Finance</FooterLink>
                        <FooterLink href="#">Financing against Pledge of Cash Deposits Product</FooterLink>
                        <FooterLink href="#">Home Finance Products</FooterLink>
                        <FooterLink href="#">Non-salary Transfer Personal Finance</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Payments and Transfers</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
