export const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
export const statuses = [
    {
      name: "Course Start Dates",
      id: "course_start",
    },
    {
      name: "Digital Delivery Date",
      id: "digital_delivery",
    },
    {
      name: "Physical Order Date",
      id: "physical_order",
    },
    {
      name: "Expected Delivery Date",
      id: "expected_delivery",
    },
    {
      name: "Opt Out Date",
      id: "opt_out",
    },
    {
      name: "Rental Return Date",
      id: "rental_return",
    },
    {
      name: "Term and Date",
      id: "term_end",
    },
  ];
  
export const eventData = [
    {
      eventId: 1,
      status: "course_start",
      start: "2025-01-29",
      content: "Course X book",
      title: "Nov 29, 2022",
    },
    {
      eventId: 2,
      status: "digital_delivery",
      start: "2025-11-15",
      content: "Faculty Portal Open",
      title: "Nov 15, 2022",
    },
    {
      eventId: 3,
      status: "physical_order",
      start: "2025-01-01",
      content: "Digital Delivery",
      title: "Nov 01, 2022",
    },
    {
      eventId: 4,
      status: "expected_delivery",
      start: "2025-11-10",
      content: "Faculty Portal Open",
      title: "Dec 15, 2022",
    },
    {
      eventId: 5,
      status: "physical_order",
      start: "2025-12-20",
      content: "Faculty Portal Open",
      title: "Dec 20, 2022",
    },
    {
      eventId: 6,
      status: "expected_delivery",
      start: "2025-10-29",
      content: "Course X book",
      title: "Oct 29, 2022",
    },
    {
      eventId: 7,
      status: "term_end",
      start: "2025-12-15",
      content: "Digital Delivery",
      title: "Dec 15, 2022",
    },
  ];
  
export const statusData = {
    course_start: {
      image: "mdi-mailbox-open-up-outline",
      color: "#DB9B1F",
      bgc: "#FAF0DD",
    },
    digital_delivery: {
      image: "mdi-monitor",
      color: "#64C28A",
      bgc: "#E8F6ED",
    },
    physical_order: {
      image: "mdi-book-open-page-variant",
      color: "#4474FF",
      bgc: "#E3EAFF",
    },
    expected_delivery: {
      image: "mdi-truck-outline",
      color: "#378E3D",
      bgc: "#EBF4EC",
    },
    opt_out: {
      image: "mdi-logout-variant",
      color: "#8A0C50",
      bgc: "#EDDBE5",
    },
    rental_return: {
      image: "mdi-keyboard-return",
      color: "#989AFF",
      bgc: "#F0F0FF",
    },
    term_end: {
      image: "mdi-calendar",
      color: "#9A6432",
      bgc: "#F0E8E0",
    },
  };