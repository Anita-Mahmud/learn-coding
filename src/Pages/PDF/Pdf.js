import React from "react";
import { Page, Text, Document } from "@react-pdf/renderer";



const Pdf = ({details}) => {
  
  return (
    <Document>
      <Page >
        <Text className="text-6xl font-bold text-center m-10" fixed>{details.name}</Text>
        <Text className="text-xl m-10">
        {details.details}
        </Text>
        
      </Page>
    </Document>
  );
};

export default Pdf;