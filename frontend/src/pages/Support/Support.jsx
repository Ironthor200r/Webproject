import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
import { color } from "framer-motion";
const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem" color={"white"}>
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard 
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text={
                <span>
                  <span style={{ color: 'white' }}>Learn more about our real estate, mortgage, and{' '}</span>
                  <span style={{ color: 'pink' }}>corporate account services</span>
                </span>
              }
              
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
