import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

const WorkIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M3 5C3 3.9 3.9 3 5 3H7V1H9V3H15V1H17V3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5ZM5 5V19H19V5H5ZM7 7H9V9H7V7ZM15 7H17V9H15V7ZM9 11H15V13H9V11Z" fill="currentColor" />
  </svg>;

const StartIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M3 2L3 22L21 22L21 2L3 2ZM5 4H19V20H5V4ZM7 8L9 10L7 12V8ZM15 8L13 10L15 12V8Z" fill="currentColor" />
  </svg>;

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work present"
        contentStyle={{
          background: '#00bcd4', // Teal background color for modern feel
          color: '#ffffff', // White text for contrast
          boxShadow: '0 4px 8px rgba(0, 188, 212, 0.2)', // Light shadow for depth
        }}
        contentArrowStyle={{ borderRight: '7px solid #00bcd4' }}
        date="Jan 2022 - Present"
        iconStyle={{ background: '#00bcd4', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Quality Assurance & DevSecOps - Full-time
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Checking whether the modules created meet the partner's requirements
          to improve data accuracy. This includes test attachments and log
          results as evidence of testing using the application developed in
          collaboration with the development team.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#673ab7', // Purple for a more modern touch
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(103, 58, 183, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #673ab7' }}
        date="Mar 2023 - Aug 2023"
        iconStyle={{ background: '#673ab7', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          MERN Fullstack - Internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Yogyakarta, ID</h4>
        <p>
          Developed a full-stack E-commerce application and achieved an 80%
          feature completion rate within 6 weeks using the MERN Stack (MongoDB,
          Express.js, React, Node.js) and RESTful API.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#4caf50', // Green for freshness
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(76, 175, 80, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #4caf50' }}
        date="Aug 2021 - Dec 2021"
        iconStyle={{ background: '#4caf50', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer Bangsisfo Jaskug - Full-time
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Developed an internal system for 5 months using PHP CodeIgniter, SQL
          Server, JavaScript, REST API, and WebSockets.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#ff9800', // Orange for creativity
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(255, 152, 0, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #ff9800' }}
        date="Aug 2021 - Dec 2021"
        iconStyle={{ background: '#ff9800', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Backend Developer - Freelance
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jakarta, ID</h4>
        <p>
          Built a database management system to handle employee data, tender
          archives, and CVs using PHP CodeIgniter, CSS, MySQL, and Microsoft
          Office.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#2196f3', // Blue for calm and trust
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(33, 150, 243, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #2196f3' }}
        date="Mar 2021 - Aug 2021"
        iconStyle={{ background: '#2196f3', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer Bangsisfo Kurlog - Full-time
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Developed an internal website to help reconcile partner or internal
          data using PHP CodeIgniter, SQL Server, JavaScript, CSS, and Bootstrap
          by collaborating with business teams and fellow developers.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#ff5722', // Red for energy
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(255, 87, 34, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #ff5722' }}
        date="Mar 2020 - Nov 2020"
        iconStyle={{ background: '#ff5722', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Frontend Developer & SEO Specialist - Full-time
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jakarta, ID</h4>
        <p>
          Developed and improved the website to appear in organic search results
          and attract users by conducting keyword research using Ahrefs, and
          creating SEO-friendly articles with a structured approach, including
          internal and external links.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#9e9e9e', // Grey for neutral impact
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(158, 158, 158, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #9e9e9e' }}
        date="Nov 2019 - Feb 2020"
        iconStyle={{ background: '#9e9e9e', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer - Full-time
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jakarta, ID</h4>
        <p>
          Improved and developed an existing Point Of Sales website for 4 months
          using Laravel, CSS, JavaScript, and MySQL.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#8bc34a', // Light green for a fresh look
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(139, 195, 74, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #8bc34a' }}
        date="Sep 2018 - Oct 2019"
        iconStyle={{ background: '#8bc34a', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer - Full-time
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Developed and designed systems for 11 months, including landing pages,
          timeline management, and a mini ERP system using PHP, CodeIgniter,
          JavaScript, CSS, MySQL, Firebase, and Node.js.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#607d8b', // Blue-grey for modern sophistication
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(96, 125, 139, 0.2)',
        }}
        contentArrowStyle={{ borderRight: '7px solid #607d8b' }}
        date="Mar 2016 - May 2016"
        iconStyle={{ background: '#607d8b', color: '#ffffff' }}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          UI/UX Designer - Internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Created a UI/UX design for an Android application to solve user
          problems based on user persona research, ensuring a better experience
          using Figma for design and collaborating with researchers and developers.
        </p>
      </VerticalTimelineElement>

      {/* <VerticalTimelineElement
        iconStyle={{ background: '#607d8b', color: '#ffffff' }}
        icon={<StartIcon />}
      /> */}
    </VerticalTimeline>
  );
}
