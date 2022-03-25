import ExperienceItem from "./ExperienceItem";
import { IExperience } from "../consts/experiences";

interface IExpProp {
  experiences: IExperience[];
}

const ExperiencesList = (props: IExpProp) => {
  return (
    <div>
      {props.experiences.map(({ ...expItem }) => {
        return (
          <ExperienceItem {...expItem} key={expItem.jobTitle}></ExperienceItem>
        );
      })}
    </div>
  );
};

export default ExperiencesList;
