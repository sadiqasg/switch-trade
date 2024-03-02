import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AboutUs = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const openModal = (contentType) => {
        switch (contentType) {
            case "statements":
                setModalContent(
                    <>
                        <h5>OUR STATEMENTS</h5>
                        <hr />
                        <h6>LANGUAGE</h6>
                        <p>
                            We welcome all official languages because they are
                            the language of International and Local businesses.
                        </p>

                        <h6>OUR MISSION</h6>
                        <p>
                            To provide an utmost and professional service
                            in-line with the best practice and policy, that will
                            link people with people, companies, to build and
                            create a community of business likemind whether far
                            or near and to ensure and maintain qualitative
                            management system.
                        </p>

                        <h6>OBJECTIVE</h6>
                        <p>
                            To provide a qualitative and satisfactory service
                            in-line with the management policy so as to reach
                            users requirements and basically move beyond their
                            request on a standardized basis.
                        </p>

                        <h6>VISION</h6>
                        <p>
                            To possibly stand-out as the most meaningful and
                            efficient online trade business Industry on the
                            globe.
                        </p>
                    </>
                );
                break;

            case "standard":
                setModalContent(
                    <>
                        <h5>OUR STANDARD</h5>
                        <hr />
                        <p>
                            Providing our service to users [traders] or
                            service-providers, our commitment is to continually
                            apply the best standard approach on the product and
                            advancing our scope of mission to get more closer to
                            how people can reach their needs within their
                            comfort zone. We urge users and service providers to
                            completely comply with the standard.
                        </p>

                        <h5>RULES OF ENGAGEMENT</h5>

                        <h6>USERS PRACTICE</h6>
                        <p>
                            We strongly recommend to users to always use genuine
                            details and information to continuously build a
                            healthy trade business relationship for a better,
                            safer environment. Meanwhile, it is advisable for
                            users to:
                        </p>
                        <ul>
                            <li>
                                (a) Give genuine details / identity their legal
                                names and contact information.
                            </li>
                            <li>
                                (b) Signed-up: as only one account is allowed.
                            </li>
                            <li>
                                (c) Always protect and refrain from sharing your
                                password, or allowing third-party to access your
                                account or transferring the same, if the need
                                be, a notice should be given to us to go ahead.
                            </li>
                        </ul>
                        <p>
                            <strong>[i].</strong> No posting of fake news, ads,
                            abusive words, hate speech, or fraudulent activity.
                            <br />
                            <strong>[ii].</strong> Other user's privacy and
                            rights are to be respected.
                            <br />
                            <strong>[iii].</strong> Uploading viruses or harmful
                            code that can cause partial failure or complete
                            destruction of our system from working properly and
                            maximally are strongly discouraged.
                        </p>

                        <h5>ELIGIBILITY</h5>
                        <p>
                            Users are not allowed to use Switchtrade if:
                            <ul>
                                <li>(a) You are below 18 years of age.</li>
                                <li>
                                    (b) You have been convicted by a law court
                                    of a crime.
                                </li>
                                <li>
                                    (c) You have violated our policy and terms.
                                </li>
                                <li>
                                    (d) Or we received a notification from any
                                    government or enforcement agencies that
                                    prohibit you of such under a given law of
                                    jurisdiction.
                                </li>
                            </ul>
                        </p>
                    </>
                );
                break;

            case "terms":
                setModalContent(
                    <>
                        <h5>TERMS & CONDITIONS</h5>
                        <hr />
                        <p>An avalanche welcome to Switch Trade:-</p>

                        <p>
                            Switch Trade is an application hub that enables
                            users to connect with one another, creating an
                            avenue of wealth creation by bringing together users
                            from local and international areas for the purpose
                            of switch-trading commodities, services, material
                            items, etc. Our terms & conditions are to guide
                            users (traders) on our business product and how it
                            can be used.
                        </p>

                        <p>
                            Switch Trade app is a free trading platform for all
                            Users (traders), and they are not expected to pay.
                            Only service providers are obliged to the service
                            terms as stipulated in the process. Moreover,
                            business organization owners are urged to contact
                            the management team prior to exhibiting their ads,
                            promo, products, and services before they are shown
                            on our platform. However, by signing up, users agree
                            that ads and promos can be shown on their walls if
                            it's of interest and useful. Once signed up, your
                            info or data gives us insight into the ads that are
                            better for you.
                        </p>

                        <p>
                            At Switch Trade company, we are committed to our
                            service, and we will never trade your personal data
                            or info to any existing consulting firm, marketing
                            company, or post users' details/identity such as
                            user's name, email address, telephone number,
                            marriage status, or home contact to the
                            aforementioned firm/company, etc., unless you
                            consent to the reason to do so.
                        </p>

                        <p>
                            We give equal priority to the privacy of the users
                            of our product via our management filling system,
                            i.e., users only see meaningful ads without
                            knowledge of your relationship with the
                            advertisers/sender, and we act based on that with no
                            infringement or compromise.
                        </p>
                    </>
                );
                break;

            case "disclaimer":
                setModalContent(
                    <>
                        <h5>DISCLAIMER WARRANTY</h5>
                        <hr />
                        <p>
                            Our target goal is to provide and navigate the best
                            service product and to absolutely spell out the
                            guide for all our users. That our service product is
                            an acquired taste/gradual, as the guarantee cannot
                            be absolute that there will always be shortfalls,
                            challenges coming from imperfections, security or
                            safety to those, and by the permission under the
                            given regulatory law.
                        </p>
                        <p>
                            Furthermore, active or non-active users, we have no
                            privilege to advise or tell them what to say or do
                            to others, and as we will not be responsible for
                            their actions, behaviors, text, pictures, videos
                            containing unlawful actions, abusive words,
                            offensive, hate speech, or fake news, etc.
                        </p>
                        <p>
                            However, since we cannot presume when an unexpected
                            occurrence situation can happen with our service
                            product, therefore, we shall not be fully
                            responsible forthwith or liable therewith to the
                            apex level under the existing law, and under no
                            reason will be responsible to users for any
                            carelessness, negligence, loss of information,
                            profits, personal or collective gains revenue,
                            indirect or direct data, or collateral damage
                            emanated from/regarding our term policy conditions
                            and service, even if we have brief of possible
                            outcomes as exact damages.
                        </p>
                    </>
                );
                break;

            default:
                setModalContent(<p>Content not available.</p>);
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2>About Us</h2>
            <ul>
                <li onClick={() => openModal("statements")}>Our Statements</li>
                <li onClick={() => openModal("standard")}>Our Standard</li>
                <li onClick={() => openModal("terms")}>Terms & Conditions</li>
                <li onClick={() => openModal("disclaimer")}>
                    Disclaimer Warranty
                </li>
            </ul>

            {/* Modal */}
            <Modal show={showModal} onHide={closeModal} size="lg">
                {/* <Modal.Header closeButton>
                    <Modal.Title>About Us</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>{modalContent}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AboutUs;
