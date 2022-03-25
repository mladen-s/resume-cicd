import Image from "next/image";
import { IExperience } from "../consts/experiences";

const ExperienceItem = ({
  img,
  dateStart,
  dateEnd,
  jobTitle,
  jobDesc,
}: IExperience) => {
  return (
    <div>
      <Image
        src={img ? img : ""}
        alt="brand image"
        width={200}
        height={200}
        layout="fixed"
      />
      <p>
        {dateStart} - {dateEnd}
      </p>
      <p>{jobTitle}</p>
      <p>{jobDesc}</p>
    </div>
  );
};

export default ExperienceItem;
