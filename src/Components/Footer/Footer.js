import React from "react";

import {
   FaFacebookF,
   FaTwitter,
   FaInstagram,
   FaYoutube,
   FaLinkedinIn,
} from "react-icons/fa";
import { Box,Button,Grid,GridItem,Image,Img,Input,Stack,Tab,TabList,TabPanel,TabPanels,Tabs,Text } from "@chakra-ui/react";
import emailjs from 'emailjs-com'
import { useState } from "react";


const initState={
   user_email:""
}

const Footer = () => {
   const [email,setMail]=useState(initState);

       return (
        <Box>
           {/* <Box bg='red' padding={2} >
           <Box bg='white' margin={4}>
              <Text  textAlign='center' fontSize='20px' color='red' padding={2}   >
             big store for little ones
              </Text>
              </Box>
           </Box> */}
          
          
           
         

           <Box  bg='rgb(135,206,250)' p={{ base:'4',sm:'4',md:'10',lg:'10' }} display={ { base:'block',sm:'block',md:'block',lg:'flex' } } gap={10} width='100%' >
              <Box width={{ base:'100%', sm:'100%', md:'50%' ,lg:"30%" }} >
                    <Image width='70%' src="https://btechmart.com/assets/images/logo001.png"></Image>
                   <Image padding={4} src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/03/26/Pictures/_ab3fd480-30d7-11e8-9916-7e63ef9446cf.jpeg"></Image>
                   <Box mt={4} position='relative' >
                   </ Box>
              </Box>
              <Grid mt={4} display={{base:'none',sm:'none' , md:'grid', lg:'grid' }} templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)' , md:'repeat(5, 1fr)',lg:'repeat(5, 1fr)'}} gap={6}>
                 <GridItem >
                    <Text textAlign='left'  fontWeight='bold'>CATEGORIES</Text>
                    <Box mt={4} borderRight='1px solid' borderColor='lightgrey' textAlign='left' >
                       <Stack>
                       <Text>Clothing & Fashion</Text>   
                       <Text>Toys</Text>            
                       <Text>Books & CDs</Text>
                       <Text>School supplies</Text>
                       <Text>Birthday Party Supplies</Text>
                       <Text>Bath & Skin care</Text>
                       <Text>Baby Gear</Text>
                       <Text>Nursery</Text>
                        <Text>Moms & Maternity</Text>
                        <Text>Gifts</Text>
                        <Text>Preschool Admissions</Text>
                       </Stack>
                    </Box>
                 </GridItem>
                 <GridItem >
                 <Text textAlign='left'  fontWeight='bold'>Btech Mart PARENTING</Text>
                    <Box mt={4} borderRight='1px solid ' borderColor='lightgrey' textAlign='left' >
                       <Stack>
                       <Text>Getting Pregnant</Text>
                       <Text>Pregnancy</Text>
                       <Text>Baby</Text>
                       <Text>Toddler</Text>
                       <Text>Big kid</Text>
                       <Text>Vaccination</Text>
                        <Text>Growth Tracker</Text>
                        <Text>Baby Names</Text>
                        <Text>Coloring Pages</Text>
                       </Stack>
                    </Box>
                 </GridItem>
                 <GridItem >
                 <Text textAlign='left'  fontWeight='bold'  >SHIPPING & POLICIES</Text>
                    <Box mt={4} borderRight='1px solid' borderColor='lightgrey' textAlign='left' >
                     <Stack> 
                    <Text>Payments</Text>
                    <Text>Shipping Policy</Text>   
                    <Text>Cancellation Policy</Text>  
                    <Text>Terms Of Use</Text>
                    <Text>Privacy policy</Text>
                    <Text>Next day & Same day delivery</Text>
                    </Stack>  
                    </Box>
                 </GridItem>
                 <GridItem>
                 <Text textAlign='left' fontWeight='bold' >OUR APPS</Text>
                    <Box mt={4}  borderRight='1px solid' borderColor='lightgrey' textAlign='left'>
                     <Stack>
                       <Text>Btechmart India: Shopping & Parenting</Text>
                       <Text>Btechmart India: Shopping 
                       & Parenting iOS</Text>
                    </Stack>
                    </Box>
                 </GridItem>
                 <GridItem>
                 <Text textAlign='left' fontWeight='bold' >CONNECT WITH US</Text>
                 <Box width='100%'   display='flex' border='1px solid lightgrey' bg='rgba(135,206,250)'>
             <Text padding={3}    ><FaFacebookF fontSize='30px' />  </Text> 
             <Text padding={3}  ><FaTwitter fontSize='30px'  /> </Text> 
             <Text padding={3}  ><FaInstagram fontSize='30px'  /> </Text>
             <Text padding={3}   ><FaYoutube fontSize='30px'  /> </Text> 
             <Text padding={3}   ><FaLinkedinIn fontSize='30px'  /></Text> 
           </Box>
                 </GridItem>
              </Grid>
              </Box>
           
           {  /*
           <Box  justifyContent='space-between' borderBottom='1px solid lightgrey' width='100%' >
              <Box width='100%'   display='flex' border='1px solid lightgrey' bg='rgba(135,206,250)' >
                 <Text  textAlign='left' fontWeight='bold'>Download The App</Text>
                 <Box display='flex' >
                   <Img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293" alt="" />
                    <Img  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293"/>
                 </Box>
              </Box>
              
              <Text  p={3} bg='rgba(135,206,250)' fontSize='12px'  fontWeight='bold'>Newborn & Baby Products Online Shopping in India</Text>
                    <Text  bg='rgba(135,206,250)' fontSize='12px'>Along with all your affection and attention, your little bundle of joy deserves the best 
                    when it comes to newborn & baby items. Pamper your lil' one with the widest range of newborn & baby products:
                     right from diapers to potty chairs, onesies to party wear, booties to clogs, carry-cots to baby walkers,
                     rattles to learning toys, Btechmart has it all! Btechmart newborn baby shopping checklist.</Text>
                    
            <Text  p={3} bg='rgba(135,206,250)' fontWeight='bold' fontSize='12px'>Online Shopping for Kids at Btechmart.com</Text>
            <Text bg='rgba(135,206,250)' fontSize='12px'>Shopping for your kid is no child's play and thus we help you explore, 
            choose and buy from an exhaustive & finest collection of kids' products. Btechmart buying guides, premium store, boutiques,
             products checklist, and look-books are all aimed towards an enriching and a 
            fulfilling shopping experience. That's what makes us your go-to online store for kids shopping.</Text>

            <Text  p={3} bg='rgba(135,206,250)' fontWeight='bold' fontSize='12px'>Btechmart India Offers</Text>
            <Text bg='rgba(135,206,250)' fontSize='12px'>Satisfaction and Savings come guaranteed with irresistible Btechmart offers & deals on a range of high quality products. 
            These are including but not limited to the Btechmart shopping carnivals, loyalty cash program, app offers, bank & wallet offers, Free @ Three, cashback, Guaranteed savings offers & more.

            To start with, why not grab some great discounts with the Btechmart coupons and buy baby & kids products online from anywhere in India with Free Shipping, Cash On Delivery (COD), Same & Next day delivery & EZ returns options. Happy Shopping!
            © 2010-2022  www.Btechmart.com. 
            All rights reserved. This website can be best viewed in resolution width of 1024 and above.
            </Text>
              </Box> */}
              </Box>
           
          
        
     );
};
  
  export default Footer;