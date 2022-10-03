import Image from 'next/image';
import { MdPhone, MdMail } from 'react-icons/md';
import { SiGithub, SiSkype, SiLinkedin } from 'react-icons/si';

const PersonInfo = ({
    img,
    name,
    job,
    email,
    phone,
    desc,
    github,
    skype,
    linkedin,
}: IPersonInfo) => {
    return (
        <div className={'rounded container person'}>
            <Image
                src={img}
                alt="profile picture"
                width={300}
                height={300}
                layout="responsive"
                priority
            />
            <h1>{name}</h1>
            <p>{job}</p>
            <div className="subContainer">
                <div className="flexContainer">
                    <div className="icon">
                        <MdMail size={26} />
                    </div>
                    <div className="infoText">
                        <p>{email}</p>
                    </div>
                </div>
                <div className="flexContainer">
                    <div className="icon">
                        <MdPhone size={26} />
                    </div>
                    <div className="infoText">
                        <p>+{phone}</p>
                    </div>
                </div>
                <div className="flexContainer">
                    <div className="icon">
                        <SiGithub size={26} />
                    </div>
                    <div className="infoText">
                        <a href={github} target="_blank" rel="noreferrer">
                            <p className="flexContainer">{github}</p>
                        </a>
                    </div>
                </div>
                <div className="flexContainer">
                    <div className="icon">
                        <SiSkype size={26} />
                    </div>
                    <div className="infoText">
                        <p>{skype}</p>
                    </div>
                </div>
                <div className="flexContainer">
                    <div className="icon">
                        <SiLinkedin size={26} />
                    </div>
                    <div className="infoText">
                        <a href={linkedin} target="_blank" rel="noreferrer">
                            <p className="flexContainer">{linkedin}</p>
                        </a>
                    </div>
                </div>
            </div>
            <p className="desc">{desc}</p>
            <style jsx>
                {`
                    .container {
                        width: 413px;
                        padding: 30px;
                        min-height: 719px;
                    }
                    h1 {
                        margin: 30px 0 0;
                        font-size: 40px;
                    }
                    .subContainer {
                        margin: 30px 0 16px;
                        padding-left: 0;
                    }
                    .flexContainer p {
                        color: var(--main-gray-font);
                        overflow-wrap: anywhere;
                    }
                    .flexContainer .infoText {
                        margin: 0;
                        padding: 10px 20px;
                    }
                    .flexContainer {
                        display: flex;
                        padding: 0;
                        align-items: center;
                    }
                    .flexContainer a {
                        cursor: pointer;
                    }
                    .flexContainer .icon {
                        flex: 0 0 26px;
                        padding: 5px;
                    }

                    .desc {
                        margin: 0 0 10px;
                    }

                    @media screen and (max-width: 780px) {
                        .container {
                            width: 100%;
                            height: 100%;
                        }
                        .flexContainer p {
                            text-align: left;
                            overflow-wrap: anywhere;
                        }
                    }
                    @media screen and (max-width: 480px) {
                        .flexContainer p {
                            font-size: 4vw;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default PersonInfo;
