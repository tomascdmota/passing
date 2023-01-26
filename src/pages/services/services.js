import React from 'react'
import Navigation from"../../components/CustomComponents/Nav/Nav.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./services.css"


function services() {
    return (
    
        <div className='services-container'>
              <Navigation/>
      <div className='tab-component-container'>
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      </div>
              
               
           </div>
    
          )
}

export default services