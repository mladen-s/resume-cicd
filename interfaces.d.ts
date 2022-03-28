interface IPersonInfo {
  img: StaticImageData;
  name: string;
  job: string;
  email: string;
  phone: number;
  desc: string;
}
interface IHobbies {
  img?: StaticImageData;
  title: string;
  desc: string;
}
interface IExperience {
  img?: StaticImageData;
  dateStart: string;
  dateEnd: string;
  jobTitle: string;
  jobDesc: string;
}
interface IData {
  personInfo: IPersonInfo;
  hobbies: IHobbies[];
  experiences: IExperience[];
}
interface IHobbyProp {
  hobbies: IHobbies[];
}
interface IExpProp {
  experiences: IExperience[];
}
