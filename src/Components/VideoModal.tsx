import styled from "styled-components";
import { Plus_Jakarta_Sans } from "next/font/google";
import { VscCloudDownload } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { Colors, FileColors } from "../styles/index";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

type ButtonType = {
  backgroundColor: string;
};

export const VideoModal = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${Colors.lighterBlue};
  }
`;

const Section = styled.div`
  display: flex;
  padding: 2rem;
  border-radius: 0.5rem;
  background: #fff;
  border-top: 0.4rem solid ${Colors.lighterBlue};
  background-color: white;
  flex-direction: column;
  color: ${Colors.default};
  width: 60vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Files = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  padding: 1rem;
  height: min-content;
  background: ${Colors.lighterBlue};
  position: absolute;
  left: 0;
  bottom: 0;
`;

const DownloadButton = styled.button<ButtonType>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  display: flex;
  width: min-content;
  padding: 0.25rem;
  margin: 0.3rem 0;
  border-radius: 0.3rem;
  .cloud-icon {
    background-color: ${(props: ButtonType) =>
      props.backgroundColor ? props.backgroundColor : "white"};
  }
`;
export function ModalComponent(props: any) {
  return (
    <VideoModal className={Jakarta.className}>
      <Section>
        <IoMdClose
          style={{ float: "right", height: "2rem", width: "fit-content" }}
          onClick={props.close}
        />
        <div>
          <h1>
            <span>Webinar:</span>Como aumentar sua geração de Leads feat.
            Traktor
          </h1>
          <div className="play">
            <video></video>
          </div>
          <div>
            <h1>Descrição</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sed mauris in augue consectetur tristique. Aliquam ullamcorper,
              ante eget lobortis fringilla, nisi mauris placerat nulla, ac
              rhoncus orci ipsum eget elit. Sed interdum at tellus id pretium.
              Curabitur lectus urna, convallis efficitur maximus id, pulvinar id
              mauris. Etiam in ante nulla. Donec eget cursus risus. Maecenas non
              mi purus.
            </p>
            <h1>Downloads</h1>
          </div>
        </div>
      </Section>

      <Files>
        <DownloadButton backgroundColor={FileColors.green}>
          <VscCloudDownload
            className="cloud-icon"
            style={{ backgroundColor: `${FileColors.lightGreen}` }}
          />
          Spreadsheet.xls
        </DownloadButton>
        <DownloadButton backgroundColor="blue">
          <VscCloudDownload
            className="cloud-icon"
            style={{ backgroundColor: `${FileColors.lightBlue}` }}
          />
          Document.doc
        </DownloadButton>
        <DownloadButton backgroundColor="yellow">
          <VscCloudDownload
            className="cloud-icon"
            style={{ backgroundColor: `${FileColors.lightYellow}` }}
          />
          Presentatio.ppt
        </DownloadButton>
        <DownloadButton backgroundColor="gray">
          <VscCloudDownload className="cloud-icon" />
          Folder.zip
        </DownloadButton>
      </Files>
    </VideoModal>
  );
}
