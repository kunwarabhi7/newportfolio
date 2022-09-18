import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import SchoolIcon from "@mui/icons-material/School";
  import WorkIcon from "@mui/icons-material/Work";
  import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <VerticalTimeline lineColor="blue">
        
        <VerticalTimelineElement

          className="bg-[#0a192f] verticial-timeline-element--education"
          contentStyle={{ background: '#0a192f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          date="2012-2016"
          iconStyle={{ background: "blue", color: "silver" }}
          icon={<SchoolIcon />}
        >
          <h3 className="verticial-timeline-element-title ">
            The Technological Institute of Textile and Sciences
          </h3>
          <p>B.Tech Degree</p>
        </VerticalTimelineElement>
    
        <VerticalTimelineElement
          className="verticial-timeline-element--education"
          contentStyle={{ background: '#0a192f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018-2019"
          iconStyle={{ background: "blue", color: "silver" }}
          icon={<WorkIcon />}
        >
          <h3 className="verticial-timeline-element-title">
            JRS INNOVATION JAIPUR
          </h3>
          <p>JOB AS IT INTERN</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verticial-timeline-element--education"
          contentStyle={{ background: '#0a192f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2019-2020"
          iconStyle={{ background: "blue", color: "silver" }}
          icon={<WorkIcon />}
        >
          <h3 className="verticial-timeline-element-title">
            TECHNOGLOBE JAIPUR
          </h3>
          <p>JOB AS PYTHON INTERN</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
