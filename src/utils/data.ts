import Img1 from "../assets/Frame 1000004004-1.png";
import Img2 from "../assets/Frame 1000004004.png";
import Img3 from "../assets/Frame 1000004008-1.png";
import Img4 from "../assets/Frame 1000004008.png";
import Img5 from "../assets/Frame 1000004032-1.png";
import Img6 from "../assets/Frame 1000004032.png";

export const checkboxOptions = [
  { label: "Get medication reminders", name: "medicationReminders" },
  { label: "Track whether I took my medication", name: "trackMedication" },
  { label: "Keep a list of my meds", name: "medicationList" },
  { label: "Remember when it's time to refill", name: "refillReminders" },
  { label: "Check for drug interactions", name: "drugInteractions" },
  { label: "Track side effects/symptoms", name: "sideEffects" },
  { label: "Track measurements e.g. Blood pressure", name: "measurements" },
];

export const checkboxOptions2 = [
  { name: "medication_reminders", label: "Get medication reminders" },
  {
    name: "track_medication_taken",
    label: "Track whether I took my medication",
  },
  { name: "keep_medication_list", label: "Keep a list of my meds" },
  { name: "remember_refill", label: "Remember when it's time to refill" },
  { name: "check_drug_interactions", label: "Check for drug interactions" },
  { name: "track_side_effects", label: "Track side effects/symptoms" },
  {
    name: "track_measurements",
    label: "Track measurements e.g. Blood pressure",
  },
  { name: "everyday", label: "Everyday" },
  { name: "every_other_day", label: "Every other day" },
  { name: "specific_days_of_week", label: "Specific days of the week" },
  { name: "recurring_cycle", label: "On a recurring cycle" },
  { name: "every_x_days", label: "Every X days" },
  { name: "every_x_weeks", label: "Every X weeks" },
  { name: "every_x_months", label: "Every X months" },
  { name: "only_as_needed", label: "Only as needed" },
];

export const resources = [
  {
    title: "Health benefits of paracetamol",
    type: "Video",
    duration: "03:23",
    image: Img1,
  },
  {
    title: "Side effects of paracetamol",
    type: "article",
    duration: "03:23",
    image: Img2,
  },
  {
    title: "Uses of paracetamol",
    type: "Video",
    duration: "03:23",
    image: Img3,
  },
  {
    title: "Benefits of taking paracetamol",
    type: "article",
    duration: "03:23",
    image: Img4,
  },
  {
    title: "How paracetamol works",
    type: "Video",
    duration: "03:23",
    image: Img5,
  },
  {
    title: "Paracetamol dosage guide",
    type: "article",
    duration: "03:23",
    image: Img6,
  },
  {
    title: "Paracetamol: A comprehensive guide",
    type: "Video",
    duration: "03:23",
    image: Img3,
  },
];
