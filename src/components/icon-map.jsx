import {
  FaBook,
  FaCheck,
  FaCheckCircle,
  FaComment,
  FaEnvelope,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNewspaper,
  FaPhone,
  FaQuestion,
} from 'react-icons/fa';

const ICONS = {
  book: FaBook,
  check: FaCheck,
  'check-filled': FaCheckCircle,
  comment: FaComment,
  envelope: FaEnvelope,
  github: FaGithub,
  link: FaLink,
  linkedin: FaLinkedin,
  'map-marker': FaMapMarkerAlt,
  newspaper: FaNewspaper,
  phone: FaPhone,
  question: FaQuestion,
};

export function iconFor(key) {
  const Icon = ICONS[key] || FaQuestion;
  return <Icon aria-hidden="true" />;
}
