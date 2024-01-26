import computerIcon from '../assets/icons/computer.svg';
import educationIcon from '../assets/icons/education.svg';
import innovationIcon from '../assets/icons/innovation.svg';
import meetingIcon from '../assets/icons/meeting.svg';
import presentationIcon from '../assets/icons/presentation.svg';
import softwareIcon from '../assets/icons/software-engineer.svg';

const exportIconComponent = (iconPath) => {
  const Icon = () => (
    <div>
      <img
        src={iconPath}
        alt="Icon"
        style={{ width: '50px', height: '50px' }}
      />
    </div>
  );
  return Icon;
};

export const IconComputer = exportIconComponent(computerIcon);
export const IconEducation = exportIconComponent(educationIcon);
export const IconInnovation = exportIconComponent(innovationIcon);
export const IconMeeting = exportIconComponent(meetingIcon);
export const IconPresentation = exportIconComponent(presentationIcon);
export const IconSoftware = exportIconComponent(softwareIcon);
