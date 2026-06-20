const initials = (n) =>
  n.split(" ").map((w) => w[0]).slice(0, 2).join("");

export const patients = [
  { id: "P-1042", name: "Amelia Hart", age: 34, gender: "Female", phone: "+1 555-0142", email: "amelia.h@mail.com", bloodType: "O+", allergies: ["Penicillin"], conditions: ["Asthma"], lastVisit: "2026-06-14", status: "Stable", avatar: initials("Amelia Hart") },
  { id: "P-1043", name: "Marcus Chen", age: 52, gender: "Male", phone: "+1 555-0188", email: "m.chen@mail.com", bloodType: "A-", allergies: [], conditions: ["Hypertension", "Diabetes Type 2"], lastVisit: "2026-06-17", status: "Active", avatar: initials("Marcus Chen") },
  { id: "P-1044", name: "Sofia Martins", age: 28, gender: "Female", phone: "+1 555-0211", email: "sofia.m@mail.com", bloodType: "B+", allergies: ["Latex"], conditions: [], lastVisit: "2026-06-10", status: "Stable", avatar: initials("Sofia Martins") },
  { id: "P-1045", name: "Daniel O'Connor", age: 67, gender: "Male", phone: "+1 555-0303", email: "d.oconnor@mail.com", bloodType: "AB+", allergies: ["Sulfa drugs"], conditions: ["Coronary Artery Disease"], lastVisit: "2026-06-18", status: "Critical", avatar: initials("Daniel OConnor") },
  { id: "P-1046", name: "Priya Raman", age: 41, gender: "Female", phone: "+1 555-0421", email: "p.raman@mail.com", bloodType: "O-", allergies: [], conditions: ["Migraine"], lastVisit: "2026-06-12", status: "Recovering", avatar: initials("Priya Raman") },
  { id: "P-1047", name: "Liam Nguyen", age: 9, gender: "Male", phone: "+1 555-0512", email: "guardian.nguyen@mail.com", bloodType: "A+", allergies: ["Peanuts"], conditions: ["Eczema"], lastVisit: "2026-06-15", status: "Stable", avatar: initials("Liam Nguyen") },
  { id: "P-1048", name: "Isabella Rossi", age: 73, gender: "Female", phone: "+1 555-0623", email: "i.rossi@mail.com", bloodType: "B-", allergies: ["Aspirin"], conditions: ["Osteoporosis", "Arthritis"], lastVisit: "2026-06-16", status: "Recovering", avatar: initials("Isabella Rossi") },
  { id: "P-1049", name: "Jordan Blake", age: 22, gender: "Male", phone: "+1 555-0744", email: "j.blake@mail.com", bloodType: "O+", allergies: [], conditions: [], lastVisit: "2026-06-19", status: "Active", avatar: initials("Jordan Blake") },
];

export const doctors = [
  { id: "D-01", name: "Dr. Evelyn Park", specialty: "Cardiology", patients: 142, rating: 4.9, status: "Available", avatar: initials("Evelyn Park") },
  { id: "D-02", name: "Dr. Rafael Mendez", specialty: "Neurology", patients: 98, rating: 4.8, status: "In Surgery", avatar: initials("Rafael Mendez") },
  { id: "D-03", name: "Dr. Hana Okafor", specialty: "Pediatrics", patients: 211, rating: 4.95, status: "Available", avatar: initials("Hana Okafor") },
  { id: "D-04", name: "Dr. Samuel Reid", specialty: "Orthopedics", patients: 167, rating: 4.7, status: "Off Duty", avatar: initials("Samuel Reid") },
  { id: "D-05", name: "Dr. Mei Tanaka", specialty: "Dermatology", patients: 124, rating: 4.85, status: "Available", avatar: initials("Mei Tanaka") },
  { id: "D-06", name: "Dr. Omar Hassan", specialty: "Internal Medicine", patients: 189, rating: 4.75, status: "Available", avatar: initials("Omar Hassan") },
];

