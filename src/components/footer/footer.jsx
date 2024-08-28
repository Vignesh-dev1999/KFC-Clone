import footer from "../../photos/footer.png"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Footer() {
  return (
    <section className="bg-black w-full flex  lg:items-start items-center flex-col ">
      <div>
        <div className=" lg:hidden">
          <img className="mb-5" src={footer}></img>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:hidden ">


        <Accordion className="w-[90%] border-gray-500 border-t" style={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white"  />}
            aria-controls="panel1-content "
            id="panel1-header"
            
          >
            <span className="text-white ">
              Legal
            </span>

          </AccordionSummary >
          <AccordionDetails className="bg-black text-white border-gray-500 border-t">
            Terms and Conditions
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Privacy Policy
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Disclaimer
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Caution Notice
          </AccordionDetails>
        </Accordion>

        <Accordion className="w-[90%] border-gray-500 border-t" style={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <span className="text-white ">
              KFC india
            </span>

          </AccordionSummary>
          <AccordionDetails className="bg-black text-white border-gray-500 border-t">
            About KFC
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            KFC Care
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Careers
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Our Golden Past
          </AccordionDetails>
        </Accordion>

        <Accordion className="w-[90%] border-gray-500 border-t" style={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <span className="text-white ">
            KFC Food
            </span>
            
          </AccordionSummary>
          <AccordionDetails className="bg-black text-white border-gray-500 border-t">
            Menu
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Order Lookup
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Gift Card
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Nutrition & Allergen
          </AccordionDetails>
        </Accordion>

        <Accordion className="w-[90%] border-gray-500 border-t" style={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <span className="text-white ">
            Support
            </span>
           
          </AccordionSummary>
          <AccordionDetails className="bg-black text-white border-gray-500 border-t">
            Get Help
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Contact Us
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            KFC  Feedback
          </AccordionDetails>
          <AccordionDetails className="bg-black text-white">
            Privacy Policy
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="p-24 ml-20  hidden lg:flex">
        <div className="flex gap-20">
          <div>
            <img className="mb-5" src={footer}></img>
          </div>

          <div className="text-white ">
            <h2>Legal</h2>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
            <p>Caution Notice</p>
          </div>

          <div className="text-white ">
            <h2>KFC India</h2>
            <p>About KFC</p>
            <p>KFC Care</p>
            <p>Careers</p>
            <p>Our Golden Past</p>
          </div>

          <div className="text-white ">
            <h2>KFC Food</h2>
            <p>Menu</p>
            <p>Order Lookup</p>
            <p>Gift Card</p>
            <p>Nutrition & Allergen</p>
          </div>

          <div className="text-white ">
            <h2>Support</h2>
            <p>Get Help</p>
            <p>Contact Us</p>
            <p>KFC Feedback</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Footer;