export const appointments = [
  { id: "A-1", patientId: "P-1042", patientName: "Amelia Hart", doctorName: "Dr. Evelyn Park", time: "09:00", date: "2026-06-19", type: "Follow-up", status: "Scheduled" },
  { id: "A-2", patientId: "P-1045", patientName: "Daniel O'Connor", doctorName: "Dr. Evelyn Park", time: "09:30", date: "2026-06-19", type: "Consultation", status: "Scheduled" },
  { id: "A-3", patientId: "P-1047", patientName: "Liam Nguyen", doctorName: "Dr. Hana Okafor", time: "10:15", date: "2026-06-19", type: "Consultation", status: "Completed" },
  { id: "A-4", patientId: "P-1043", patientName: "Marcus Chen", doctorName: "Dr. Omar Hassan", time: "11:00", date: "2026-06-19", type: "Lab Test", status: "Scheduled" },
  { id: "A-5", patientId: "P-1048", patientName: "Isabella Rossi", doctorName: "Dr. Samuel Reid", time: "13:30", date: "2026-06-19", type: "Follow-up", status: "Scheduled" },
  { id: "A-6", patientId: "P-1046", patientName: "Priya Raman", doctorName: "Dr. Rafael Mendez", time: "14:15", date: "2026-06-19", type: "Consultation", status: "Scheduled" },
  { id: "A-7", patientId: "P-1044", patientName: "Sofia Martins", doctorName: "Dr. Mei Tanaka", time: "15:00", date: "2026-06-19", type: "Consultation", status: "Cancelled" },
  { id: "A-8", patientId: "P-1049", patientName: "Jordan Blake", doctorName: "Dr. Omar Hassan", time: "16:00", date: "2026-06-19", type: "Consultation", status: "Scheduled" },
];

export const notes = [
  {
    id: "N-1", patientId: "P-1045", patientName: "Daniel O'Connor", date: "2026-06-18", doctor: "Dr. Evelyn Park",
    subjective: "Patient reports intermittent chest tightness during mild exertion over the past 5 days.",
    objective: "BP 148/92 mmHg, HR 88 bpm, SpO2 96%. ECG shows mild ST depression in leads V4-V6.",
    assessment: "Suspected stable angina, secondary to known coronary artery disease.",
    plan: "Increase metoprolol to 50mg BID. Order stress echo. Follow-up in 7 days.",
  },
  {
    id: "N-2", patientId: "P-1043", patientName: "Marcus Chen", date: "2026-06-17", doctor: "Dr. Omar Hassan",
    subjective: "Routine diabetes check-up. No new complaints. Adhering to medication.",
    objective: "BP 134/82, HbA1c 7.1%, fasting glucose 142 mg/dL.",
    assessment: "Type 2 Diabetes — fair glycemic control. Mild hypertension.",
    plan: "Continue metformin 1000mg BID. Add low-dose lisinopril 5mg. Recheck in 3 months.",
  },
  {
    id: "N-3", patientId: "P-1042", patientName: "Amelia Hart", date: "2026-06-14", doctor: "Dr. Omar Hassan",
    subjective: "Mild wheezing after morning runs, worse on humid days.",
    objective: "Peak flow 380 L/min (baseline 420). Lungs clear at rest.",
    assessment: "Exercise-induced asthma flare.",
    plan: "Pre-exercise albuterol inhaler. Reassess in 4 weeks.",
  },
];

export const prescriptions = [
  { id: "RX-1", patientId: "P-1045", patientName: "Daniel O'Connor", medication: "Metoprolol", dosage: "50 mg", frequency: "Twice daily", duration: "30 days", prescribedBy: "Dr. Evelyn Park", date: "2026-06-18" },
  { id: "RX-2", patientId: "P-1043", patientName: "Marcus Chen", medication: "Metformin", dosage: "1000 mg", frequency: "Twice daily", duration: "90 days", prescribedBy: "Dr. Omar Hassan", date: "2026-06-17" },
  { id: "RX-3", patientId: "P-1043", patientName: "Marcus Chen", medication: "Lisinopril", dosage: "5 mg", frequency: "Once daily", duration: "90 days", prescribedBy: "Dr. Omar Hassan", date: "2026-06-17" },
  { id: "RX-4", patientId: "P-1042", patientName: "Amelia Hart", medication: "Albuterol Inhaler", dosage: "90 mcg", frequency: "As needed", duration: "30 days", prescribedBy: "Dr. Omar Hassan", date: "2026-06-14" },
  { id: "RX-5", patientId: "P-1048", patientName: "Isabella Rossi", medication: "Alendronate", dosage: "70 mg", frequency: "Weekly", duration: "12 weeks", prescribedBy: "Dr. Samuel Reid", date: "2026-06-16" },
];

export const analyticsWeekly = [
  { day: "Mon", patients: 38, appointments: 52, revenue: 8400 },
  { day: "Tue", patients: 42, appointments: 61, revenue: 9200 },
  { day: "Wed", patients: 35, appointments: 48, revenue: 7600 },
  { day: "Thu", patients: 51, appointments: 67, revenue: 10800 },
  { day: "Fri", patients: 47, appointments: 58, revenue: 9900 },
  { day: "Sat", patients: 29, appointments: 34, revenue: 5400 },
  { day: "Sun", patients: 18, appointments: 22, revenue: 3200 },
];

export const departmentLoad = [
  { name: "Cardiology", value: 28 },
  { name: "Pediatrics", value: 22 },
  { name: "Neurology", value: 16 },
  { name: "Orthopedics", value: 18 },
  { name: "Dermatology", value: 16 },
];